import React from 'react'
import IPhone from "../../../assets/img/ipX.png";
import crl1 from "../../../assets/img/crsel.jpg";

function TixApp() {
    return (
        <div className="mobile-cover">
            <div className="mobileApp">
                <div className="mobileApp-txt">
                    <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                    <p>Không chỉ đặt vé bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <button type="button">App miễn phí - tải về ngay!</button>
                    <p>TIX có hai phiên bản <span>IOS</span> &amp; <span>Android</span></p>
                </div>
                <div className="mobileApp-phone">
                    <div className="mobileApp-phone-content">
                        <img src={IPhone} className="phone" />
                        <div className="owl-carousel owl-theme mobileApp-phone-img">
                            <div className="item"><img src={crl1}/></div>
                            <div className="item"><img src={crl1}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TixApp;
