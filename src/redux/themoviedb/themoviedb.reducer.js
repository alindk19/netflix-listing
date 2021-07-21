import { GET_MOVIES_WITH_GENRES } from "./themoviedb.types";

const initialState = {
  moviesList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_WITH_GENRES:
      return {
        ...state,
        moviesList: [
          ...state.moviesList,
          {
            genre: action.genre,
            content: action.payload.results,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
