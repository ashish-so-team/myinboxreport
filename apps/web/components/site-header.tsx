import Link from "next/link"

import { site } from "@/lib/site"

import { Container } from "./container"
import { Wordmark } from "./logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container className="flex h-14 items-center justify-between gap-6">
        <Link href="/" aria-label="MyInboxReport home">
          <Wordmark />
        </Link>
        <nav aria-label="Site" className="flex items-center gap-5">
          <Link
            href="/#how"
            className="hidden min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            How it works
          </Link>
          <Link
            href="/privacy"
            className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <a
            href={site.repo}
            className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  )
}
