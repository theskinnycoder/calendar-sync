import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import ICONS from "@/lib/icons"
import { useCalendarSync } from "@calendar-sync/hooks"
import * as React from "react"
import useCalendarSyncDropdown from "./use-calendar-sync-dropdown"

interface CalendarSyncDropdownAppleButtonProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  inset?: boolean
}

const CalendarSyncDropdownAppleButton = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  CalendarSyncDropdownAppleButtonProps
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
        addToCalendar("apple", event, newTab)

        if (props?.onClick) {
          props.onClick(e)
        }
      }}
    >
      <div className="flex items-center space-x-2">
        <ICONS.apple />
        <span>Add to Apple Calendar</span>
      </div>
    </DropdownMenuItem>
  )
})

CalendarSyncDropdownAppleButton.displayName = "CalendarSyncDropdown.AppleButton"

export {
  CalendarSyncDropdownAppleButton,
  type CalendarSyncDropdownAppleButtonProps,
}
