import type { Metadata } from "next"
import {
  Geist as Heading,
  Geist_Mono as Mono,
  Geist as Sans,
} from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"

// imado's fonts (docs/architecture.md D12): Geist, headings at weight 400.
const sans = Sans({
  subsets: ["latin"],
  variable: "--font-sans-base",
  display: "swap",
})

const heading = Heading({
  subsets: ["latin"],
  variable: "--font-heading-base",
  display: "swap",
  weight: "400",
})

const mono = Mono({
  subsets: ["latin"],
  variable: "--font-mono-base",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://myinboxreport.com"),
  title: "MyInboxReport — ask your inbox questions",
  description:
    "Turn your mailbox into a database only you hold, and ask it questions. Runs in your browser; your mail never leaves your machine. Open source, made by imado.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(sans.variable, heading.variable, mono.variable)}
    >
      <body className="min-h-dvh antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
