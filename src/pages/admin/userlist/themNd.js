import React, { useEffect, useState } from 'react'
import ValidaUser from './valida.userlist';

export default function ThemNguoiDung({ addUsers, dispatch, usersList }) {
    const [users, setUsers] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: '',
        maLoaiNguoiDung: '',
        hoTen: ''
    })

    const [errors, setErrors] = useState({});
    let [isTrue, setIsTrue] = useState(false);
    let [isExist, setIsExist] = useState(false);

    const takeUsers = (e) => {
        const { value, id } = e.target;
        setUsers({
            ...users,
            [id]: value,
        })
    }

    const handleAddUsers = (e) => {
        e.preventDefault()
        setIsExist(() => isExist = usersList.some(item => users.taiKhoan.trim() === item.taiKhoan))
        console.log(isExist);
        setErrors(ValidaUser(users, isExist))
        if (isTrue) {
            dispatch(addUsers(users.taiKhoan, users.matKhau, users.email, users.soDt, users.maNhom, users.maLoaiNguoiDung, users.hoTen));
        }
    }

    useEffect(() => {
        setIsTrue(() => {
            if (Object.keys(errors).length == 0) {
                isTrue = true;
            }
        })
    })

    return (
        <div className="themNd">
            <h3>Thêm người dùng</h3>
            <form onSubmit={handleAddUsers}>
                <div>
                    <label htmlFor="#taiKhoan">Tài khoản: </label>
                    <input type="text" id="taiKhoan" onChange={takeUsers}></input>
                </div>
                {errors.taiKhoan && <div className="errors">{errors.taiKhoan}</div>}

                <div>
                    <label htmlFor="#matKhau">Mật khẩu: </label>
                    <input type="text" id="matKhau" onChange={takeUsers}></input>
                </div>
                {errors.matKhau && <div className="errors">{errors.matKhau}</div>}
                <div>
                    <label htmlFor="#email">E-mail: </label>
                    <input type="text" id="email" onChange={takeUsers}></input>
                </div>
                <div>
                    <label htmlFor="#soDt">Phone: </label>
                    <input type="text" id="soDt" onChange={takeUsers}></input>
                </div>
                <div>
                    <label htmlFor="#maNhom">Mã nhóm: </label>
                    <select id="maNhom" onChange={takeUsers}>
                        <option>Mã nhóm</option>
                        <option value="GP01">GP01</option>
                        <option value="GP02">GP02</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="#maLoaiNguoiDung">Mã người dùng: </label>
                    <select id="maLoaiNguoiDung" onChange={takeUsers}>
                        <option >Mã loại người dùng</option>
                        <option value="KhachHang">Khách hàng</option>
                        <option value="QuanTri">Quản trị</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="#hoTen">Họ tên: </label>
                    <input type="text" id="hoTen" onChange={takeUsers}></input>
                </div>
                <span>
                    <button className="btn btn-outline-success" type="submit">Thêm</button>
                </span>
            </form>

        </div>

    )
}
