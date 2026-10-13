import Link from "next/link"

import { Container } from "./container"

/**
 * The shell every policy page sits in: a title, a plain summary someone can
 * stop after, the page's own date, then short clauses.
 */
export function LegalPage({
  title,
  summary,
  updated,
  contents,
  children,
}: {
  title: string
  summary: React.ReactNode
  updated: string
  contents?: { id: string; title: string }[]
  children: React.ReactNode
}) {
  return (
    <Container gutters={false}>
      <section className="border-b border-border px-6 pt-14 pb-12 sm:px-10 md:pt-20">
        <h1 className="text-4xl leading-[1.1] sm:text-[2.75rem]">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {summary}
        </p>
        {contents && (
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {contents.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-8 text-xs text-muted-foreground">
          Last updated {updated}
        </p>
      </section>
      <div className="px-6 py-14 sm:px-10 md:py-20">
        <div className="grid max-w-2xl gap-12">{children}</div>
      </div>
    </Container>
  )
}

/** A part of a policy. The heading is the thing people link to. */
export function Clause({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <div className="mt-4 grid gap-4 text-[0.9375rem] leading-relaxed text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  )
}

export function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[0.6em] size-1 shrink-0 rounded-full bg-primary-accent/60"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/** Inline link, styled once so the pages cannot disagree about it. */
export function Ref({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const className = "text-primary-accent underline underline-offset-4"
  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-sm break-all text-foreground">
      {children}
    </code>
  )
}
