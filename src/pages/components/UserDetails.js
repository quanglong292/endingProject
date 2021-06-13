import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { getUserDetail } from '../../store/actions/login.action';
import User from "../../assets/img/default-user.png";
import { NavLink } from 'react-router-dom';

export default function UserDetails() {
    const { tk } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getUserDetail(tk));
    }, [])
    const { userChitiet, user } = useSelector(state => state.booking);
    let [ticketDetail, setTicketDetail] = useState([])

    const renderDetail = () => {
        if (userChitiet) {
            const hiddPass = userChitiet?.matKhau?.slice(0, 3);
            return (
                <>
                    <p>Họ tên: <span>{userChitiet?.hoTen}</span></p>
                    <p>Phone: <span>{userChitiet?.soDT}</span></p>
                    <p>E-mail: <span>{userChitiet?.email}</span></p>
                    <p>Mật khẩu: <span>{hiddPass}*****</span></p>
                </>
            )
        }
    }


    const renderOrderedList = () => {
        return userChitiet?.thongTinDatVe?.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.maVe}</td>
                    <td>{item.ngayDat}</td>
                    <td>{item.tenPhim}</td>
                    <td>{item.giaVe}</td>
                    <td>{item.thoiLuongPhim}'</td>
                    <td>{item.danhSachGhe.length}</td>
                    <td className="ticketDetailContain">
                        <a onClick={() => {setTicketDetail(ticketDetail = item.danhSachGhe)}}>
                            Chi tiết
                        </a>
                    </td>
                </tr>
            )
        })
    }

    const handleTicketDetail = () => {
        if (ticketDetail.length !== 0) {
            return (
                <div className="ticketDetail">
                    <h2>Thông tin vé</h2>
                    <div>Rạp: {ticketDetail[0]?.tenHeThongRap}</div>
                    <div>Tên rạp: {ticketDetail[0]?.tenRap}</div>
                    <div className="chairID">Mã ghế: {handleSoGhe(ticketDetail)}</div>
                </div>
            )
        }
    }

    const handleSoGhe = (detail) => {
        return detail?.map((item, index) => {
            return (
                <div>{item.tenGhe} </div>
            )
        })
    }
    

    if (!user) {
        return (
            <div className="userDetail">
                {history.push("/")}
                <h3>Vì chúng tôi không tùy tiện truy cập cookie của bạn nên bạn vui lòng đăng nhập lại!</h3>
                <NavLink className="" to="/login">Đăng nhập...</NavLink>
            </div>
        )
    } else {
        return (
            <div>
                <div className="userDetail d-flex">
                    <div className="avatar">
                        <img src={User} width="100" height="100"></img>
                        <div>#{userChitiet?.taiKhoan}</div>
                    </div>
                    <div className="detail">
                        {renderDetail()}
                    </div>
                </div>

                {handleTicketDetail()}

                <div className="orderedList">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Mã vé</th>
                                <th scope="col">Ngày đặt vé</th>
                                <th scope="col">Tên phim</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Thời lượng</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderOrderedList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
