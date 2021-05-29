import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinema, getCinemaUnit, getDefaultCinema } from "../../../store/actions/cinemaUnit.actions";
import * as TypeMovie from "../../../services/Enums/movie"
import { NavLink } from "react-router-dom";
function TimeLine() {
    const dispatch = useDispatch();
    const [maCumRap, setMaCumRap] = useState(TypeMovie.MOVIE_CINEMA_TYPE.BHDSTAR);
    const handleMaHeThongRap = (maRap) => {
        setMaCumRap(maRap);
        if (maCumRap) {
            dispatch(getCinemaUnit(maRap));
            return maCumRap;
        }
    };
    useEffect(() => {
        dispatch(getDefaultCinema());
        dispatch(getCinema());
    }, [])

    const { cinemaUnit, cinema, defaultCinema } = useSelector((state) => state.cinema);

    const renderCinemaSection = () => {
        if (maCumRap) {
            return (
                <div
                    className="tab-pane fade show"
                    id={"v-pills-" + maCumRap}
                    role="tabpanel"
                    aria-labelledby={maCumRap}
                >
                    <div className="row">
                        <div className="col-5">
                            <div
                                className="nav flex-column nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                {hanleRenderCinemaUnit()}
                            </div>
                        </div>
                        {/* BHD section-unit */}
                        <div className="col-7">
                            <div className="tab-content" id="v-pills-tabContent">
                                {handleRenderCinemaUnitMovies()}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
    const hanleRenderCinemaUnit = () => {
        if (cinemaUnit[0]) {
            return cinemaUnit[0].lstCumRap.map((item, index) => {
                return (
                    <a
                        className="nav-link"
                        id={item.maCumRap + "-tab"}
                        data-toggle="pill"
                        href={"#" + item.maCumRap}
                        role="tab"
                        aria-controls={item.maCumRap}
                        aria-selected="true"
                        key={index}
                    >
                        {item.tenCumRap}
                    </a>
                );
            });
        }
    };
    const renderCinemaUnitMovieName = (danhSachPhim) => {
        var dateFormat = require("dateformat");
        let now = new Date(2019, 0);
        let nowFormated = dateFormat(now, "dd-mm-yy");
        let tenPhim = [];
        danhSachPhim.lstLichChieuTheoPhim.map((item, map) => {
            let a = dateFormat(item.ngayChieuGioChieu, "dd-mm-yy")
            // console.log(item.ngayChieuGioChieu);
            if (a === nowFormated) {
                tenPhim.push(danhSachPhim.hinhAnh)
                tenPhim.push(danhSachPhim.tenPhim)
                tenPhim.push(danhSachPhim.maPhim)
            }
        })
        // console.log(tenPhim);
        let slicedTenPhim = tenPhim.slice(0, 3);
        // console.log("sliced:", slicedTenPhim);
        if (slicedTenPhim.length !== 0) {
            return (
                <>
                    <img src={slicedTenPhim[0]} width="50" height="50"></img>
                    <div className="unitMovieNameContent">
                        <span className="contentName"><span>C13</span>{slicedTenPhim[1]}</span>
                        <div className="miniContent">100 phút - Mã phim: {slicedTenPhim[2]}</div>
                    </div>
                </>
            );
        }
    };

    const renderCinemaUnitMovieTime = (danhSachPhim) => {
        var dateFormat = require("dateformat");
        let now = new Date(2019, 0);
        let nowFormated = dateFormat(now, "dd-mm-yy");
        // console.log("nowDate: ", nowFormated);
        let filteredApiDateArr = danhSachPhim.lstLichChieuTheoPhim.filter((item) => dateFormat(item.ngayChieuGioChieu, "dd-mm-yy") === nowFormated)
        // console.log(danhSachPhim.lstLichChieuTheoPhim);
        let mappedApiDate = filteredApiDateArr.map((item, index) => {
            let formatedApiMovieTime = dateFormat(item.ngayChieuGioChieu, "HH:MM")
            return (
                <div className="timeLineTime">
                    <NavLink className="startTime" to={`/booking/${item.maLichChieu}`}>{formatedApiMovieTime}</NavLink> ~ 11:00
                </div>
            )
        })
        return mappedApiDate;
    };


    const handleRenderCinemaUnitMovies = () => {
        if (cinemaUnit[0]) {
            return cinemaUnit[0].lstCumRap.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="tab-pane fade show"
                        id={item.maCumRap}
                        role="tabpanel"
                        aria-labelledby={item.maCumRap + "-tab"}
                    >
                        {item.danhSachPhim.map((item, index) => {
                            return (
                                <div key={index} className="movieAndTime">
                                    <div className="cimenaUnitMovieName">
                                        {renderCinemaUnitMovieName(item)}
                                    </div>
                                    <div className="cimenaUnitMovieTime">
                                        {renderCinemaUnitMovieTime(item)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            });
        }
    };

    const renderCinema = () => {
        return cinema?.map((item, index) => {
            return (
                <a
                    className="nav-link"
                    id={item.maHeThongRap}
                    data-toggle="pill"
                    href={"#v-pills-" + item.maHeThongRap}
                    role="tab"
                    aria-controls={"v-pills-" + item.maHeThongRap}
                    aria-selected="true"
                    onClick={() => {
                        handleMaHeThongRap(item.maHeThongRap);
                    }}

                >
                    <img
                        src={item.logo}
                        width="50px"
                    ></img>
                </a>
            )
        })
    }

    const isActive = (index) => {
        if (index) {
            return "active"
        }
    }

    const renderDefaultCinemaUnit = () => {
        return defaultCinema[0]?.lstCumRap.map((item, index) => {
            return (
                <a className={"nav-link " + (index == 0 ? "active" : "")} id={"v-pills-home-tab" + item.maCumRap} data-toggle="pill" href={"#v-pills-home" + item.maCumRap} role="tab" aria-controls="v-pills-home" aria-selected="true">{item.tenCumRap}</a>
            )
        })
    }

    const renderDefaultCinemaUnitMovie = () => {
        return defaultCinema[0]?.lstCumRap.map((item, index) => {
            return (
                <div
                    key={index}
                    className={"tab-pane fade show " + (index == 0 ? "active" : "")}
                    id={"v-pills-home" + item.maCumRap}
                    role="tabpanel"
                    aria-labelledby={"v-pills-home-tab" + item.maCumRap}
                >
                    {item.danhSachPhim.map((item, index) => {
                        return (
                            <div key={index} className="movieAndTime">
                                <div className="cimenaUnitMovieName">
                                    {renderCinemaUnitMovieName(item)}
                                </div>
                                <div className="cimenaUnitMovieTime">
                                    {renderCinemaUnitMovieTime(item)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        });
    }

    return (
        <div className="timeLine">
            <h2>Lịch chiếu</h2>
            <div className="TabpaneContainer">
                <div className="row">
                    <div className="col-1 mainLogo">
                        <div
                            className="nav flex-column nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            <a
                                className="nav-link active"
                                id={defaultCinema[0]?.maHeThongRap}
                                data-toggle="pill"
                                href={"#v-pills-" + defaultCinema[0]?.maHeThongRap}
                                role="tab"
                                aria-controls={"v-pills-" + defaultCinema[0]?.maHeThongRap}
                                aria-selected="true"

                            >
                                <img
                                    src={defaultCinema[0]?.logo}
                                    width="50px"
                                ></img>
                            </a>
                            {renderCinema()}
                        </div>
                    </div>

                    {/* BHD section */}
                    <div className="col-11">
                        <div class="tab-content" id="v-pills-tabContent">

                            <div className="tab-pane fade show active" id={"v-pills-" + defaultCinema[0]?.maHeThongRap} role="tabpanel" aria-labelledby={defaultCinema[0]?.maHeThongRap}>
                                <div className="row">
                                    <div className="col-5">
                                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            {renderDefaultCinemaUnit()}
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            {renderDefaultCinemaUnitMovie()}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {renderCinemaSection()}
                            {/* <div className="tab-pane fade" id="v-pills-CGV" role="tabpanel" aria-labelledby="CGV">CGV</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TimeLine;
