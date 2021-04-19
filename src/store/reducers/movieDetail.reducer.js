import { GET_MOVIEDETAIL_FAILED, GET_MOVIEDETAIL_SUCCESS } from "../constanct/detailMovie.constanct";

const initialState = {
    movieDetail: {},
    err: "",
}

const movieDetailReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_MOVIEDETAIL_SUCCESS: {
            return {...state, movieDetail: payload}
        }
        default:
            return state;
    }
}

export default movieDetailReducer;