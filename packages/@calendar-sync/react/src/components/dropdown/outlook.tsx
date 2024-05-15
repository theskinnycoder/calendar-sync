import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalendarSync } from "@calendar-sync/hooks"
import * as React from "react"
import useCalendarSyncDropdown from "./use-calendar-sync-dropdown"

interface CalendarSyncDropdownOutlookButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalendarSyncDropdownOutlookButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalendarSyncDropdownOutlookButtonProps
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
        addToCalendar("outlook", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.outlook />
        <span>Add to Outlook Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalendarSyncDropdownOutlookButton.displayName =
  "CalendarSyncDropdown.OutlookButton"

export {
  CalendarSyncDropdownOutlookButton,
  type CalendarSyncDropdownOutlookButtonProps,
}
