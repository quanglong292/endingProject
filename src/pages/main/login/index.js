import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { postLogin } from '../../../store/actions/login.action';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const {maLichChieu, err, user} = useSelector(state => state.booking)
    
    const [userState, setUserState] = useState({
        taikhoan: "",
        matkhau: "",
    })

    let [valida, setValida] = useState(err)

    const takeUser = (event) => {
        setValida(valida = "")
        const { value, name } = event.target;
        setUserState({
            ...userState,
            [name]: value,
        })
        console.log(history);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postLogin(userState.taikhoan, userState.matkhau, history));
        if (err !== "") {
            setValida(valida += err)
        }
    }

    return (
        <div className="loginContainer">
            <div className="loginBackground">
                <h3>Đăng nhập</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="taikhoan" name="taikhoan" onChange={takeUser} placeholder="Tài khoản"></input>
                    <input type="text" id="matkhau" name="matkhau" onChange={takeUser} placeholder="Mật khẩu"></input>
                    {valida ? <p style={{color: "red"}}>{valida}</p> : ""}
                    <button type="submit">Đăng nhập</button>
                </form>
                <div className="login-router">
                    <NavLink to="/">Home | </NavLink>
                    <NavLink to="/register">Đăng ký</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login;