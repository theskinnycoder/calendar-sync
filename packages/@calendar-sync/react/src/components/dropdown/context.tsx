import type { CalendarEvent } from "@calendar-sync/hooks"
import * as React from "react"

type CalendarSyncDropdownProps = {
  event: CalendarEvent | null
  newTab?: boolean
}

const CalendarSyncDropdownContext =
  React.createContext<CalendarSyncDropdownProps>({
    event: null,
    newTab: true,
  })

export { CalendarSyncDropdownContext, type CalendarSyncDropdownProps }
