import React, { useState } from 'react'
import { addMovies } from '../../../store/actions/admin/movies.actions';

export default function ThemPhim({dispatch, movies}) {
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
    const takeMovies = (e) => {
        const {value, id} = e.target;
        setMovies({
            ...Movies,
            [id]: value,
        })
    }

    const hadnleAddMovies = () => {
        dispatch(addMovies(Movies.maPhim, Movies.tenPhim, Movies.biDanh, Movies.trailer, Movies.hinhAnh, Movies.moTa, Movies.maNhom, Movies.ngayKhoiChieu, Movies.danhGia))
    }

    return (
        <div className="themPhim">
            <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal">
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
                        <div className="modal-body">
                            <form>
                                <div>
                                    <label for="#maPhim">Mã phim: </label>
                                    <input type="number" id="maPhim" onChange={takeMovies} min="1000" max="9999"></input>
                                </div>
                                <div>
                                    <label for="#tenPhim">Tên phim: </label>
                                    <input type="text" id="tenPhim" onChange={takeMovies}></input>
                                </div>
                                <div>
                                    <label for="#biDanh">Bịa danh: </label>
                                    <input type="text" id="biDanh" onChange={takeMovies}></input>
                                </div>

                                <div>
                                    <label for="#trailer">Trailer: </label>
                                    <input type="text" id="trailer" onChange={takeMovies}></input>
                                </div>
                                <div>
                                    <label for="#hinhAnh">Hình ảnh: </label>
                                    <input type="text" id="hinhAnh" onChange={takeMovies}></input>
                                </div>
                                <div>
                                    <label for="#moTa">Mô tả: </label>
                                    <input type="text" id="moTa" onChange={takeMovies}></input>
                                </div>
                                <div>
                                    <label for="#maNhom">Mã nhóm: </label>
                                    <select id="maNhom" onChange={takeMovies}>
                                        <option>Mã nhóm</option>
                                        <option value="GP01">GP01</option>
                                        <option value="GP02">GP02</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="#ngayKhoiChieu">Ngày khởi chiếu: </label>
                                    <input type="text" id="ngayKhoiChieu" onChange={takeMovies}></input>
                                </div>
                                <div>
                                    <label for="#danhGia">Đánh giá: </label>
                                    <input type="number" id="danhGia" onChange={takeMovies} min="1" max="10"></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary">Đồng ý</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
