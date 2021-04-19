import { LOADING_FALSE, LOADING_TRUE } from "../constanct/common.constanct";

export const startLoading = () => {
    return {
        type: LOADING_TRUE,
    }
}  

export const stopLoading = () => {
    return {
        type: LOADING_FALSE,
    }
} 