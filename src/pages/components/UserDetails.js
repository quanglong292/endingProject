import React, { useEffect } from 'react'
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
                    <td>{handleChairList(item.danhSachGhe)}</td>
                </tr>
            )
        })
    }

    const handleChairList = (chairs) => {
        const counter = chairs.length
        return counter
        // return chairs.map((item, index) => {
        //     return
        // })
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
                                <th scope="col">Số ghế</th>
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
