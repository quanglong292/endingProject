import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { postRegis } from '../../../store/actions/admin/users.action';

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [userState, setUserState] = useState({
        taiKhoan: '',
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: ""
    })

    
    const takeUser = (event) => {
        const { value, id } = event.target;
        setUserState({
            ...userState,
            [id]: value,
        })
        console.log(userState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let __formdata = new FormData();
        for (var key in userState) {
            __formdata.append(key, userState[key])
        }
        dispatch(postRegis(__formdata, history));
    }

    return (
        <div className="loginContainer">
            <div className="loginBackground">
                <h3>Đăng ký</h3>
                <form onSubmit={handleSubmit}>
                    <input required type="text" id="taiKhoan" onChange={takeUser} placeholder="Tài khoản"></input>
                    <input required type="text" id="matKhau" onChange={takeUser} placeholder="Mật khẩu"></input>
                    <input required type="email" id="email" onChange={takeUser} placeholder="E-mail"></input>
                    <input required minLength="10" maxLength="10" type="text" id="soDt" onChange={takeUser} placeholder="Phone"></input>
                    <input required type="text" id="hoTen" onChange={takeUser} placeholder="Họ và tên"></input>
                    <button type="submit">Đăng ký</button>
                </form>
                <div className="regis-router">
                    <NavLink to="/login"><span>&lt;&lt;</span>Go Back</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Register;