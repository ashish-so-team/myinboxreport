import type { Metadata } from "next"

import { Clause, LegalPage, List, Ref } from "@/components/legal-page"
import { company, lastUpdated, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms",
  description:
    "MyInboxReport is free, open-source software that runs in your browser.",
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      summary="MyInboxReport is free, open-source software that runs in your browser. Use it on mail you are allowed to read. It comes with no warranty, and the services you connect it to have their own terms."
      updated={lastUpdated.terms}
    >
      <Clause title="The agreement">
        <p>
          These terms are between you and {company.legalName}, which publishes
          MyInboxReport at myinboxreport.com. By using the site or the app you
          agree to them. The source code is separately licensed under the{" "}
          <Ref href={site.license}>MIT license</Ref>, and nothing here limits
          what that license allows.
        </p>
      </Clause>

      <Clause title="What the service is">
        <p>
          The site delivers the app&apos;s files to your browser. After that the
          app runs on your device. We do not host, store or have access to your
          mail, your database or your keys, so we cannot recover them for you.
        </p>
      </Clause>

      <Clause title="Your responsibilities">
        <List
          items={[
            "Connect only mailboxes you own or are authorised to read.",
            "Keep your device and your API keys secure. Anyone with access to your browser profile can open your database.",
            "Follow the terms of the services you connect, including Google, your mail provider and your model provider.",
            "You pay any charges your own model provider makes for your requests.",
          ]}
        />
      </Clause>

      <Clause title="Answers can be wrong">
        <p>
          Tables and answers are produced by a language model from your mail and
          can be incomplete or wrong. Check anything you rely on, especially
          money, dates and legal or tax matters, against the original messages.
        </p>
      </Clause>

      <Clause title="No warranty">
        <p>
          The site and the app are provided &ldquo;as is&rdquo;, without
          warranty of any kind, express or implied, including fitness for a
          particular purpose and non-infringement.
        </p>
      </Clause>

      <Clause title="Limitation of liability">
        <p>
          To the extent the law allows, we are not liable for any indirect,
          incidental or consequential damages, or for loss of data, arising from
          your use of the site or the app. Our total liability is limited to the
          amount you paid us, which is zero.
        </p>
      </Clause>

      <Clause title="Changes and ending">
        <p>
          We may change these terms or stop offering the site. Changes are
          commits in the public repository and take effect when published. You
          can stop using the app at any time and delete its data as described in
          the <Ref href="/privacy">privacy policy</Ref>.
        </p>
      </Clause>

      <Clause title="Law">
        <p>These terms are governed by the laws of {company.governingLaw}.</p>
      </Clause>

      <Clause title="Contact">
        <p>{company.contactEmail}</p>
      </Clause>
    </LegalPage>
  )
}
