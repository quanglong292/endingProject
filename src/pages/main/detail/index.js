import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getMovieDetail } from "../../../store/actions/movieDetail.action";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar,
  faStarHalf
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(
  faStar,
  faStarHalf
)

function Detail() {
  const { maPhim } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail(maPhim));
  }, []);

  const { movieDetail } = useSelector((state) => state.movieDetail);
  const { user } = useSelector(state => state.booking)

  var dateFormat = require("dateformat");
  console.log(movieDetail);
  const handleRenderCinema = () => {
    if (movieDetail.heThongRapChieu) {
      return movieDetail.heThongRapChieu.map((item, index) => {
        return (
          <a className="nav-link" id={item.maHeThongRap + "-tab"} data-toggle="pill" href={"#" + item.maHeThongRap} role="tab" aria-controls={item.maHeThongRap} aria-selected="true">
            <img width="50px" src={item.logo}></img>
          </a>
        )
      })
    }
  }

  // const isLogin = (item) => {
  //   if (user !== null) {  
  //     return `/booking/${item.maLichChieu}`
  //   } else {
  //     return `/login`
  //   }
  // }

  const handleRenderTime = (item, index) => {
    var dateFormat = require("dateformat");
    let now = new Date(2019, 0);
    let nowFormated = dateFormat(now, "dd-mm-yy");
    const filteredApiDateArr = item.lichChieuPhim.filter(item => dateFormat(item.ngayChieuGioChieu, "dd-mm-yy") === nowFormated);
    if (filteredApiDateArr.length !== 0) {
      return filteredApiDateArr.map((item, index) => {
        let time = Date.parse(item.ngayChieuGioChieu) + 1000 * 60 * 90;
        var date = new Date(time);
        let dateFormated = dateFormat(item.ngayChieuGioChieu, "HH:MM")
        return (
          <div class="detailMovieTime">
            <NavLink to={`/booking/${item.maLichChieu}`} className="startTime">
              {dateFormated}
            </NavLink>
            &nbsp;<span className="endTime">~ {`${date.getHours()}: ${date.getMinutes()}`}</span>
          </div>
        );

      })
    } else {
      return (<span className="noTime">Kh??ng c?? su???t h??m nay</span>)
    }
  }

  const handleRenderMovieTimeUnit = () => {
    if (movieDetail.heThongRapChieu) {
      return movieDetail.heThongRapChieu.map((item, index) => {
        return (
          <div className="tab-pane fade show" id={item.maHeThongRap} role="tabpanel" aria-labelledby={item.maHeThongRap + "tab"}>

            <div className="cumRap">
              {item.cumRapChieu.map((item, index) => {
                return (
                  <>
                    <div className="detailMovieUnitName">{item.tenCumRap}</div>
                    <div class="detailMovieTimeContainer">
                      {handleRenderTime(item)}
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div className="detailMovieContainer" style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}>
      <div className="layer">
        <div className="detailContent">
          <div className="quickView">
            <div className="detailImg">
              <img src={movieDetail.hinhAnh}></img>
            </div>
            <div className="quickViewContent">
              <div className="ngayKhoiChieu">Ng??y kh???i chi???u: {dateFormat(movieDetail.ngayKhoiChieu, "dd-mm-yy")}</div>
              <div className="tenPhim"><span className="ageSimple">P</span>{movieDetail.tenPhim}</div>
              <div className="maPhim">M?? phim: {movieDetail.maPhim} - 100 ph??t - 7.1 IMDB</div>
              <a className="" href="#detailTimeLine">Mua v??</a>
            </div>
          </div>
          <div className="rating">
            <div className="rateGrade">{movieDetail.danhGia}.0 Tix</div>
            <div className="rateStart">
              <FontAwesomeIcon
                icon={faStar}
                size="1x"
                id=""
                className="loginIcon"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="1x"
                id=""
                className="loginIcon"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="1x"
                id=""
                className="loginIcon"
              />
              <FontAwesomeIcon
                icon={faStar}
                size="1x"
                id=""
                className="loginIcon"
              />
              <FontAwesomeIcon
                icon={faStarHalf}
                size="1x"
                id=""
                className="loginIcon"
              />
              <span>??</span>
            </div>
            <div className="comments">{movieDetail.danhGia} ng?????i ????nh gi??</div>
          </div>
        </div>

        <div className="detailScript">
          <div>
            {movieDetail.moTa}
          </div>
        </div>
        
        <div className="detailTimeLine TabpaneContainer" id="detailTimeLine">
        <h2>Ch???n su???t chi???u</h2>
          <div className="row ">
            <div className="col-2 detailLogo">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {handleRenderCinema()}
              </div>
            </div>
            <div className="col-10">
              <div className="tab-content" id="v-pills-tabContent">
                {handleRenderMovieTimeUnit()}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Detail;
