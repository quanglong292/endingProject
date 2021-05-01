import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, useHistory} from 'react-router'
import Dashboard from '../../pages/admin/dashboard'

const AdminTemplate = (props) => {
    const {user} = useSelector(state => state.booking)
     
    const history = useHistory()
    // useEffect(() => {
        
    //     // else {
    //     //     return (<Redirect to="/"/>) 
    //     // }
    // })

    if (!user) {
        return (
            <Redirect to="/"/>
            // <p>{user}</p>
        )
    } else {
        if (user.maLoaiNguoiDung == "QuanTri") {
            return (
                <div className="adminContainer">
                    <Dashboard/>
                    {props.children}
                </div> 
            )
        } else {
            alert("Ban khong phai admin")
        }
    }

    
}

export default function RouterAdminTemplate ({path, exact, Component}) {
    return (
        <Route path={path} exact={exact}>
            <AdminTemplate>
                <Component/>
            </AdminTemplate>
        </Route>
    )
}
