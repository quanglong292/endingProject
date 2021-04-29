import React from 'react'
import { Route } from 'react-router'
import Dashboard from '../../pages/admin/dashboard'

const AdminTemplate = (props) => {
    return (
        <div className="adminContainer">
            <Dashboard/>
            {props.children}
        </div>
    )
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
