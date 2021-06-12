import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPartUsers, updateUsers, addUsers, deleteUsers, getAllUsers, searchUser} from '../../../store/actions/admin/users.action';
import CapNhatModal from './capnhat.modal';
import ThemNguoiDung from './themNd';

function MainAdminPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPartUsers(1));
        dispatch(getAllUsers());
    }, [])
    const { users, allUser, searchedUser} = useSelector(state => state.users)
    const handleDelete = (tk) => {
        dispatch(deleteUsers(tk))
    }
    let [searchTxt, setSearchTxt] = useState("");
    const handleSearch = (e) => {
        const clearSpace = e.target.value.trim();
        
        setSearchTxt(
            searchTxt = clearSpace
        )
        
        if (searchTxt) {
            dispatch(searchUser(searchTxt))
        }
    }

    const renderSearced = () => {
        return searchedUser?.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.taiKhoan}</td>
                    <td>{item.hoTen}</td>
                    <td>{item.email}</td>
                    <td>{item.soDt}</td>
                    <td>{item.matKhau}</td>
                    <td>{item.maLoaiNguoiDung}</td>
                    <td className="myBtn">
                        <CapNhatModal dispatch={dispatch} updateUsers={updateUsers} item={item} index={index} />
                        {/* <button className="btn btn-outline-primary">Sửa</button> */}
                        <button className="btn btn-outline-danger" onClick={() => { handleDelete(item.taiKhoan) }}>Xóa</button>
                    </td>
                </tr>
            )
        })
    }


    const renderUser = () => {
        return users?.items?.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.taiKhoan}</td>
                    <td>{item.hoTen}</td>
                    <td>{item.email}</td>
                    <td>{item.soDt}</td>
                    <td>{item.matKhau}</td>
                    <td>{item.maLoaiNguoiDung}</td>
                    <td className="myBtn">
                        <CapNhatModal dispatch={dispatch} updateUsers={updateUsers} item={item} index={index} />
                        {/* <button className="btn btn-outline-primary">Sửa</button> */}
                        <button className="btn btn-outline-danger" onClick={() => { handleDelete(item.taiKhoan) }}>Xóa</button>
                    </td>
                </tr>
            )
        })
    }

    const handleNumPage = (num) => {
        dispatch(getPartUsers(num));
    }
    const handlePagiPages = () => {
        const pages = [];
        for (var i = 1; i <= users.totalPages; i++) {
            pages.push(i)
        }
        return (
            pages.map((item, index) => {
                return (
                    <li className="page-item" onClick={() => handleNumPage(item)}><a className="page-link" href="#">{item}</a></li>
                )
            })
        )
    }
    if (searchTxt) {
        return (
            <>
                <div className="usersTable">
                    <h3>Kết quả tìm kiếm "{searchTxt}"</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col-2">#</th>
                                <th scope="col-2">Tài khoản</th>
                                <th scope="col">Họ tên</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Mật khẩu</th>
                                <th scope="col">Mã loại</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderSearced()}
                        </tbody>
                    </table>
                </div>
                <div className="userOptions">
                    <form className="inputSearch">
                        <input placeholder="Search" id="searching" onChange={handleSearch}></input>
                    </form>
                    <ThemNguoiDung addUsers={addUsers} dispatch={dispatch} usersList={allUser} />
                    <nav aria-label="Page navigation example ">
                        <ul className="pagination myPagi">
                            {handlePagiPages()}
                        </ul>
                    </nav>
                </div>
    
            </>
        )
    } else {
    return (
        <>
            <div className="usersTable">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col-2">#</th>
                            <th scope="col-2">Tài khoản</th>
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
                    <input placeholder="Search" id="searching" onChange={handleSearch}></input>
                </form>
                <ThemNguoiDung addUsers={addUsers} dispatch={dispatch} usersList={allUser} />
                <nav aria-label="Page navigation example ">
                    <ul className="pagination myPagi">
                        {handlePagiPages()}
                    </ul>
                </nav>
            </div>

        </>
    )
    }
}

export default MainAdminPage;
