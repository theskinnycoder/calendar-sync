import { DropdownMenu } from "@/components/ui/dropdown-menu"
import * as React from "react"
import {
  CalendarSyncDropdownContext,
  type CalendarSyncDropdownProps,
} from "./context"

interface CalendarSyncDropdownMenuProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenu>,
    CalendarSyncDropdownProps {}

const CalendarSyncDropdownMenu = ({
  children,
  event,
  newTab = true,
  ...rest
}: CalendarSyncDropdownMenuProps) => {
  return (
    <CalendarSyncDropdownContext.Provider
      value={{
        event,
        newTab,
      }}
    >
      <DropdownMenu {...rest}>{children}</DropdownMenu>
    </CalendarSyncDropdownContext.Provider>
  )
}

CalendarSyncDropdownMenu.displayName = "CalendarSyncDropdown.Menu"

export { CalendarSyncDropdownMenu, type CalendarSyncDropdownMenuProps }
