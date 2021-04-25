import React, { useState } from 'react'

export default function ThemNguoiDung({addUsers, dispatch}) {
    const [users, setUsers] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: '',
        maLoaiNguoiDung: '',
        hoTen: ''
    })

    const takeUsers = (e) => {
        const {value, id} = e.target;
        setUsers({
            ...users,
            [id]: value,
        })
    }

    const handleAddUsers = (e) => {
        e.preventDefault()
        dispatch(addUsers(users.taiKhoan, users.matKhau, users.email, users.soDt, users.maNhom, users.maLoaiNguoiDung, users.hoTen));
    }

    return (
        <div className="themNd">
            <h3>Thêm người dùng</h3>
            <form onSubmit={handleAddUsers}>
                <div>
                    <label for="#taiKhoan">Tài khoản: </label>
                    <input type="text" id="taiKhoan" onChange={takeUsers}></input>
                </div>
                <div>
                    <label for="#matKhau">Mật khẩu: </label>
                    <input type="text" id="matKhau" onChange={takeUsers}></input>
                </div>
                <div>
                    <label for="#email">E-mail: </label>
                    <input type="text" id="email" onChange={takeUsers}></input>
                </div>

                <div>
                    <label for="#soDt">Phone: </label>
                    <input type="text" id="soDt" onChange={takeUsers}></input>
                </div>
                <div>
                    <label for="#maNhom">Mã nhóm: </label>
                    <select id="maNhom" onChange={takeUsers}>
                        <option>Mã nhóm</option>
                        <option value="GP01">GP01</option>
                        <option value="GP02">GP02</option>
                    </select>
                </div>
                <div>
                    <label for="#maLoaiNguoiDung">Mã người dùng: </label>
                    <select id="maLoaiNguoiDung" onChange={takeUsers}>
                        <option >Mã loại người dùng</option>
                        <option value="KhachHang">Khách hàng</option>
                        <option value="QuanTri">Quản trị</option>
                    </select>
                </div>
                <div>
                    <label for="#hoTen">Họ tên: </label>
                    <input type="text" id="hoTen" onChange={takeUsers}></input>
                </div>
                <button className="btn btn-outline-success" type="submit">Thêm</button>
            </form>

        </div>

    )
}
