// A holding page until the landing page's mockup is approved (PR 1).
export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-6 px-6">
      <p className="font-mono text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
        Being rebuilt
      </p>
      <h1 className="font-heading text-2xl">Ask your inbox questions.</h1>
      <p className="text-sm leading-relaxed">
        MyInboxReport turns your mailbox into a database only you hold, and
        answers in charts and tables. It runs in your browser: your mail goes
        only to your mail provider and the model you choose.
      </p>
      <p className="text-sm text-muted-foreground">
        Open source on{" "}
        <a
          className="text-primary-accent underline-offset-4 hover:underline"
          href="https://github.com/ashish-so-team/myinboxreport"
        >
          GitHub
        </a>
        . Made by{" "}
        <a
          className="text-primary-accent underline-offset-4 hover:underline"
          href="https://imado.cloud"
        >
          imado
        </a>
        .
      </p>
    </main>
  )
}
