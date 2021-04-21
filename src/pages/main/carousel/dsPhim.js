import React, { useEffect } from "react";

function DanhSachPhim(dsPhim) {

  // console.log("ab:", dsPhim.dsPhim);
  const click = () => {
    console.log("clicked");
  }
  const renderMovie = () => {
    return dsPhim.dsPhim.map((item, index) => {
      return (
        <option>
          {item.tenPhim}
        </option>
      )
    })
  }

  return (
    <select onChange={click()}>
      <option>Chon Phim</option>
        {renderMovie()}
    </select>
  );
}
export default DanhSachPhim;
