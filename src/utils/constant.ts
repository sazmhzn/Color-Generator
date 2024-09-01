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
  "https://www.thecolorapi.com/scheme?hex=";

export const MODES = [
  { name: "monochrome", active: true },
  { name: "monochrome-dark", active: false },
  { name: "monochrome-light", active: false },
  { name: "analogic", active: false },
  { name: "complement", active: false },
];

export const positionItems = [
  { label: "20%", value: "20%", key: "0" },
  { label: "40%", value: "40%", key: "1" },
  { label: "90%", value: "90%", key: "2" },
];

export const rotationItems = [
  { label: "20deg", value: "20deg" },
  { label: "45deg", value: "45deg" },
  { label: "90deg", value: "90deg" },
  { label: "135deg", value: "135deg" },
];

export const typeItems = [
  { label: "linear", value: "linear" },
  { label: "radial", value: "radial" },
];
