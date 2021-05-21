import axios from "axios";
import {
  GET_MOVIELIST_FAILED,
  GET_MOVIELIST_SUCCESS,
} from "../constanct/movieList.constanct";

export const getMovieList = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            data: null,
        }).then((res) => {
            dispatch(getMovieListSuccess(res.data))
        }).catch((err) => {
            dispatch(getMovieListFailed(err))
        })
    }
}

const getMovieListSuccess = (res) => {
    return {
        type: GET_MOVIELIST_SUCCESS,
        payload: res,
    }
}

const getMovieListFailed = (err) => {
    return {
        type: GET_MOVIELIST_FAILED,
        payload: err
    }
}

export const getMovieListPagination = (num) => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${num}&soPhanTuTrenTrang=20`,
        }).then((res) => {
            dispatch(getMovieListPagiSuccess(res.data))
        }).catch((err) => {
            dispatch(getMovieListFailed(err))
        })
    }
}

const getMovieListPagiSuccess = (res) => {
    return {
        type: "GET_MOVIELISTPAGI_SUCCESS",
        payload: res,
    }
}