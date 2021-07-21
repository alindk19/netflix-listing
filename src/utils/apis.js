import axios from "axios";
import { BASE_API_URL } from "./constants";

export const getTrending = () => {
  return axios.get(
    `${BASE_API_URL}/3/trending/all/day?api_key=de5f2b734a1c59b6368bcfbd25be3e35`
  );
};
