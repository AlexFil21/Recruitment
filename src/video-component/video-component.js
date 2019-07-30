import React from 'react'
import Video from '../video/video.mp4'
import Dotted from '../img/dotted1.png'
import PlayBtn from '../img/play-button.svg'
import CloseBtn from '../img/close.png'


import './video-component.css'

export default class VideoComponent extends React.Component {

    VideoComponentShow() {
        let videoOverf = document.getElementsByClassName('video-overflow-component')[0];
            videoOverf.style.display = "block";
        document.body.style.overflow = 'hidden'
    }

    VideoComponentHide () {
        let videoOverf = document.getElementsByClassName('video-overflow-component')[0];
            videoOverf.style.display = "none";
            document.body.style.overflow = 'visible'
            document.body.style.overflowX = 'hidden'
    }

    render () {
        
        return (
            <div className = 'video-component'>
                <span className='video-title'>video</span>
                <span className = 'video-component-sqr'></span>
                <span className = 'video-component-number'>05</span>

                <div className = 'video-component-item'>
                    <video  autoPlay loop="loop">
                        <source src={Video} type='video/mp4'/>
                    </video>
                    <div className = 'video-component-item-bg'></div>
                </div>


                <div className = 'video-component-bg'></div>
                <div className = 'video-component-item-bg-btn'
                        onClick = {this.VideoComponentShow}>
                    <img src={PlayBtn} />
                </div>
                
                <div className = 'video-component-animation'>
                    <span className = 'video-component-animation-item'></span>
                    <span className = 'video-component-animation-item'></span>
                </div>


                <img src={Dotted} className = 'video-component-dotted vcd'/>
                <img src={Dotted} className = 'video-component-dotted1 vcd1'/>

{/*Video overflow */}
                <div className="video-overflow-component">
                    <div className='video-overflow-bg'></div>
                       
                        <div className = 'video-overflow'>
                            <video controls="controls" loop='loop'>
                                <source src={Video} type='video/mp4'/>
                            </video>
                        </div>
                       
                        <div className='video-overflow-btn'
                            onClick = {this.VideoComponentHide}>
                            <img src = {CloseBtn} />
                        </div>
                </div>
            </div>
        )
    }
} 