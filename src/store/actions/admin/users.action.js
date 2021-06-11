import axios from "axios";

export const getPartUsers = (num) => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${num}&soPhanTuTrenTrang=200`
        }).then((res) => {
            dispatch(getUsersSucc(res.data))
        })
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`
        }).then((res) => {
            dispatch({
                type: "GET_ALLUSER",
                payload: res.data
            })
        })
    }
}

const getUsersSucc = (res) => {
    return {
        type: "GET_USERSUCCESS",
        payload: res
    }
}

export const updateUsers = (taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen) => {
    const user = JSON.parse(localStorage.getItem("userLogin"))
    const token = user.accessToken
    return (dispatch) => {
        axios({
            method: "PUT",
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            data: {
                taiKhoan,
                matKhau,
                email,
                soDt,
                maNhom,
                maLoaiNguoiDung,
                hoTen,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            dispatch(putUsersSucc(res.data))
            alert("cap nhat thanh cong")
        })
    }
}

const putUsersSucc = (res) => {
    return {
        type: "PUT_USERSUCCESS",
        payload: res
    }
}

export const addUsers = (taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen) => {
    const user = JSON.parse(localStorage.getItem("userLogin"))
    const token = user.accessToken
    return (dispatch) => {
        axios({
            method: "POST",
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            data: {
                taiKhoan,
                matKhau,
                email,
                soDt,
                maNhom,
                maLoaiNguoiDung,
                hoTen,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            dispatch(addUsersSucc(res.data))
            alert("Thêm thành công");
        })
    }
}

const addUsersSucc = (res) => {
    return {
        type: "ADD_USERSSUCCESS",
        payload: res
    }
}

export const deleteUsers = (taiKhoan) => {
    const user = JSON.parse(localStorage.getItem("userLogin"))
    const token = user.accessToken
    return (dispatch) => {
        axios({
            method: "DELETE",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            dispatch(deleteUsersSucc(res.data))
            alert("Xoa thanh cong");
        })
    }
}

const deleteUsersSucc = (res) => {
    return {
        type: "DELETE_USERSSUCCESS",
        payload: res
    }
}

export const postRegis = (data, history) => {
    return (dispatch) => {
        axios({
            method: "POST",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            data: {
                data
            }
        }).then(res => {
            dispatch({
                type: "POST_REGISTER",
                payload: res.data
            });
            history.goBack();
        }).catch(err => alert("Error!", err))
    }
}
