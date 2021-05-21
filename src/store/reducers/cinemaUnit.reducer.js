import { GET_CINEMAUNIT_SUCCESS, GET_CINEMAUNIT_FAILED, GET_CINEMA_SUCCESS} from "../constanct/cinemaUnit.constanct";

const initialState = {
    cinemaUnit: [],
    cinema: [],
    defaultCinema: {},
    err: "",
    toDay: '2019-1-1',
}

const getCinemaUnit = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_CINEMAUNIT_SUCCESS: {
            return {...state, cinemaUnit: payload}
        }
        case GET_CINEMAUNIT_FAILED: {
            return {...state, err: payload}
        }
        case GET_CINEMA_SUCCESS: {
            return {...state, cinema: payload.splice(1, payload.length)}
        };
        case "GET_DEFAULT_CINEMA": {
            return {...state, defaultCinema: payload}
        }
        default:
            return state;
    }
}

export default getCinemaUnit;