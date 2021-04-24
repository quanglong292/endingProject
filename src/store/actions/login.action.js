import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILED} from "../constanct/user.constanct";

export const postLogin = (taikhoan, matkhau, history) => {
    return (dispatch) => {
        axios ({
            method: "POST",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
            data: {
                taikhoan,
                matkhau,
            },
        }).then((res) => {
            localStorage.setItem("userLogin", JSON.stringify(res.data)
            )
            dispatch(loginSucess(res.data))
            history.goBack()
        }).catch((err) => {
            dispatch(loginFailed(err))
        })
    }
}

const loginSucess = (res) => {
    return {
        type: LOGIN_SUCCESS,
        payload: res
    }
}

const loginFailed = (err) => {
    return {
        type: LOGIN_FAILED,
        payload: err
    }
}

