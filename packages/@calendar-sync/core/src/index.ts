import dayjs, { type ManipulateType } from "dayjs"
import utc from "dayjs/plugin/utc"
import qs from "query-string"
import type {
  CalendarEvent,
  CalendarEventOrganizer,
  CalendarType,
  Google,
  NormalizedCalendarEvent,
  Outlook,
  Yahoo,
} from "./interfaces"
import { formatTimes, TimeFormats } from "./utils"

dayjs.extend(utc)
const stringify = qs.stringify

function eventify(
  event: CalendarEvent,
  toUtc: boolean = true,
): NormalizedCalendarEvent {
  const { start, end, duration, ...rest } = event
  const startTime = toUtc ? dayjs(start).utc() : dayjs(start)
  const endTime = end
    ? toUtc
      ? dayjs(end).utc()
      : dayjs(end)
    : (() => {
        if (event.allDay) {
          return startTime.add(1, "day")
        }
        if (duration && duration.length == 2) {
          const value = Number(duration[0])
          const unit = duration[1]
          return startTime.add(value, unit as unknown as ManipulateType)
        }
        return toUtc ? dayjs().utc() : dayjs()
      })()
  return {
    ...rest,
    startTime: startTime,
    endTime: endTime,
  }
}

function google(calendarEvent: CalendarEvent): string {
  const event = eventify(calendarEvent)
  const { start, end } = formatTimes(
    event,
    event.allDay ? "allDay" : "dateTimeUTC",
  )
  const details: Google = {
    action: "TEMPLATE",
    text: event.title,
    details: event.description,
    location: event.location,
    trp: event.busy,
    dates: start + "/" + end,
    recur: event.rRule ? "RRULE:" + event.rRule : undefined,
  }
  if (event.guests && event.guests.length) {
    details.add = event.guests.join()
  }
  return `https://calendar.google.com/calendar/render?${stringify(details)}`
}

function outlook(calendarEvent: CalendarEvent): string {
  const event = eventify(calendarEvent, false)
  const { start, end } = formatTimes(event, "dateTimeLocal")
  const details: Outlook = {
    path: "/calendar/action/compose",
    rru: "addevent",
    startdt: start,
    enddt: end,
    subject: event.title,
    body: event.description,
    location: event.location,
    allday: event.allDay || false,
  }
  return `https://outlook.live.com/calendar/0/action/compose?${stringify(details)}`
}

function outlookMobile(calendarEvent: CalendarEvent): string {
  const event = eventify(calendarEvent, false)
  const { start, end } = formatTimes(event, "dateTimeLocal")
  const details: Outlook = {
    path: "/calendar/action/compose",
    rru: "addevent",
    startdt: start,
    enddt: end,
    subject: event.title,
    body: event.description,
    location: event.location,
    allday: event.allDay || false,
  }
  return `https://outlook.live.com/calendar/0/deeplink/compose?${stringify(details)}`
}

function yahoo(calendarEvent: CalendarEvent): string {
  const event = eventify(calendarEvent)
  const { start, end } = formatTimes(
    event,
    event.allDay ? "allDay" : "dateTimeUTC",
  )
  const details: Yahoo = {
    v: 60,
    title: event.title,
    st: start,
    et: end,
    desc: event.description,
    in_loc: event.location,
    dur: event.allDay ? "allday" : false,
  }
  return `https://calendar.yahoo.com/?${stringify(details)}`
}

function apple(calendarEvent: CalendarEvent): string {
  const event = eventify(calendarEvent)
  const formattedDescription: string = (event.description || "")
    .replace(/,/gm, ",")
    .replace(/;/gm, ";")
    .replace(/\r\n/gm, "\n")
    .replace(/\n/gm, "\\n")
    .replace(/(\\n)[\s\t]+/gm, "\\n")

  const formattedLocation: string = (event.location || "")
    .replace(/,/gm, ",")
    .replace(/;/gm, ";")
    .replace(/\r\n/gm, "\n")
    .replace(/\n/gm, "\\n")
    .replace(/(\\n)[\s\t]+/gm, "\\n")

  const { start, end } = formatTimes(
    event,
    event.allDay ? "allDay" : "dateTimeUTC",
  )
  const dateStamp = dayjs(new Date()).utc().format(TimeFormats["dateTimeUTC"])
  const calendarChunks = [
    {
      key: "BEGIN",
      value: "VCALENDAR",
    },
    {
      key: "VERSION",
      value: "2.0",
    },
    {
      key: "PRODID",
      value: event.title,
    },
    {
      key: "BEGIN",
      value: "VEVENT",
    },
    {
      key: "URL",
      value: event.url,
    },
    {
      key: "DTSTART",
      value: start,
    },
    {
      key: "DTEND",
      value: end,
    },
    {
      key: "DTSTAMP",
      value: dateStamp,
    },
    {
      key: "RRULE",
      value: event.rRule,
    },
    {
      key: "SUMMARY",
      value: event.title,
    },
    {
      key: "DESCRIPTION",
      value: formattedDescription,
    },
    {
      key: "LOCATION",
      value: formattedLocation,
    },
    {
      key: "ORGANIZER",
      value: event.organizer,
    },
    {
      key: "UID",
      value: Math.floor(Math.random() * 100000)
        .toString()
        .replace(".", ""),
    },
    {
      key: "END",
      value: "VEVENT",
    },
    {
      key: "END",
      value: "VCALENDAR",
    },
  ]

  let calendarUrl: string = ""

  calendarChunks.forEach((chunk) => {
    if (chunk.value) {
      if (chunk.key == "ORGANIZER") {
        const value = chunk.value as CalendarEventOrganizer
        calendarUrl += `${chunk.key};${encodeURIComponent(
          `CN=${value.name}:MAILTO:${value.email}\r\n`,
        )}`
      } else {
        calendarUrl += `${chunk.key}:${encodeURIComponent(`${chunk.value}\r\n`)}`
      }
    }
  })

  return `data:text/calendar;charset=utf8,${calendarUrl}`
}

export {
  apple,
  eventify,
  google,
  outlook,
  outlookMobile,
  yahoo,
  type CalendarEvent,
  type CalendarType,
}
