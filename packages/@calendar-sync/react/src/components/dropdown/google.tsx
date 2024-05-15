import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalendarSync } from "@calendar-sync/hooks"
import * as React from "react"
import useCalendarSyncDropdown from "./use-calendar-sync-dropdown"

interface CalendarSyncDropdownGoogleButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalendarSyncDropdownGoogleButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalendarSyncDropdownGoogleButtonProps
>((props, forwardedRef) => {
  const { addToCalendar } = useCalendarSync()
  const { event, newTab } = useCalendarSyncDropdown()

  return (
    <DropdownMenuItem
      {...props}
      role="link"
      ref={forwardedRef}
      onClick={(e) => {
        e.preventDefault()
        void addToCalendar("google", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.google />
        <span>Add to Google Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalendarSyncDropdownGoogleButton.displayName =
  "CalendarSyncDropdown.GoogleButton"

export {
  CalendarSyncDropdownGoogleButton,
  type CalendarSyncDropdownGoogleButtonProps,
}
