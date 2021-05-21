import React, { useState, useEffect } from 'react'
import { addMovies } from '../../../store/actions/admin/movies.actions';
import MovieValidation from "./valida.movies";

export default function ThemPhim({ dispatch }) {
    var dateFormat = require("dateformat");
    const [Movies, setMovies] = useState({
        "maPhim": 0,
        "tenPhim": "",
        "biDanh": "",
        "trailer": "",
        "hinhAnh": "",
        "moTa": "",
        "maNhom": "",
        "ngayKhoiChieu": "",
        "danhGia": 0,
    })
    const [date, setDate] = useState("");
    const [errors, setErrors] = useState({});

    const takeMovies = (e) => {
        const { value, id, ngayKhoiChieu } = e.target;
        setMovies({
            ...Movies,
            [id]: value,
            ngayKhoiChieu: date,
        })
    }

    const hadnleAddMovies = (e) => {
        e.preventDefault()
        setErrors(MovieValidation(Movies))
        dispatch(addMovies(Movies.maPhim, Movies.tenPhim, Movies.biDanh, Movies.trailer, Movies.hinhAnh, Movies.moTa, Movies.maNhom, Movies.ngayKhoiChieu, Movies.danhGia))
    }
    
    return (
        <div className="themPhim">
            <button type="button" className="btn btn-outline-success m-2" data-toggle="modal" data-target="#exampleModal">
                Thêm phim
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thêm phim</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body themPhim-modal">
                            <form onSubmit={hadnleAddMovies}>
                                <div>
                                    <label for="#maPhim">Mã phim: </label>
                                    <input type="number" id="maPhim" onChange={takeMovies} min="1000" max="9999" required></input>
                                </div>
                                <div>
                                    <label for="#tenPhim">Tên phim: </label>
                                    <input type="text" id="tenPhim" onChange={takeMovies} required></input>
                                </div>
                                <div>
                                    <label for="#biDanh">Bịa danh: </label>
                                    <input type="text" id="biDanh" onChange={takeMovies} required></input>
                                </div>

                                <div>
                                    <label for="#trailer">Trailer: </label>
                                    <input type="url" id="trailer" onChange={takeMovies} required></input>
                                </div>
                                <div>
                                    <label for="#hinhAnh">Hình ảnh: </label>
                                    <input type="text" id="hinhAnh" onChange={takeMovies} required></input>
                                </div>
                                <div>
                                    <label for="#moTa">Mô tả: </label>
                                    <input type="text" id="moTa" onChange={takeMovies} required minLength="50"></input>
                                </div>
                                {errors.moTa && <div className="errors">{errors.moTa}</div>}
                                <div>
                                    <label for="#maNhom">Mã nhóm: </label>
                                    <select id="maNhom" onChange={takeMovies}>
                                        <option value="GP01" defaultValue>GP01</option>
                                        <option value="GP02">GP02</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="#ngayKhoiChieu">Ngày khởi chiếu: </label>
                                    <input type="date" id="ngayKhoiChieu" onChange={(e) => setDate(dateFormat(e.target.value, "dd/mm/yyyy"))} required></input>
                                </div>
                                <div>
                                    <label for="#danhGia">Đánh giá: </label>
                                    <input type="number" id="danhGia" onChange={takeMovies} min="1" max="10" required></input>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary">Đồng ý</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
