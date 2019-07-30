import React from 'react'
import Pic from '../img/bg1.jpg'
import Pic1 from '../img/bg2.jpg'
import Dotted from '../img/dotted.png'


import './middle-component.css'

export default class MiddleComponent extends React.Component {

    MoveMiddleComponent () {
        document.body.addEventListener("mousemove", (event) => {
            let middleCompImg = document.getElementsByClassName('mmd');
            let middleCompImg1 = document.getElementsByClassName('mmd1');
            let countX = event.pageX/45;
            let countY = event.pageY/85;

            middleCompImg[0].style.transform = 'translate('+countX+'%, '+(countY-10)+'%)';
            middleCompImg1[0].style.transform = 'translate(-'+countX+'%)';
            
            
        });
    }

    render () {
        this.MoveMiddleComponent();

        return (
            <div className="middle-component">
    
                <div className="middle-component-main">
                    <div className="middle-component-main-descr1 middle-comp"> 
                            <span><b>44%</b></span>
                            <p>
                                of CIOs say they miss out on top talent because candidates are seeking
                                higher salaries than they’re able to offer. The persistent shortage of
                                technology workers is a significant business problem.
                                I will find the person you're looking for at affordable rate.
                                I specialize on attracting, shortlisting, selecting and appointing
                                suitable candidates for jobs (either permanent or temporary)
                                within an organization. I will make sure you save your time and budget.
                            </p>
                    </div>
                    <div className="middle-comp-img middle-component-main-img1 middle-comp">
                            <img src={Pic} />
                    </div>
                    <div className="middle-comp-img middle-component-main-img2 middle-comp">
                            <img src={Pic1} />
                    </div>
                    <div className="middle-component-main-descr2 middle-comp">
                            <span>Why me?</span>
                            <p>
                                    It all started when I worked for an outsource development 
                                    agency here in Ukraine. I've seen projects fail and succeed,
                                    I noticed a pattern and its main aspect is the team.
                                    My extensive experience as a project manager, product manager
                                    and analytic with technical background helps me achieve best results.
                                    It all started when I worked for an outsource development agency here in Ukraine.
                                    I've seen projects fail and succeed, I noticed a pattern and its main aspect
                                    is the team. My extensive experience as a project manager, product manager
                                    and analytic with technical background helps me achieve best results.
                            </p>
                    </div>
                </div>
                <span className="middle-component-number number2">02</span>
                <span className="middle-component-number number3">03</span>
                <img src = {Dotted} className="middle-component-main-dot dotted mmd"></img>
                <img src = {Dotted} className="middle-component-main-dot dotted1 mmd1"></img>
                
                

            </div>
        )
    }
}