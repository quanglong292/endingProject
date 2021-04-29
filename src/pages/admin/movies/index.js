import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../../../store/actions/movieList.actions';
import ThemPhim from './themPhim';

export default function MoviesAdmin() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieList());
    }, [])
    const { movieList } = useSelector(state => state.movie)



    return (
        <>
            <ThemPhim dispatch={dispatch} movies={movieList}/>
            <div className="moviesTable">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}
