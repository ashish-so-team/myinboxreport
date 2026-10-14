/**
 * The product in one exchange, carried over from v2: the agent reads a
 * sample, asks what to track, builds the tables and answers with a chart.
 * One person's mail, as an example; nobody else's tables look like this.
 */

const BARS = [22, 34, 18, 42, 30, 56, 38, 64, 48, 72, 58, 84]

function Agent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span
        aria-hidden
        className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-muted"
      >
        <span className="size-2 rounded-full bg-primary" />
      </span>
      <div className="grid min-w-0 gap-2">{children}</div>
    </div>
  )
}

function Bubble({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg bg-muted px-3.5 py-2.5 text-sm leading-relaxed">
      {children}
    </p>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="font-mono text-[0.8125rem]">{children}</code>
}

export function ChatExample() {
  return (
    <figure className="min-w-0 animate-rise overflow-hidden rounded-xl border border-border bg-card [animation-delay:300ms]">
      <figcaption className="flex items-center justify-between border-b border-border px-4 py-3 text-xs text-muted-foreground">
        <span>Agent, running in your browser</span>
        <span>Example</span>
      </figcaption>
      <div className="grid gap-5 p-4 sm:p-5">
        <Agent>
          <span className="text-xs text-muted-foreground">Agent</span>
          <Bubble>
            I read a sample of your last 3 months: 1,101 emails. I can see
            Zerodha contract notes, Swiggy orders, salary from Acme Corp, and 14
            newsletters. What do you want to track?
          </Bubble>
        </Agent>

        <p className="max-w-[85%] justify-self-end rounded-lg bg-primary px-3.5 py-2.5 text-sm leading-relaxed text-primary-foreground">
          investments and food delivery. also my SaaS subscriptions
        </p>

        <Agent>
          <Bubble>
            Done. I created <Code>investments</Code>, <Code>food_delivery</Code>{" "}
            and <Code>subscriptions</Code> tables and started parsing. Food
            delivery so far:
          </Bubble>
          <div className="w-full max-w-72 rounded-lg border border-border bg-background p-3">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs text-muted-foreground">
                Food delivery
              </span>
              <span className="font-heading text-base tabular-nums">
                ₹4,120
              </span>
            </div>
            <div
              role="img"
              aria-label="Food delivery spend, last 12 weeks, rising"
              className="mt-3 flex h-16 items-end gap-1"
            >
              {BARS.map((height, i) => (
                <span
                  key={i}
                  className="min-w-0 flex-1 rounded-t-[2px] bg-chart-2"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Last 12 weeks · pinned to your dashboard
            </p>
          </div>
        </Agent>
      </div>
    </figure>
  )
}
