import React from "react"
import TopComponent from '../top-component'
import MiddleComponent from '../middle-component'
import LittleDescription from '../little-description'
import VideoComponent from '../video-component'
import PdfGuide from '../pdf-guide'
import SliderComponent from '../slider-component'
import Footer from '../footer'

import './app.css'

export default class App extends React.Component {

    render () {
        return (
            <div>
                <TopComponent />
                <MiddleComponent />
                <LittleDescription />
                <VideoComponent />
                <PdfGuide />
                <SliderComponent />
                <Footer />
            </div>
        )
    }
}