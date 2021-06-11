import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieListPagination } from '../../../store/actions/movieList.actions';
import ThemPhim from './themPhim';
import UpImg from './upImg';

export default function MoviesAdmin() {
    const dispatch = useDispatch();
    const movieListPagi = useSelector(state => state.movie)
    // console.log("asd", movieListPagi.movieListPagi.items);
    console.log(movieListPagi.movieListPagi);
    const renderMovies = () => {
        return movieListPagi.movieListPagi.items.map((item, index) => {
            return (
                <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td scope="col">{item.maPhim}</td>
                    <td scope="col">{item.tenPhim}</td>
                    <td scope="col">{item.trailer}</td>
                    <td scope="col">{item.hinhAnh}</td>
                    <td scope="col">{item.moTa}</td>
                    <td scope="col">{item.ngayKhoiChieu}</td>
                    <td scope="col">{item.danhGia}</td>
                    <td className="d-flex">
                        <button className="btn btn-outline-success mr-2">Sửa</button>
                        <button className="btn btn-outline-warning">Xóa</button>
                    </td>
                </tr>
            )
        })
    }

    const handleTotalPage = () => {
        let array = [];
        for (var i = 0; i < movieListPagi.movieListPagi.totalPages; i++) {
            array.push(String(i + 1))
        }
        return array.map((item, index) => {
            return (
                <li key={index} className="page-item" onClick={() => handleChange(item)}><a className="page-link" href="#">{item}</a></li>
            )
        })
    }

    const handleChange = (num) => {
        dispatch(getMovieListPagination(num));
    }
    return (
        <>
            <div className="moviesTable">
                <div className="d-flex">
                    <ThemPhim dispatch={dispatch} />
                    <UpImg dispatch={dispatch} />
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {handleTotalPage()}
                    </ul>
                </nav>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mã Phim</th>
                            <th scope="col">Tên Phim</th>
                            <th scope="col">Trailer</th>
                            <th scope="col">Hình Ảnh</th>
                            <th scope="col">Mô Tả</th>
                            <th scope="col">Ngày Khởi Chiếu</th>
                            <th scope="col">Đánh Giá</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderMovies()}
                    </tbody>
                </table>
            </div>
        </>

    )
}
