import axios from "axios";


const user = JSON.parse(localStorage.getItem("userLogin"))
const token = user.accessToken
export const getUsers = () => {
    return (dispatch) => {
        axios({
            method: "GET",
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
        }).then((res) => {
            dispatch(getUsersSucc(res.data))
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