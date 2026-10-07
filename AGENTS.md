# Working in this repository

**MyInboxReport** turns a person's mailbox into a database only they hold,
and answers questions about it with SQL and charts. It runs entirely in the
browser: a static site, no backend, open source (MIT). It is made by imado
and links to it; it is not part of the imado platform and shares no code
with it.

It reads people's mail. A bug here leaks or corrupts the most private data
they have. Prefer the boring, verifiable option.

## Where to look

| You need                                          | Read                                                |
| ------------------------------------------------- | --------------------------------------------------- |
| The design, the decisions, the threat model, the order of PRs | [docs/architecture.md](./docs/architecture.md) |

## How we work

Feature branch → PR to `main` → review → merge. A change that adds a mail
source, a model, or anything that reads or stores mail starts with its
section in `docs/architecture.md` (or a plan beside it) carrying its threat
model, reviewed on the draft PR before code follows.

```bash
bun install
bun run lint && bun run typecheck && bun run test && bun run build
```

## The rules most often broken

1. **No backend, ever.** No API routes, no server that sees mail, a token,
   or a key. If a feature needs one, the feature is wrong — or it is the
   local bridge, which runs on the person's own machine.
2. **Dependencies point inward.** `packages/core` knows no framework, no
   provider, no storage engine. A mail source, a store, a model is an
   adapter behind a port in `core`.
3. **Every source is the same to everything above the port.** Nothing
   outside `packages/source-*` knows whether mail came from Gmail, JMAP or
   IMAP.
4. **Mail is hostile input, including to the model.** Message text is data,
   never instructions: the extraction call has no tools, model output never
   renders as HTML, and nothing the model writes is fetched (no remote
   images, no auto-followed links).
5. **Mail goes only where the person sent it**: their mail provider and the
   model they chose. No analytics, no error reporter, no third-party script
   on a page that holds mail.
6. **A failure is shown, never swallowed.** A message that failed to fetch
   or extract is a visible row with its reason and a retry.
7. `bun test`, not Vitest.

Report what actually happened: a skipped step, a failing test, or a rule
you decided not to follow is one plain sentence.
