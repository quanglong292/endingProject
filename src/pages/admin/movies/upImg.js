import React from 'react'

export default function UpImg() {
    return (
        <div className="upImg">
            <button type="button" className="btn btn-outline-success m-2" data-toggle="modal" data-target="#upImg">
                Upload Image
            </button>
            <div className="modal fade" id="upImg" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thêm hình ảnh</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                
                                <input type="file" multiple />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
