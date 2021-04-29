import React from 'react'
import { NavLink } from 'react-router-dom';

function Dashboard() {
    



    return (
        <div className="dashboard">
            <NavLink to="/login">Đăng nhập</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/admin/userlist">Danh sách người dùng</NavLink>
            <NavLink to="/admin/movies">Danh sách phim</NavLink>
        </div>
    )
}

export default Dashboard;
