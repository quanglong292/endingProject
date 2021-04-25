import React from 'react'
import { NavLink } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="dashboard">
            <NavLink to="/login">Đăng nhập</NavLink>
            <a to="">Home</a>
            <a to="">Danh sách người dùng</a>
            <a to="">Danh sách phim</a>
        </div>
    )
}

export default Dashboard;
