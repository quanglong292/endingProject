import axios from "axios";
import {
  GET_CINEMAUNIT_SUCCESS,
  GET_CINEMAUNIT_FAILED,
  GET_CINEMA_FAILED,
  GET_CINEMA_SUCCESS,
} from "../constanct/cinemaUnit.constanct";
import { startLoading, stopLoading } from "./common.actions";

export const getCinemaUnit = (maRap) => {
  return (dispatch, getState) => {
    const movie = getState().cinema;

    dispatch(startLoading());
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getCinemaUnitSuccess(res.data));
        // console.log(res.data);
        // const { data } = res;
        // let arr = [];
        // if (data.length > 0) {
        //   data[0].lstCumRap.forEach((cumRap) => {
        //     const item = cumRap.danhSachPhim.filter((item) =>
        //       item.lstLichChieuTheoPhim.filter(
        //         (item) =>
        //           // console.log(new Date(item.ngayChieuGioChieu).toLocaleDateString());

        //           new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
        //           new Date(movie.toDay).toLocaleDateString()
        //       ).length >0
        //     );
            
        //     arr.push(item);
        //     console.log(item);
        //   });
        // }

        // console.log("arr", arr);
        // // console.log(res.config)
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getCinemaUnitFailed(err));
      });
  };
};

const getCinemaUnitSuccess = (res) => {
  return {
    type: GET_CINEMAUNIT_SUCCESS,
    payload: res,
  };
};

const getCinemaUnitFailed = (err) => {
  return {
    type: GET_CINEMAUNIT_FAILED,
    payload: err,
  };
};

export const getCinema = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getCinemaSuccess(res.data));
        if (res.data.length > 0) {
          getCinemaUnit(res.data[0].maHeThongRap);
        }
        // console.log(res.config)
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getCinemaFailed(err));
      });
  };
};

const getCinemaSuccess = (res) => {
  return {
    type: GET_CINEMA_SUCCESS,
    payload: res,
  };
};

const getCinemaFailed = (err) => {
  return {
    type: GET_CINEMA_FAILED,
    payload: err,
  };
};

export const getDefaultCinema = () => {
  return (dispatch) => {
    axios ({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDSTAR&maNhom=GP01",
    }).then((res) => {
      dispatch({
        type: "GET_DEFAULT_CINEMA",
        payload: res.data
      })
    }).catch(err => err)
  }
}
