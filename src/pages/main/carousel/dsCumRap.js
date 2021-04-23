import React from 'react'

function DanhSachCumRap (props) {
    const {cumRap, handleMaCum} = props
    const renderCumRap = () => {
        return cumRap?.map((item, index) => {
            return item.cumRapChieu.map((item, index) => {
                return (
                    <option value={item.maCumRap}>{item.tenCumRap}</option>
                )
            })
        })
    }
    return (
        <select onChange={handleMaCum}>
            <option>Chon Cum Rap</option>
            {renderCumRap()}
        </select>
    )
}

export default DanhSachCumRap;
