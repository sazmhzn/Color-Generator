import axios from "axios";
import {
  COLOR_API_ENDPOINT,
  COLOR_SCHEME_API_ENDPOINT,
} from "../utils/constant";

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

export const getColorScheme = (hex: string, mode: string) => {
  console.log(hex, "HEx passed in scheme");
  return new Promise((resolve, reject) => {
    axios
      .get(`${COLOR_SCHEME_API_ENDPOINT}${hex}&mode=${mode}`)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
