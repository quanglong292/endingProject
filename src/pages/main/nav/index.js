import React from "react";
import logo from "../../../assets/img/main-logo.png";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
library.add(
  faUserCircle,
)

function Nav () {
  const {user} = useSelector(state => state.booking)

  const isLogin = () => {
    if (user == null) {
      return (
        <NavLink className="nav-link" to="/login">
          <FontAwesomeIcon
            icon={faUserCircle}
            size="2x"
            id=""
            className="loginIcon"
          />
          <span className="">Đăng nhập</span>
          <span className="spaceingLine">|</span>
        </NavLink>
      )
    } else {
      return (
        <a className="nav-link">
          <span className="">Xin chào {user.hoTen}</span>
          <span className="spaceingLine">|</span>
        </a>
      )
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <img src={logo} width="50"></img>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav headingNav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Lịch chiếu <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Cụm rạp
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ứng dụng
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item ">
            {isLogin()}
          </li>
          
          <li className="nav-item dropdown cityList">
            <a
              className="nav-link dropdown-toggle cityList"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tp. Ho Chi Minh
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
              Tp. Da Nang
              </a>
              <a className="dropdown-item" href="#">
              Tp. Can Tho
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
