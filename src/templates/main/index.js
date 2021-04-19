import React from 'react'
import { Route } from 'react-router-dom'
import Nav from "../../pages/main/nav/index";


const MainTemplate = (props) => {
    return (
        <>
            <Nav/>
            <main>{props.children}</main>
        </>
    )
}

export default function RouterMainTemplate ({path, exact, Component}) {
    return (
        <Route path={path} exact={exact}>
            <MainTemplate>
                <Component/>
            </MainTemplate>
        </Route>
    )
}
