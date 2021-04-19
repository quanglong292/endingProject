import { LOADING_FALSE, LOADING_TRUE } from "../constanct/common.constanct";
const initialState = {
    loading: false,
}

const isLoading = (state = initialState, action) => {
    const {type} = action
    switch (type) {
        case LOADING_TRUE: {
            return {...state, loading: true}
        };
        case LOADING_FALSE: {
            return {...state, loading: false}
        }
        default:
            return state;
    }
}

export default isLoading;