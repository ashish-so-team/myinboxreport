import { Container } from "@/components/container"

import { Hero } from "./_components/hero"
import {
  BuiltInTheOpen,
  HowItWorks,
  Receipt,
  YourSchema,
} from "./_components/sections"

/**
 * The landing page, carried over from v2's: what it is (hero and a chat),
 * how it works, why the schema is yours, what is collected (nothing), and
 * who makes it.
 */
export default function Page() {
  return (
    <Container gutters={false}>
      <Hero />
      <HowItWorks />
      <YourSchema />
      <Receipt />
      <BuiltInTheOpen />
    </Container>
  )
}
