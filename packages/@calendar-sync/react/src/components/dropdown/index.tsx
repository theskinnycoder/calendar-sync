import * as React from "react"
import {
  CalendarSyncDropdownAppleButton,
  type CalendarSyncDropdownAppleButtonProps,
} from "./apple"
import {
  CalendarSyncDropdownContent,
  type CalendarSyncDropdownContentProps,
} from "./content"
import {
  CalendarSyncDropdownGoogleButton,
  type CalendarSyncDropdownGoogleButtonProps,
} from "./google"
import {
  CalendarSyncDropdownMenu,
  type CalendarSyncDropdownMenuProps,
} from "./menu"
import {
  CalendarSyncDropdownOutlookButton,
  type CalendarSyncDropdownOutlookButtonProps,
} from "./outlook"
import {
  CalendarSyncDropdownTrigger,
  type CalendarSyncDropdownTriggerProps,
} from "./trigger"
import {
  CalendarSyncDropdownYahooButton,
  type CalendarSyncDropdownYahooButtonProps,
} from "./yahoo"

function CalendarSyncDropdown({ children }: React.PropsWithChildren) {
  return children
}

CalendarSyncDropdown.displayName = "CalendarSyncDropdown.Root"

CalendarSyncDropdown.Menu = CalendarSyncDropdownMenu
CalendarSyncDropdown.Trigger = CalendarSyncDropdownTrigger
CalendarSyncDropdown.Content = CalendarSyncDropdownContent
CalendarSyncDropdown.GoogleButton = CalendarSyncDropdownGoogleButton
CalendarSyncDropdown.AppleButton = CalendarSyncDropdownAppleButton
CalendarSyncDropdown.OutlookButton = CalendarSyncDropdownOutlookButton
CalendarSyncDropdown.YahooButton = CalendarSyncDropdownYahooButton

export {
  CalendarSyncDropdown,
  CalendarSyncDropdownAppleButton,
  CalendarSyncDropdownContent,
  CalendarSyncDropdownGoogleButton,
  CalendarSyncDropdownMenu,
  CalendarSyncDropdownOutlookButton,
  CalendarSyncDropdownTrigger,
  CalendarSyncDropdownYahooButton,
  type CalendarSyncDropdownAppleButtonProps,
  type CalendarSyncDropdownContentProps,
  type CalendarSyncDropdownGoogleButtonProps,
  type CalendarSyncDropdownMenuProps,
  type CalendarSyncDropdownOutlookButtonProps,
  type CalendarSyncDropdownTriggerProps,
  type CalendarSyncDropdownYahooButtonProps,
}
