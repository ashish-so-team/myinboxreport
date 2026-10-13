import { cn } from "@/lib/utils"

/**
 * The one column every page is set in: 72rem, centred, the gutters, and
 * hairlines at its sides (imado's Container). `gutters` off is for a wrapper
 * whose children pad themselves.
 */
export function Container({
  className,
  gutters = true,
  ...props
}: React.ComponentProps<"div"> & { gutters?: boolean }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl border-border sm:border-x",
        gutters && "px-6 sm:px-10",
        className
      )}
      {...props}
    />
  )
}
