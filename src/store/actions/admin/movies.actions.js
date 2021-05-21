import axios from "axios";

export const addMovies = (maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia) => {
    const user = JSON.parse(localStorage.getItem("userLogin"))
    const token = user.accessToken
    return (dispatch) => {
        axios({
            method: "POST",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
            data: {
                maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            alert("Thêm phim thành công")
            dispatch(addMoviesSucc(res.data))
        })
    }
}

const addMoviesSucc = (res) => {
    return {
        type: "ADD_MOVIESSUCCESS",
        payload: res
    }
}