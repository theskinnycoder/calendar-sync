import {
  apple,
  google,
  outlook,
  outlookMobile,
  yahoo,
  type CalendarEvent,
  type CalendarType,
} from "@calendar-sync/core"

function useCalendarSync() {
  const generateCalendarUrl = (type: CalendarType, event: CalendarEvent) => {
    let url = ""

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    switch (type) {
      case "google":
        url = google(event)
        break
      case "apple":
        url = apple(event)
        break
      case "yahoo":
        url = yahoo(event)
        break
      case "outlook":
        url = isMobile ? outlookMobile(event) : outlook(event)
        break
    }

    return url
  }

  const addToCalendar = (
    type: CalendarType,
    event: CalendarEvent,
    newTab = true,
  ) => {
    const url = generateCalendarUrl(type, event)

    if (newTab) {
      window.open(url, "_blank")
    } else {
      window.location.href = url
    }
  }

  return {
    generateCalendarUrl,
    addToCalendar,
  }
}

export { useCalendarSync, type CalendarEvent, type CalendarType }
