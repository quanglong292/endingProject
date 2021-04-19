import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { postLogin } from '../../../store/actions/login.action';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({
        taikhoan: "",
        matkhau: "",
    })

    const takeUser = (event) => {
        const { value, name } = event.target;
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postLogin(user.taikhoan, user.matkhau, history));
    }
    return (
        <div className="loginContainer">
            <div className="loginBackground">
                <h3>Đăng nhập</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="taikhoan" name="taikhoan" onChange={takeUser} placeholder="Tài khoản"></input>
                    <input type="text" id="matkhau" name="matkhau" onChange={takeUser} placeholder="Mật khẩu"></input>
                    <button type="submit" >Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}

export default Login;