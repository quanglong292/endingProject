import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers,updateUsers, addUsers} from '../../../store/actions/admin/users.action';
import CapNhatModal from './capnhat.modal';
import ThemNguoiDung from './themNd';

function MainAdminPage () {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers());
    }, [])
    const {users} = useSelector(state => state.users)
    const renderUser = () => {
        return users.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{item.taiKhoan}</td>
                    <td>{item.hoTen}</td>
                    <td>{item.email}</td>
                    <td>{item.soDt}</td>
                    <td>{item.matKhau}</td>
                    <td>{item.maLoaiNguoiDung}</td>
                    <td className="myBtn">
                        <CapNhatModal dispatch={dispatch} updateUsers={updateUsers} item={item} index={index}/>
                        {/* <button className="btn btn-outline-primary">Sửa</button> */}
                        <button className="btn btn-outline-danger">Xóa</button>
                    </td>
                </tr>
            )
        })
    }

    

    return (
        <>
            <div className="usersTable">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tài khoản</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Mật khẩu</th>
                            <th scope="col">Mã loại</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderUser()}
                    </tbody>
                </table>
            </div>
            <div className="userOptions">
                <form className="inputSearch">
                    <input placeholder="Search" id="searching"></input>
                </form>
                <ThemNguoiDung addUsers={addUsers} dispatch={dispatch}/>
            </div>
            
        </>
    )
}

export default MainAdminPage;