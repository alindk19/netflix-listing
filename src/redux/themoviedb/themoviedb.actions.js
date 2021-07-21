import axios from "axios";
import { BASE_API_URL, API_KEY } from "../../utils/constants";
import { TRENDING, GET_MOVIES_WITH_GENRES } from "./themoviedb.types";

export const getTrending = () => async (dispatch) => {
  const res = await axios.get(
    `${BASE_API_URL}/trending/all/day?api_key=${API_KEY}`
  );
  dispatch({
    type: TRENDING,
    payload: res.data || [],
  });
  return res.data;
};

export const getMoviesWithGenres = (id, genre) => async (dispatch) => {
  const res = await axios.get(
    `${BASE_API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`
  );
  dispatch({
    type: GET_MOVIES_WITH_GENRES,
    payload: res.data || [],
    genre: genre,
  });
  return res.data;
};
