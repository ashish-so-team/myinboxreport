import { describe, expect, test } from "bun:test"
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"

import { FOOTER_LINKS } from "./components/site-footer"
import { company, site } from "./lib/site"
import nextConfig from "./next.config"

const APP = join(import.meta.dir, "app")

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? files(path) : [path]
  })
}

describe("the site is static", () => {
  test("next builds a static export", () => {
    expect(nextConfig.output).toBe("export")
  })

  test("no route handler, middleware or server action exists", () => {
    const all = files(APP)
    expect(all.filter((f) => /[/\\]route\.[jt]sx?$/.test(f))).toEqual([])
    expect(existsSync(join(import.meta.dir, "middleware.ts"))).toBe(false)
    expect(existsSync(join(import.meta.dir, "proxy.ts"))).toBe(false)
    for (const f of all.filter((f) => /\.[jt]sx?$/.test(f))) {
      expect(readFileSync(f, "utf8")).not.toMatch(/["']use server["']/)
    }
  })

  test("the security headers ship with the assets", () => {
    const headers = readFileSync(
      join(import.meta.dir, "public", "_headers"),
      "utf8"
    )
    expect(headers).toContain("Content-Security-Policy:")
    expect(headers).toContain("connect-src 'self';")
    expect(headers).toContain("frame-ancestors 'none'")
  })
})

describe("links", () => {
  test("every footer link to this site is a real page", () => {
    for (const link of FOOTER_LINKS) {
      if (!link.href.startsWith("/")) continue
      expect(existsSync(join(APP, link.href, "page.tsx"))).toBe(true)
    }
  })

  test("outside links point only to the repository", () => {
    for (const link of FOOTER_LINKS) {
      if (link.href.startsWith("/")) continue
      expect(link.href.startsWith(site.repo)).toBe(true)
    }
  })
})

describe("legal pages", () => {
  for (const page of ["privacy", "terms"]) {
    const source = readFileSync(join(APP, page, "page.tsx"), "utf8")

    test(`${page} takes the company and contact from lib/site`, () => {
      expect(source).toContain("company.legalName")
      expect(source).toContain("company.contactEmail")
      expect(source).not.toContain(company.contactEmail)
    })

    test(`${page} shows its own date`, () => {
      expect(source).toContain(`lastUpdated.${page}`)
    })
  }

  test("privacy carries Google's Limited Use statement", () => {
    const source = readFileSync(join(APP, "privacy", "page.tsx"), "utf8")
    expect(source).toContain("Limited Use requirements")
    expect(source).toContain("api-services-user-data-policy")
  })
})
