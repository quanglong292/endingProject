import React from 'react'
import { NavLink } from 'react-router-dom'
import Playground from '../../../playground'
import AppAds from '../../components/AppAds'
<<<<<<< HEAD
=======
import Footer from '../../components/Footer'
>>>>>>> 8f4de04e7fcbe8d28830d197455963a1cd1d0db7
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
         <AppAds/>
<<<<<<< HEAD
=======
         <Footer/>
>>>>>>> 8f4de04e7fcbe8d28830d197455963a1cd1d0db7
        </>
    )
}
