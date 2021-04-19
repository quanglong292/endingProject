import React from "react";

export default function ControlBar() {
  return (
    <div className="controlbar">
      <div className="dropdown">
        <div className="btn-group">
          <a
            className="btn dropdown-toggle dropdownBtn"
            href="#"
            role="button"
            id="dropdownPhim"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Phim
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownPhim">
            <a className="dropdown-item" href="#">
              Phim hanh dong
            </a>
            <a className="dropdown-item" href="#">
              Phim ma
            </a>
            <a className="dropdown-item" href="#">
              Phim ma hai
            </a>
          </div>
        </div>

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
