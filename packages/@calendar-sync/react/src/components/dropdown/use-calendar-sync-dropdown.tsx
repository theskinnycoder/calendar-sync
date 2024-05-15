import * as React from "react"
import { CalendarSyncDropdownContext } from "./context"

export default function useCalendarSyncDropdown() {
  const context = React.useContext(CalendarSyncDropdownContext)

  if (!context) {
    throw new Error(
      "useCalendarSyncDropdown must be used within a CalendarSyncDropdown component",
    )
  }

  const { event, ...rest } = context

  if (!event || Object.keys(event).length === 0) {
    throw new Error(
      "useCalendarSyncDropdown must be used within a CalendarSyncDropdown component with an event",
    )
  }

  return { event, ...rest }
}
