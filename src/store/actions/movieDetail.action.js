import { GET_MOVIEDETAIL_FAILED, GET_MOVIEDETAIL_SUCCESS } from "../constanct/detailMovie.constanct";
import axios from "axios";

export const getMovieDetail = (maPhim) => {
    return (dispatch) => {
        axios ({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            data: null,
        }).then((res) => {
            dispatch(getMovieDetailSuccess(res.data))
        }).catch((err) => {
            dispatch(getMovieDetailFaile(err))
        })
    }   
}

const getMovieDetailSuccess = (res) => {
    return {
        type: GET_MOVIEDETAIL_SUCCESS,
        payload: res,
    }
}

const getMovieDetailFaile = (err) => {
    return {
        type: GET_MOVIEDETAIL_FAILED,
        payload: err,
    }
}