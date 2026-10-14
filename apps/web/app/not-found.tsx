import Link from "next/link"

import { Container } from "@/components/container"

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mt-4 text-base text-muted-foreground">
        There is nothing at this address.{" "}
        <Link
          href="/"
          className="text-primary-accent underline underline-offset-4"
        >
          Go to the home page
        </Link>
        .
      </p>
    </Container>
  )
}
