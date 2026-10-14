import { company, site } from "@/lib/site"

const STEPS = [
  {
    title: "Connect",
    body: "Sign in with read-only Gmail access and choose how far back to sync, a month or a year. Your emails land in a SQLite database inside your browser, and nowhere else.",
  },
  {
    title: "Describe",
    body: "Tell the agent what matters to you. It samples your inbox and designs your database: your tables, your categories, your rules. Not a schema we invented for everyone.",
  },
  {
    title: "Ask",
    body: "Ask questions in plain language. The agent writes the SQL, renders the chart, and pins the ones you like to your dashboard. When it gets something wrong, correct it, and the correction stays.",
  },
] as const

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-14 border-b border-border px-6 py-16 sm:px-10 md:py-24"
    >
      <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
        Three steps. Zero uploads to us.
      </h2>
      <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="grid content-start gap-3 bg-background p-6 sm:p-8"
          >
            <span className="font-mono text-sm text-primary-accent">
              {i + 1}
            </span>
            <h3 className="text-xl">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function YourSchema() {
  return (
    <section className="grid gap-10 border-b border-border px-6 py-16 sm:px-10 md:py-24 lg:grid-cols-2 lg:items-center">
      <div className="grid max-w-md content-start gap-4">
        <h2 className="text-3xl leading-tight sm:text-4xl">
          A database designed for you, not for everyone.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Most finance apps force your life into their categories. Here, the
          agent starts with an empty database and builds one around your actual
          inbox: a trader gets an investments table, a freelancer gets invoices,
          you get whatever you ask for.
        </p>
        <p className="text-sm text-muted-foreground">
          SQL you can read, inspect and export at any time.
        </p>
      </div>
      <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-card">
        <p className="border-b border-border px-4 py-3 text-xs text-muted-foreground">
          Generated after you said &ldquo;track my investments&rdquo;
        </p>
        <pre className="overflow-x-auto p-4 font-mono text-[0.8125rem] leading-relaxed sm:text-sm">
          <code>
            <span className="text-muted-foreground">
              {"-- created by your agent, in your browser\n"}
            </span>
            {"CREATE TABLE u_investments (\n"}
            {"  id          INTEGER PRIMARY KEY,\n"}
            {"  broker      TEXT,      "}
            <span className="text-muted-foreground">{"-- 'Zerodha'\n"}</span>
            {"  action      TEXT,      "}
            <span className="text-muted-foreground">
              {"-- 'buy' | 'sell'\n"}
            </span>
            {"  instrument  TEXT,\n"}
            {"  amount      REAL,\n"}
            {"  currency    TEXT DEFAULT 'INR',\n"}
            {"  traded_at   INTEGER    "}
            <span className="text-muted-foreground">{"-- epoch ms\n"}</span>
            {");"}
          </code>
        </pre>
      </div>
    </section>
  )
}

const RECEIPT = [
  ["Your emails", "SQLite in your browser"],
  ["AI parsing", "your Ollama, or your API key"],
  ["Gmail scope", "read-only, revoke anytime"],
  ["Our servers", "none exist"],
  ["Cookies and trackers", "none"],
] as const

export function Receipt() {
  return (
    <section
      id="privacy"
      className="flex scroll-mt-14 flex-col items-center gap-10 border-b border-border px-6 py-16 sm:px-10 md:py-24"
    >
      <h2 className="text-center text-3xl leading-tight sm:text-4xl">
        Here&rsquo;s your receipt.
      </h2>
      <div className="w-full max-w-md rounded-xl border border-border bg-card font-mono text-sm">
        <div className="border-b border-dashed border-border px-6 py-4 text-center">
          <p>myinboxreport</p>
          <p className="mt-1 text-xs text-muted-foreground">
            data collection statement
          </p>
        </div>
        <dl className="grid gap-3 px-6 py-5">
          {RECEIPT.map(([item, where]) => (
            <div
              key={item}
              className="flex items-baseline justify-between gap-4"
            >
              <dt className="shrink-0 text-xs">{item}</dt>
              <dd className="text-right text-xs text-muted-foreground">
                {where}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex items-baseline justify-between border-t border-dashed border-border px-6 py-4">
          <span className="text-xs">Total collected</span>
          <span className="text-base">0 bytes</span>
        </div>
      </div>
      <p className="max-w-md text-center text-sm leading-relaxed text-muted-foreground">
        The app is a static page. There is no backend to send anything to: not
        by policy, by architecture.{" "}
        <a
          href={site.repo}
          className="text-primary-accent underline underline-offset-4"
        >
          Read the source
        </a>{" "}
        and check, or read the{" "}
        <a
          href="/privacy"
          className="text-primary-accent underline underline-offset-4"
        >
          privacy policy
        </a>
        .
      </p>
    </section>
  )
}

export function BuiltInTheOpen() {
  return (
    <section className="grid gap-x-14 gap-y-6 border-b border-border px-6 py-16 sm:px-10 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <h2 className="text-3xl leading-tight sm:text-4xl">
        Built by imado, in the open.
      </h2>
      <div className="grid max-w-xl gap-4 text-base leading-relaxed text-muted-foreground">
        <p>
          imado is a mail platform. MyInboxReport is one of the things we build
          along the way, published so anyone can run it on their own mail.
        </p>
        <p>
          It is being rebuilt from scratch right now: Gmail first, then JMAP
          providers such as Fastmail, then IMAP through a small bridge on your
          own machine. The{" "}
          <a
            href={site.roadmap}
            className="text-primary-accent underline underline-offset-4"
          >
            roadmap
          </a>{" "}
          has what comes next.
        </p>
        <p>
          <a
            href={company.makerUrl}
            className="text-primary-accent underline underline-offset-4"
          >
            imado.cloud
          </a>
        </p>
      </div>
    </section>
  )
}
