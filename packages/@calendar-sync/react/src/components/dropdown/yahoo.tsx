import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalendarSync } from "@calendar-sync/hooks"
import * as React from "react"
import useCalendarSyncDropdown from "./use-calendar-sync-dropdown"

interface CalendarSyncDropdownYahooButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalendarSyncDropdownYahooButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalendarSyncDropdownYahooButtonProps
>((props, forwardedRef) => {
  const { addToCalendar } = useCalendarSync()
  const { event, newTab } = useCalendarSyncDropdown()

  return (
    <DropdownMenuItem
      {...props}
      ref={forwardedRef}
      role="link"
      onClick={(e) => {
        e.preventDefault()
        void addToCalendar("yahoo", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.yahoo />
        <span>Add to Yahoo Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalendarSyncDropdownYahooButton.displayName = "CalendarSyncDropdown.YahooButton"

export {
  CalendarSyncDropdownYahooButton,
  type CalendarSyncDropdownYahooButtonProps,
}
