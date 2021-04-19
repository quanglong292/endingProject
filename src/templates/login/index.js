import React from 'react'
import { Route } from 'react-router'

const LoginTemplate = (props) => {
    return props.children
}

const RouterLoginTemplate = ({path, exact, Component}) => {
    return (
        <Route path={path} exact={exact}>
            <LoginTemplate>
                <Component/>
            </LoginTemplate>
        </Route>
    )
}


export default RouterLoginTemplate;