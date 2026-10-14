import Link from "next/link"

import { company, site } from "@/lib/site"

import { Container } from "./container"
import { Wordmark } from "./logo"
import { ThemeToggle } from "./theme-toggle"

/** Every page the footer links to. `site-footer.test.ts` checks each exists. */
export const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: site.repo, label: "Source" },
  { href: site.roadmap, label: "Roadmap" },
] as const

export function SiteFooter() {
  return (
    <footer>
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/">
              <Wordmark />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              No cookies, no analytics, no servers.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-4">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <p className="text-xs text-muted-foreground">
            Made by{" "}
            <a
              href={company.makerUrl}
              className="text-foreground underline underline-offset-4"
            >
              {company.maker}
            </a>{" "}
            · Open source, MIT
          </p>
          <ThemeToggle />
        </div>
      </Container>
    </footer>
  )
}
