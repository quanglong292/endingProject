import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../../store/actions/movieList.actions";
import DanhSachPhim from "./dsPhim";

export default function ControlBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList())
  }, [])
  const {movieList} = useSelector(state => state.movie)


  return (
    <div className="controlbar">
      <div className="dropdown">
        <DanhSachPhim dsPhim={movieList}/>
        <div className="btn-group">
          <a
            className="btn dropdown-toggle dropdownBtn"
            href="#"
            role="button"
            id="dropdownThanhPho"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Thanh pho
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownThanhPho">
            <a className="dropdown-item" href="#">
              Ho chi minh
            </a>
            <a className="dropdown-item" href="#">
              Can tho
            </a>
            <a className="dropdown-item" href="#">
              Da Nang
            </a>
          </div>
        </div>

        <div className="btn-group">
          <a
            className="btn dropdown-toggle dropdownBtn"
            href="#"
            role="button"
            id="dropdownMovieDate"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Ngày xem
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMovieDate">
            <a className="dropdown-item" href="#">
              12/3/2021
            </a>
            <a className="dropdown-item" href="#">
              12/3/2021
            </a>
            <a className="dropdown-item" href="#">
              12/3/2021
            </a>
          </div>
        </div>

        <div className="btn-group">
          <a
            className="btn dropdown-toggle dropdownBtn"
            href="#"
            role="button"
            id="dropdownMovieDate"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Suất chiếu
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMovieDate">
            <a className="dropdown-item" href="#">
              1
            </a>
            <a className="dropdown-item" href="#">
              2
            </a>
            <a className="dropdown-item" href="#">
              3
            </a>
          </div>
        </div>
      </div>
      <button className="btn btn-success buyTicketBtn">Mua vé ngay</button>
    </div>
  );
}
