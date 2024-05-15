import type { NormalizedCalendarEvent } from "./interfaces"

const TimeFormats = {
  dateTimeLocal: "YYYY-MM-DD[T]HH:mm:ss",
  dateTimeUTC: "YYYYMMDD[T]HHmmss[Z]",
  allDay: "YYYYMMDD",
}

function formatTimes(
  { startTime, endTime }: NormalizedCalendarEvent,
  dateTimeFormat: keyof typeof TimeFormats,
): { start: string; end: string } {
  const format = TimeFormats[dateTimeFormat]
  return { start: startTime.format(format), end: endTime.format(format) }
}

export { formatTimes, TimeFormats }
