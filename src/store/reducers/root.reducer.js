import { combineReducers } from "redux";
import movieReducer from "../reducers/movieList.reducer";
import getBookingReducer from "./booking.reducer";
import getCinemaUnit from "./cinemaUnit.reducer";
import isLoading from "./common.reducer";
import movieDetailReducer from "./movieDetail.reducer";
const rootReducer = combineReducers ({
    movie: movieReducer,
    cinema: getCinemaUnit,
    movieDetail: movieDetailReducer,
    booking: getBookingReducer,
    loading: isLoading,
});

export default rootReducer;