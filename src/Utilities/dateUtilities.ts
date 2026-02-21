export const formattedDateAndTime = (now: Date) => { 
    return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // ✅ 24-hour format
    timeZone: "Asia/Kolkata", // ensures IST
  }).format(now);
}