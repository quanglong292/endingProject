import React from 'react'
import iphone from "../../assets/img/ipX.png";

export default function AppAds() {
    return (
        <div className="app-container">
            <div className="app-main d-flex justify-content-center align-items-center">
                <div className="content text-light">
                    <h1 className="pr-3">Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                    <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                    <p>TIX có hai phiên bản <span>iOS</span> & <span>Android</span></p>
                </div>
                <div className="phone">
                    <img src={iphone} width="300"></img>
                </div>
            </div>
        </div>
    )
}