export const couple = {
  groom: "Anas Rasool",
  bride: "Iram Nasir",
  short: "Anas & Iram",
  monogram: ["A", "I"] as const,
};

export const families = {
  groom: { parents: "Mr. & Mrs. Ghulam Rasool", relation: "Son of" },
  bride: { parents: "Mr. & Mrs. Nasir", relation: "Daughter of" },
  lookingForward: [
    "Malik Ghulam Nabi",
    "Malik Aslam",
    "Malik Shahid Iqbal",
    "Malik Ajmal Shahzad",
    "Malik Shahbaz",
    "Malik Ali Raza",
    "Malik Mudassir",
  ],
  brother: "Malik Fahad Rasool",
  cousins: [
    "Malik Uzair",
    "Malik Hassan",
    "Malik Shahzaib",
    "Malik Bilal Shahid",
    "Malik Ali",
    "Malik Abdul Rehman",
    "Malik Abdul Hadi",
    "Malik Musa",
    "Malik Azhan",
    "Malik Noraiz",
  ],
};

/** Contacts for guest queries — numbers in local Pakistani format */
export const contacts = [
  { name: "Mr. Ghulam Rasool", role: "Father of the Groom", phone: "03059654192" },
  { name: "Malik Fahad Rasool", role: "Brother of the Groom", phone: "03095481288" },
];

/** 03059654192 -> 923059654192 (for tel: and WhatsApp links) */
export const intlPhone = (local: string) => `92${local.replace(/\D/g, "").replace(/^0/, "")}`;
/** 03059654192 -> 0305 9654192 */
export const prettyPhone = (local: string) => local.replace(/^(\d{4})(\d+)$/, "$1 $2");

export type WeddingEvent = {
  key: "mehndi" | "barat" | "walima";
  title: string;
  day: string;
  time: string;
  venue: string;
  map: string;
  accent: string;
  /** UTC timestamps for Google Calendar (Pakistan = UTC+5) */
  start: string;
  end: string;
};

export const events: WeddingEvent[] = [
  {
    key: "mehndi",
    title: "Mehndi",
    day: "Thursday, 12 November 2026",
    time: "7:00 PM onwards",
    venue: "Al Madina Grand Marquee, Hasilpur",
    map: "https://share.google/h7aaqnPoEZzM0liaJ",
    accent: "#b07a12",
    start: "20261112T140000Z",
    end: "20261112T180000Z",
  },
  {
    key: "barat",
    title: "Barat",
    day: "Saturday, 14 November 2026",
    time: "3:00 PM",
    venue: "Departure from Hasilpur to Multan",
    map: "https://share.google/XtmLhBHP72voijPo0",
    accent: "#8e2436",
    start: "20261114T100000Z",
    end: "20261114T150000Z",
  },
  {
    key: "walima",
    title: "Walima",
    day: "Sunday, 15 November 2026",
    time: "2:00 PM",
    venue: "Al Madina Grand Marquee, Hasilpur",
    map: "https://share.google/h7aaqnPoEZzM0liaJ",
    accent: "#1f7a57",
    start: "20261115T090000Z",
    end: "20261115T130000Z",
  },
];

/** Barat — 14 Nov 2026, 3:00 PM Pakistan time */
export const countdownTarget = "2026-11-14T15:00:00+05:00";

export function calendarUrl(e: WeddingEvent) {
  const q = new URLSearchParams({
    action: "TEMPLATE",
    text: `${e.title} — ${couple.short}`,
    dates: `${e.start}/${e.end}`,
    location: e.venue,
    details: `${e.title} of ${couple.groom} & ${couple.bride}`,
  });
  return `https://calendar.google.com/calendar/render?${q.toString()}`;
}
