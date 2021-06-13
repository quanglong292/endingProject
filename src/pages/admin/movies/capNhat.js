import React from 'react'

export default function CapNhatMovie({movie}) {
    const takeMovie = () => {

    }
    const handleDispatch = () => {

    }
    return (
        <div className="themPhim">
            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target={"#exampleModal" + movie.maPhim} >
                Sửa
            </button>
            {/* Modal */}
            <div className="modal fade" id={"exampleModal" + movie.maPhim} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cập nhật phim</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div>
                                    <label for="#taiKhoan">Mã phim: </label>
                                    <input type="text" id="taiKhoan" onChange={takeMovie} defaultValue={movie.maPhim} disabled={true}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" >Đóng</button>
                            <button type="button" className="btn btn-primary" onClick={handleDispatch}>Đồng ý</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
