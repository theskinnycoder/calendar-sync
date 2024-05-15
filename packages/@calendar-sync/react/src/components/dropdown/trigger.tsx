import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import * as React from "react"

interface CalendarSyncDropdownTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger> {}

const CalendarSyncDropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuTrigger>,
  CalendarSyncDropdownTriggerProps
>(({ children, ...rest }, forwardedRef) => {
  return (
    <DropdownMenuTrigger
      ref={forwardedRef}
      asChild
      {...rest}
    >
      <Button variant="outline">{children}</Button>
    </DropdownMenuTrigger>
  )
})

CalendarSyncDropdownTrigger.displayName = "CalendarSyncDropdown.Trigger"

export { CalendarSyncDropdownTrigger, type CalendarSyncDropdownTriggerProps }
