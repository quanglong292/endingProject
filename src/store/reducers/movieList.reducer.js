import {
    GET_MOVIELIST_FAILED,
    GET_MOVIELIST_SUCCESS,
  } from "../constanct/movieList.constanct";

const initialState = {
    movieList: [],
    error: "",
}

const movieReducer = (state = initialState, action) => {
    const {type , payload} = action;
    switch (type) {
        case GET_MOVIELIST_SUCCESS: {
            return {...state, movieList: payload};
        };
        case GET_MOVIELIST_FAILED: {
            return {...state, error: payload};
        }

        default:
            return state;
    }
}
export default movieReducer;