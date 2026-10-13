"use client"

import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

/** 16px line icons, drawn in currentColor so they follow the text tone. */
function SystemIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <rect
        x="1.75"
        y="2.75"
        width="12.5"
        height="8.5"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5.5 14h5M8 11.25V14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LightIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <circle
        cx="8"
        cy="8"
        r="2.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.2 3.2l1.07 1.07M11.73 11.73l1.07 1.07M3.2 12.8l1.07-1.07M11.73 4.27l1.07-1.07"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function DarkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <path
        d="M13.5 9.6A5.75 5.75 0 0 1 6.4 2.5a5.75 5.75 0 1 0 7.1 7.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const OPTIONS = [
  { value: "system", label: "System theme", Icon: SystemIcon },
  { value: "light", label: "Light theme", Icon: LightIcon },
  { value: "dark", label: "Dark theme", Icon: DarkIcon },
] as const

const subscribe = () => () => {}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // The stored choice is unknown until hydration; render none as pressed
  // until then rather than guess and flip.
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex gap-0.5 rounded-full border border-border p-0.5"
    >
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          title={label}
          aria-pressed={mounted && theme === value}
          onClick={() => setTheme(value)}
          className="grid size-7 place-items-center rounded-full text-muted-foreground transition-colors hover:text-foreground aria-pressed:bg-muted aria-pressed:text-foreground pointer-coarse:size-11"
        >
          <Icon />
        </button>
      ))}
    </div>
  )
}
