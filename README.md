# MyInboxReport

Ask your inbox questions. MyInboxReport reads your mail **in your browser**,
builds a small database of it that only you hold, and answers in charts and
tables: what you spend on subscriptions, who writes to you most, which
receipts you never filed.

- **Nothing leaves your machine** except to the mail provider you connect and
  the model you choose. There is no MyInboxReport server.
- **Any mailbox**: Gmail today, any JMAP provider (Fastmail, imado) next, IMAP
  through a local bridge later.
- **Your model**: a local one through Ollama, or your own API key.
- **Open source**, MIT.

Made by [imado](https://imado.cloud).

> Status: being rebuilt from scratch. The design is
> [docs/architecture.md](./docs/architecture.md).

## Develop

```bash
bun install
bun run dev
```

## License

[MIT](./LICENSE)
