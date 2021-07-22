import axios from "axios";
import { BASE_API_URL, API_KEY } from "../../utils/constants";
import { GET_MOVIES_WITH_GENRES } from "./themoviedb.types";

export const getMoviesWithGenres = (id) => async (dispatch) => {
  const res = await axios.get(
    `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`
  );
  dispatch({
    type: GET_MOVIES_WITH_GENRES,
    payload: res.data || [],
  });
  return res.data;
};
