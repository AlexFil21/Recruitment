import React from 'react'
import Author from '../img/au.jpg'
import Dotted from '../img/dotted.png'
import List from '../img/list.png'
import Google from '../img/google-plus.svg'
import GoogleBlack from '../img/google-black.svg'
import PlayBtn from '../img/play-button.svg'
import PlayBtnBlack from '../img/play-button-black.svg'


import './top-component.css'

export default class TopComponent extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            Gimg: Google,
            PBtn: PlayBtn
        }

        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseEnterMoover = this.onMouseEnterMoover.bind(this);
        this.onMouseLeaveMoover = this.onMouseLeaveMoover.bind(this);
        this.onMouseEnterVideo = this.onMouseEnterVideo.bind(this);
        this.onMouseLeaveVideo = this.onMouseLeaveVideo.bind(this);
    }

    MoveComponent() {
        document.body.addEventListener("mousemove", (event) => {
            let nickName = document.getElementsByClassName('main-page-img-nick');
            let pageLinks = document.getElementsByClassName('main-page-links');
            let pageStudio = document.getElementsByClassName('main-page-studio')[0];
            let pageNumber = document.getElementsByClassName('page-number')[0];

            let countX = event.pageX/45;
            let countY = event.pageY/85;
            
            pageLinks[0].style.transform = 'translateY('+countY+'%)';
            nickName[0].style.transform = "skewX("+countX+"deg)"; 
            pageStudio.style.transform = 'translate('+(countX-10)+'%, '+(countY-10)+'%)';
            pageNumber.style.transform = 'translate('+ countY+'%, '+ countY+'%)'
            
        });         
    }

    onMouseEnterMoover () {
        document.getElementsByClassName('main-page-lng')[0].style.alignItems = 'flex-end';
    }

    onMouseLeaveMoover () {
        document.getElementsByClassName('main-page-lng')[0].style.alignItems = 'flex-start'
    }

    onMouseEnterHandler () {
        this.setState({Gimg: GoogleBlack})
    }
    onMouseLeaveHandler () {
        this.setState({Gimg: Google})
    }
    onMouseEnterVideo () {
        this.setState({PBtn: PlayBtnBlack})
    }
    onMouseLeaveVideo () {
        this.setState({PBtn: PlayBtn})
    }

    VideoShow() {
        let videoOverf = document.getElementsByClassName('video-overflow-component')[0];
            videoOverf.style.display = "block";
            document.body.style.overflow = 'hidden'
    }

    render () {
        this.MoveComponent();


        return (
            <div className = "main-page">
                
                <header>
                        <div className ="main-page-author_name">
                            <span>Alex Recruitment</span>
                        </div>
                        <div className ="main-page-lng">
                                <div className ="main-page-lng-moover"></div>
                                <div className ="main-page-lng-chng"
                                    onMouseEnter={this.onMouseEnterMoover}
                                    onMouseLeave={this.onMouseLeaveMoover}>
                                    <span>En</span>
                                </div>
                        </div>
                </header>
                
                <div className = "main-page-img">
                    <img src={Author}></img>

                    <span className = "main-page-img-nick">
                        <i>Alex Recruitment</i>
                    </span>

                    <div className = "main-page-studio">
                        <div>
                            <img src={List}></img>
                        </div>
                        <span>
                            <i>Case studies</i>
                        </span>
                    </div> 

                    <div className = "main-page-video-link"
                          onClick={this.VideoShow}>
                            <div    
                                onMouseEnter={this.onMouseEnterVideo}
                                onMouseLeave={this.onMouseLeaveVideo}>
                                    <img src={this.state.PBtn}></img>
                            </div>
                            <span><i>Video</i></span>
                    </div>
                </div>
                
                <img src={Dotted} className="main-page-dotted"></img>
                <img src={Dotted} className="main-page-dotted1"></img>
                
                <div className = "main-page-double_name">
                    <span className = "main-page-double_name-big">
                        Alex Recruitment
                    </span>
                    <span className = "main-page-double_name-sm">
                        Alex Recruitment
                    </span>
                </div>

                <div className = "main-page-links">
                    <div className = "main-page-links-google "
                        onMouseEnter={this.onMouseEnterHandler}
                        onMouseLeave={this.onMouseLeaveHandler}
                        >
                        <img src={this.state.Gimg}></img>
                    </div>
                    <div className = "main-page-links-inst">
                        <span><b>in</b></span>
                    </div>
                </div>
            
            <div className = "page-number">
                <span>01</span>
            </div>

            <footer>
                <span>Help you build your ideal team.</span>
                <button>Book a call</button>
            </footer>
            
        </div>
        )
    }

} 