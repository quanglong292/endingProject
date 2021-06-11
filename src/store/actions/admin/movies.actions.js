import axios from "axios";

export const addMovies = (data) => {
    // maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia
    const user = JSON.parse(localStorage.getItem("userLogin"))
    const token = user.accessToken
    return (dispatch) => {
        axios({
            method: "POST",
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh`,
            data: {
                data
            },
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            alert("Thêm phim thành công")
            dispatch(addMoviesSucc(res.data))
        }).catch((err) => {
            alert("Errors found see in console!")
            console.log(err);
        })
    }
}

const addMoviesSucc = (res) => {
    return {
        type: "ADD_MOVIESSUCCESS",
        payload: res
    }
}