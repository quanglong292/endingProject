import React from 'react'
import { NavLink } from 'react-router-dom'
import Playground from '../../../playground'
import TixCarousel from '../carousel'
import MovieSlider from '../movieslider'
import Nav from '../nav'
import TimeLine from '../timeline'
import TixApp from '../tixapp'

export default function Home() {
    return (
        <>
         <TixCarousel/>
         <MovieSlider/>
         <TimeLine/>
         {/* <Playground/> */}
         {/* <TixApp/> */}
         <NavLink to="/admin/userlist">admin</NavLink>
        </>
    )
}
