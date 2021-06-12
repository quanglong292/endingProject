import React, { useState } from 'react'


function CapNhatModal(props) {
    const {item, index, dispatch, updateUsers} = props;
    const [users, setUsers] = useState({
        taiKhoan: item.taiKhoan,
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

    const handleDispatch = () => {
        
            dispatch(updateUsers(users.taiKhoan, users.matKhau, users.email, users.soDt, users.maNhom, users.maLoaiNguoiDung, users.hoTen))
        
    }

    return (
        <>
            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target={"#exampleModal" + users.taiKhoan} >
                Sửa
            </button>
            {/* Modal */}
            <div className="modal fade" id={"exampleModal" + users.taiKhoan} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cập nhật người dùng</h5>
                        </div>
                        <div className="modal-body">
                            
                            <form>
                                <div>
                                    <label for="#taiKhoan">Tài khoản: </label>
                                    <input type="text" id="taiKhoan" onChange={takeUsers} defaultValue={item.taiKhoan} disabled={true}></input>
                                </div>
                                <div>
                                    <label for="#matKhau">Mật khẩu: </label>
                                    <input type="text" id="matKhau" onChange={takeUsers} defaultValue={item.matKhau}></input>
                                    
                                </div>
                                <div>
                                    <label for="#email">E-mail: </label>
                                    <input type="text" id="email" onChange={takeUsers} defaultValue={item.email}></input>
                                </div>

                                <div>
                                    <label for="#soDt">Phone: </label>
                                    <input type="text" id="soDt" onChange={takeUsers} defaultValue={item.soDt}></input>
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
                                    <input type="text" id="hoTen" onChange={takeUsers} defaultValue={item.hoTen}></input>
                                </div>
                            </form>
                        
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" >Đóng</button>
                            <button type="button" className="btn btn-primary" onClick={handleDispatch}>Đồng ý</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CapNhatModal;
