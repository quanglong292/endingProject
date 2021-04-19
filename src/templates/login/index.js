import React from 'react'
import { Route } from 'react-router'

const LoginTemplate = (props) => {
    return (    
        <>
            <header>Header</header>
            <main>{props.children}</main>
            <footer>Footer</footer>
        </>    
    )
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