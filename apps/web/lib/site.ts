/**
 * The facts the pages repeat, in one place: a contact address that is right
 * on one page and wrong on another is worse than one that is wrong on both.
 */

export const site = {
  name: "MyInboxReport",
  url: "https://myinboxreport.com",
  description:
    "An AI agent turns your Gmail into a private analytics database, designed around what you want to track, parsed by your own model, stored only in your browser.",
  repo: "https://github.com/ashish-so-team/myinboxreport",
  roadmap:
    "https://github.com/ashish-so-team/myinboxreport/blob/main/ROADMAP.md",
  license: "https://github.com/ashish-so-team/myinboxreport/blob/main/LICENSE",
} as const

/** Who publishes the site. imado is the maker; Zivaro is the legal entity. */
export const company = {
  legalName: "Zivaro Software Inc.",
  maker: "imado",
  makerUrl: "https://imado.cloud",
  contactEmail: "hello@ashish.so",
  governingLaw: "the State of Delaware, United States",
} as const

/** Each legal page's own date. Change it in the same commit as the page. */
export const lastUpdated = {
  privacy: "13 October 2026",
  terms: "13 October 2026",
} as const
