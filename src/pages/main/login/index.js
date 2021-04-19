import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { postLogin } from '../../../store/actions/login.action';

function Login () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({
        taikhoan: "",
        matkhau: "",
    })

    const takeUser = (event) => {
        const {value, name} = event.target;
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
            <form onSubmit={handleSubmit}>
                <label for="#taikhoan">Tài khoản: </label>
                <input type="text" id="taikhoan" name="taikhoan" onChange={takeUser}></input>
                <label for="#matkhau">Mật khẩu: </label>
                <input type="text" id="matkhau" name="matkhau" onChange={takeUser}></input>
                <button type="submit" >dang nhap</button>
            </form>
        </div>
    )
}

export default Login;