import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

function NgayGioChieu(props) {
    const { maCum, cumRap, user} = props;
    var dateFormat = require("dateformat");
    // console.log("maCum: ", maCum);
    // console.log("cumrap: ", cumRap);
    let filteredCumRap = cumRap?.filter(item => {
        return item.cumRapChieu.map(item => item.maCumRap) == maCum.trim()
    })
    let duplicateDate = [];

    const handleFilter = () => {
        if (filteredCumRap) {
            if (filteredCumRap.length != 0) {
                return filteredCumRap[0].cumRapChieu.map((item, index) => {
                    return item.lichChieuPhim.map((item, index) => {
                        duplicateDate.push({ ngayGioChieu: item.ngayChieuGioChieu, mlc: item.maLichChieu })
                        console.log(duplicateDate);
                    })
                })
            }
        }
    }
    handleFilter();

    let formatedDuplicateDate = duplicateDate.map((item, index) => {
        return dateFormat(item.ngayGioChieu, "dd/mm/yyyy")
    })
    let slicedDuplicateDate = [...new Set(formatedDuplicateDate)]
    const handleRender = () => {
        if (slicedDuplicateDate.length != 0) {
            return slicedDuplicateDate.map((item, index) => {
                return (
                    <option>{item}</option>
                )
            })
        } else {
            return (<option>Het suat chieu</option>)
        }
        
    }

    let [pickedDay, setpickedDay] = useState([]);
    const handleTime = (e) => {
        // console.log(e.target.value);
        // console.log(duplicateDate);
        const filteredPickedDay = duplicateDate.filter(item => dateFormat(item.ngayGioChieu, "dd/mm/yyyy") == e.target.value)
        setpickedDay(pickedDay = filteredPickedDay)
    }

    const handleRenderTime = () => {
        if (pickedDay.length > 0) {
            return pickedDay.map((item, index) => {
                return (
                    <option value={item.mlc}>{dateFormat(item.ngayGioChieu, "hh:mm")}</option>
                )
            })
        }
    }
    let [maLichChieu, setmaLichChieu] = useState("");
    const handleMaLichChieu = (e) => {
        setmaLichChieu(maLichChieu = e.target.value)
        console.log(maLichChieu);
    }

    const handleNavLink = () => {
        if (user !== null) {
            return (
                <NavLink to={`/booking/${maLichChieu}`} className="muave-btn">
                    Mua vé
                </NavLink>
            )
        } else {
            return (
                <NavLink to={`/login`} className="muave-btn-disabled">
                    Mua vé
                </NavLink>
            )
        }
    }

    return (
        <>
            <select onChange={handleTime}>
                <option>Chọn ngày</option>
                {handleRender()}
            </select>
            <select onChange={handleMaLichChieu}>
                <option>Chọn giờ chiếu</option>
                {handleRenderTime()}
            </select>
            {handleNavLink()}
        </>
    )
}
export default NgayGioChieu;
