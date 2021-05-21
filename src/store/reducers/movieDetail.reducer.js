import {GET_MOVIEDETAIL_SUCCESS } from "../constanct/detailMovie.constanct";
import { LOGIN_FAILED } from "../constanct/user.constanct";

const initialState = {
    movieDetail: {},
    
}

const movieDetailReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_MOVIEDETAIL_SUCCESS: {
            return {...state, movieDetail: payload}
        };
        default:
            return state;
    }
}

export default movieDetailReducer;