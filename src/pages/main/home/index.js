import React from 'react'
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
        </>
    )
}
