import axios from "axios";
import { COLOR_API_ENDPOINT } from "./constant";
import { Color } from "./interfaces";

// Function to generate a random color
export const generateRandomColor = (): string => {
  const color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase();
  return `#${color.padStart(6, "0")}`;
};

// Function to fetch the color name and contrast from the API
export const generateColorName = async (
  hex: string,
  cache: Record<string, { name: string; contrast: string }>
): Promise<{ name: string; contrast: string }> => {
  if (cache[hex]) {
    return cache[hex];
  }
  try {
    const response = await axios.get(`${COLOR_API_ENDPOINT}${hex}`);
    const data = response.data;
    const colorName = data.name?.value;
    const contrastValue = data.contrast?.value || "#000000"; // Fallback to black contrast if not available
    cache[hex] = { name: colorName, contrast: contrastValue };
    return { name: colorName, contrast: contrastValue };
  } catch (error) {
    console.error("Error fetching color name:", error);
    return { name: "Unknown", contrast: "#000000" };
  }
};

export const toggleLock = (colors: Color[], index: number): Color[] => {
  return colors.map((color, i) =>
    i === index ? { ...color, locked: !color.locked } : color
  );
};
