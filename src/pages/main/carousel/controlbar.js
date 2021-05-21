import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../../store/actions/movieDetail.action";
import { getMovieList } from "../../../store/actions/movieList.actions";
import DanhSachPhim from "./dsPhim";
import DanhSachCumRap from "./dsCumRap";
import NgayGioChieu from "./dsNgayChieu";

export default function ControlBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList())
  }, [])
  const {movieList} = useSelector(state => state.movie)
  const {movieDetail} = useSelector(state => state.movieDetail)
  const {user} = useSelector(state => state.booking)
  let [maPhim, setmaPhim] = useState("");
  let [maCum, setmaCum] = useState("");
  

  const handleMaPhim = (e) => {
    if (!user) {
      alert("Vui lòng đăng nhập trước khi tìm xuất chiếu!")
    } 
    setmaPhim(maPhim = e.target.value)
    dispatch(getMovieDetail(maPhim))
  }

  const handleMaCum = (e) => {
    setmaCum(maCum = e.target.value)
  }

  return (
    <div className="controlbar">
      <div className="dropdown">
        <DanhSachPhim dsPhim={movieList} handleMaPhim={handleMaPhim}/>
        <DanhSachCumRap phimId={maPhim} cumRap={movieDetail.heThongRapChieu} handleMaCum={handleMaCum}/>
        <NgayGioChieu maCum={maCum} cumRap={movieDetail.heThongRapChieu} user={user}/>
      </div>
      {/* <button className="btn btn-success buyTicketBtn">Mua vé ngay</button> */}
    </div>
  );
}
