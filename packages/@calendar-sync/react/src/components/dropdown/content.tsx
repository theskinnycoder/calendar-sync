import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import * as React from "react"

interface CalendarSyncDropdownContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuContent> {}

const CalendarSyncDropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContent>,
  CalendarSyncDropdownContentProps
>(({ children, ...rest }, forwardedRef) => {
  return (
    <DropdownMenuContent
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </DropdownMenuContent>
  )
})

CalendarSyncDropdownContent.displayName = "CalendarSyncDropdown.Content"

export { CalendarSyncDropdownContent, type CalendarSyncDropdownContentProps }
