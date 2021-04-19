import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlayCircle, 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sliderImg1 from "../../../assets/img/slider-img1.png";
import { getMovieList } from "../../../store/actions/movieList.actions";
import { NavLink } from "react-router-dom";

// Fontawesome Icons
library.add(
    faPlayCircle,
  )

function MovieSlider() {
  // ---Dispatch
  const dispatch = useDispatch();
  const {movieList} = useSelector(state => state.movie);
  console.log(movieList);
  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const renderMovieSlider = () => {
    return movieList?.map((item, index) => {
      return (
        <div className="cardContainer" index={index}>
            <div className="cardImg">
                <img src={item.hinhAnh}></img>
            </div>
            <div className="cardContent">
                <span className="cardAge">C16</span>
                <span className="cardName">{item.tenPhim}</span>
                <p className="cardMinutes">115 Phút - {item.danhGia}.0 IMDB</p>
            </div>
            <div className="overlay">
            <a class="btn btn-default" href={item.trailer} data-featherlight="iframe" data-featherlight-iframe-allowfullscreen="true" data-featherlight-iframe-width="500" data-featherlight-iframe-height="281">
              <FontAwesomeIcon
                icon={faPlayCircle}
                size="2x"
                id=""
                className="loginIcon"
              /></a>
              <NavLink to={`/detail/${item.maPhim}`}>
                <button class="buyTicket">Mua vé</button> 
                </NavLink>
            </div>
        </div>
      );
    })
  }

    // Slick slider settings
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 4,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              slidesPerRow: 1,
              // infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              slidesPerRow: 1,
              initialSlide: 1,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              slidesPerRow: 1,
              dots: false,
            },
          },
        ],
    };
  return (
    <div className="movieSliderContainer">
      <h2>Đang chiếu</h2>
      <Slider {...settings} className="MovieSlider">

        {/* Card */}
        {renderMovieSlider()}

      </Slider>
    </div>
  );
}

export default MovieSlider;
