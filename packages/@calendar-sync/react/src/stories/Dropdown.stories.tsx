import { CalendarSyncDropdown, type CalendarEvent } from "@/index"
import ICONS from "@/lib/icons"
import type { Meta, StoryObj } from "@storybook/react"

function ExampleDropdown() {
  const event = {
    title: "Meeting with the boss",
    description: "The boss wants to discuss about the new project.",
    start: "2024-07-14 10:00:00 +0300",
    duration: [8, "hour"],
  } satisfies CalendarEvent

  return (
    <div className="container p-4 mx-auto">
      <CalendarSyncDropdown.Menu event={event}>
        <CalendarSyncDropdown.Trigger className="flex items-center gap-2">
          <ICONS.calendar />
          Add to Calendar
        </CalendarSyncDropdown.Trigger>
        <CalendarSyncDropdown.Content>
          <CalendarSyncDropdown.GoogleButton />
          <CalendarSyncDropdown.AppleButton />
          <CalendarSyncDropdown.OutlookButton />
          <CalendarSyncDropdown.YahooButton />
        </CalendarSyncDropdown.Content>
      </CalendarSyncDropdown.Menu>
    </div>
  )
}

const meta: Meta<typeof ExampleDropdown> = {
  component: ExampleDropdown,
}

type Story = StoryObj<typeof ExampleDropdown>

export const Basic: Story = {}

export default meta
