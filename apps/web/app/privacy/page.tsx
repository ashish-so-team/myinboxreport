import type { Metadata } from "next"

import { Clause, Code, LegalPage, List, Ref } from "@/components/legal-page"
import { company, lastUpdated, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "There is no MyInboxReport server. Your mail, the database built from it, and your keys stay in your browser.",
}

const CONTENTS = [
  { id: "who", title: "Who we are" },
  { id: "site", title: "Visiting the site" },
  { id: "mail", title: "Your mail" },
  { id: "google", title: "Google user data" },
  { id: "models", title: "Models" },
  { id: "new", title: "New features" },
  { id: "delete", title: "Deleting it" },
  { id: "contact", title: "Contact" },
]

/**
 * Written for the app the architecture describes, not only the site that
 * exists today: Google's review reads this page before the app ships, and
 * every later source or model must fit what it already says.
 */
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      summary="There is no MyInboxReport server. Your mail, the database built from it, and your keys stay in your browser. Mail is sent only to the provider it came from and the model you chose."
      updated={lastUpdated.privacy}
      contents={CONTENTS}
    >
      <Clause id="who" title="Who we are">
        <p>
          MyInboxReport is open-source software made by {company.maker} and
          published by {company.legalName}, the company that operates{" "}
          {company.maker}. &ldquo;We&rdquo; in this policy means{" "}
          {company.legalName}. The source code is at{" "}
          <Ref href={site.repo}>github.com/ashish-so-team/myinboxreport</Ref>,
          under the MIT license. Everything this policy says about how the app
          behaves can be checked there.
        </p>
      </Clause>

      <Clause id="site" title="Visiting the site">
        <p>
          myinboxreport.com is a set of static files served by Cloudflare. We
          add no analytics, no cookies, no error reporting and no third-party
          scripts.
        </p>
        <p>
          Like any web host, Cloudflare processes your IP address and request
          details to deliver the pages and protect them from abuse. We do not
          use those logs to identify or track visitors.
        </p>
      </Clause>

      <Clause id="mail" title="Your mail">
        <p>
          When you connect a mailbox, the app runs entirely in your browser.
        </p>
        <List
          items={[
            <>
              <strong>Reading.</strong> It reads your mail directly from the
              provider you connect, with read-only access: for Gmail, only{" "}
              <Code>gmail.readonly</Code>; for JMAP providers, only methods that
              read; for IMAP, through a small bridge that runs on your own
              computer. It never sends, deletes, moves or labels a message.
            </>,
            <>
              <strong>Storing.</strong> Message headers, text and attachment
              names are stored in a database in your browser&apos;s private
              storage for this site. Attachment contents are never downloaded.
            </>,
            <>
              <strong>Tokens and keys.</strong> Your Google access token is kept
              in memory only and expires within an hour. A mail provider token,
              bridge password or model API key you enter is stored in the same
              browser database and sent only to the service it belongs to.
            </>,
            <>
              <strong>What it builds.</strong> The mailbox map, the tables you
              accept, your corrections, saved questions and dashboards are
              stored in the same place, on your device.
            </>,
            <>
              <strong>Nothing comes to us.</strong> We have no server that
              receives mail, tokens, keys or the database, so we cannot read,
              sell or hand over any of it.
            </>,
          ]}
        />
      </Clause>

      <Clause id="google" title="Google user data">
        <p>
          MyInboxReport&apos;s use and transfer of information received from
          Google APIs adheres to the{" "}
          <Ref href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </Ref>
          , including the Limited Use requirements.
        </p>
        <List
          items={[
            "Gmail data is used only to show you your own mailbox map, tables, answers and charts in your browser.",
            "It is transferred only to the model provider you choose, to answer your own requests, and only the messages that task needs.",
            "It is never used for advertising, never sold, and never used by us to train models.",
            "No person at MyInboxReport can read it, because it never reaches us.",
          ]}
        />
      </Clause>

      <Clause id="models" title="Models">
        <p>
          To sort mail, build tables and answer questions, the app uses a model
          you choose. Where that model runs decides where your mail goes.
        </p>
        <List
          items={[
            <>
              <strong>In your browser.</strong> Small models, such as
              classifiers, may run inside the page. Their files are downloaded
              like any other part of the site; your mail is never sent anywhere
              to use them.
            </>,
            <>
              <strong>On your machine.</strong> A local model such as Ollama.
              Mail sent to it stays on your computer.
            </>,
            <>
              <strong>A hosted provider, with your own key.</strong> For example
              Anthropic. Requests go from your browser straight to that
              provider, under its privacy policy and your agreement with it. We
              never see the key or the requests.
            </>,
          ]}
        />
        <p>
          The app sends a model only what a step needs: a few examples you
          approved when it proposes tables, and one message at a time when it
          fills a table you accepted.
        </p>
      </Clause>

      <Clause id="new" title="New features">
        <p>
          MyInboxReport will grow: more mail providers, more kinds of models,
          new ways to view your mail. Every feature keeps the rules on this
          page. If one ever needed your mail to go somewhere new, it would be
          off until you turned it on, it would say where the mail goes, and this
          policy would change before the feature shipped.
        </p>
      </Clause>

      <Clause id="delete" title="Deleting it">
        <List
          items={[
            "Settings, then “Delete everything in this browser”, removes the database, your sources and your keys.",
            "Clearing this site's data in your browser does the same.",
            <>
              Revoke Google&apos;s access at{" "}
              <Ref href="https://myaccount.google.com/permissions">
                myaccount.google.com/permissions
              </Ref>
              , and any provider token or model key in that provider&apos;s own
              settings.
            </>,
          ]}
        />
      </Clause>

      <Clause title="Children">
        <p>
          MyInboxReport is not directed at children under 13 and we do not
          knowingly collect their information. We collect no one&apos;s.
        </p>
      </Clause>

      <Clause title="Changes to this policy">
        <p>
          Every change is a commit in the public repository, so the full history
          of this page is visible. The date above changes with each one.
        </p>
      </Clause>

      <Clause id="contact" title="Contact">
        <p>
          Questions about privacy: {company.contactEmail}. Security reports: the
          repository&apos;s security policy.
        </p>
      </Clause>
    </LegalPage>
  )
}
