export const INITIAL_COLORS = [
  {
    id: 1,
    name: "a",
    value: "#FF6B6B",
    contrast: "#000000",
    locked: false,
  },
  {
    id: 2,
    name: "b",
    value: "#C33C54",
    contrast: "#000000",
    locked: false,
  },
  {
    id: 3,
    name: "c",
    value: "#FF6B6B",
    contrast: "#000000",
    locked: false,
  },
  {
    id: 4,
    name: "d",
    value: "#FFCC33",
    contrast: "#000000",
    locked: false,
  },
  {
    id: 5,
    name: "e",
    value: "#0099FF",
    contrast: "#000000",
    locked: false,
  },
];

export const CACHE_INITIAL_STATE: Record<
  string,
  { name: string; contrast: string }
> = {};

export const ALERT_TIMEOUT = 2000;

// constants.ts
export const COLOR_API_ENDPOINT = "https://www.thecolorapi.com/id?hex=";
export const COLOR_SCHEME_API_ENDPOINT =
  "https://www.thecolorapi.com/scheme?&count=6&hex=";
