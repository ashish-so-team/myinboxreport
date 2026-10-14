import { site } from "@/lib/site"

import { ChatExample } from "./chat-example"

export function Hero() {
  return (
    <section className="border-b border-border px-6 pt-16 pb-20 sm:px-10 lg:pt-24 lg:pb-28">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <h1 className="max-w-xl animate-rise text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl">
            Ask your inbox anything.{" "}
            <span className="text-muted-foreground">It stays your inbox.</span>
          </h1>
          <p className="mt-7 max-w-lg animate-rise text-base leading-relaxed text-muted-foreground [animation-delay:120ms] sm:text-lg">
            An AI agent turns your Gmail into a private analytics database:
            schema, categories and dashboards designed around what <em>you</em>{" "}
            want to track. Parsed by your local model or your own API key.
            Stored in your browser. No server of ours ever sees it.
          </p>
          <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:200ms]">
            <a
              href="#how"
              className="inline-flex min-h-11 items-center rounded-md bg-primary px-4.5 text-sm font-medium text-primary-foreground"
            >
              See how it works
            </a>
            <a
              href={site.repo}
              className="inline-flex min-h-11 items-center rounded-md border border-border px-4.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Follow the build on GitHub
            </a>
          </div>
        </div>
        <ChatExample />
      </div>
    </section>
  )
}
