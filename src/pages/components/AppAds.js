import React from 'react'
import iphone from "../../assets/img/ipX.png";
import crsel1 from "../../assets/img/crsel.jpg";
import crsel2 from "../../assets/img/crsel2.jpg";

export default function AppAds() {
    return (
        <div className="app-container">
            <div className="app-main d-flex justify-content-center align-items-center">
                <div className="content text-light">
                    <h1 className="">Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                    <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                    <p>TIX có hai phiên bản <a>iOS</a> & <a>Android</a></p>
                </div>  
                <div className="phone">
                    <img src={iphone} width="295" className="phone-border"></img>
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="2000">
                                <img src={crsel1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-interval="2000">
                                <img src={crsel2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}