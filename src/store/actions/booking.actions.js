import axios from "axios";
import { GET_BOOKING_FAILED, GET_BOOKING_SUCCESS } from "../constanct/booking.constanct";
import { startLoading, stopLoading } from "./common.actions";

export const bookingList = (maLichChieu) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            data: null,
        }).then((res) => {
            dispatch(stopLoading());
            dispatch(getBookingSuccess(res.data));
        }).catch((err) => {
            dispatch(stopLoading());
            dispatch(getBookingFailed(err));
        })
    }
}

const getBookingSuccess = (res) => {
    return {
        type: GET_BOOKING_SUCCESS,
        payload: res,
    }
}

const getBookingFailed = (err) => {
    return {
        type: GET_BOOKING_FAILED,
        payload: err,
    }
}