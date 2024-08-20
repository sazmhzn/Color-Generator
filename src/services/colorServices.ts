import axios from "axios";
import {
  COLOR_API_ENDPOINT,
  COLOR_SCHEME_API_ENDPOINT,
} from "../utils/constant";
import { useEffect, useState } from "react";

export const getColorByHex = (hex: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${COLOR_API_ENDPOINT}/${hex}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getColorSheme = (hex: string, mode: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${COLOR_SCHEME_API_ENDPOINT}${hex}&mode=${mode}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};
