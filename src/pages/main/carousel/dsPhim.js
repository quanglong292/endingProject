import React, { useEffect } from "react";

function DanhSachPhim(props) {
  const {dsPhim, handleMaPhim} = props
  const renderMovie = () => {
    return dsPhim.map((item, index) => {
      return (
        <option value={item.maPhim}>
          {item.tenPhim}
        </option>
      )
    })
  }

  return (
    <select onChange={handleMaPhim}>
      <option>Chon Phim</option>
        {renderMovie()}
    </select>
  );
}

export default DanhSachPhim;
