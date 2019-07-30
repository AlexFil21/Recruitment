import React from 'react'
import I1 from '../img/i1.png'
import I2 from '../img/i2.png'
import I3 from '../img/i3.png'
import I4 from '../img/i4.png'
import I5 from '../img/i5.png'
import Dotted from '../img/dotted.png'

import './little-description.css'

export default class LittleDescription extends React.Component {

    MoveLittleDescrComponent () {
        document.body.addEventListener("mousemove", (event) => {
            let litDescrNumb = document.getElementsByClassName('number4');
            let countX = event.pageX/45;
            let countY = event.pageY/85;

            litDescrNumb[0].style.transform = 'translate('+(countX-20)+'%, '+(countY-20)+'%)';
            
        });
    }

    render () {
        this.MoveLittleDescrComponent()

        return (
            <div className="description">
                    <span>How our cooperation will be arranged.</span>
                    <div className="little-descr">
                        <div className="little-descr-sqr">
                                <span className="little-descr-sqr-shadow"></span>
                                <div className="little-descr-sqr-img">
                                    <img src={I1}></img>
                                </div>        
                                <p>
                                    Chose the time slot that works for you.
                                </p>
                        </div>
                        <div className="little-descr-sqr">
                                <span className="little-descr-sqr-shadow sh-sqr2"></span>
                                <div className="little-descr-sqr-img">
                                    <img src={I2}></img>
                                </div>        
                                <p>
                                    Tell me who you're looking for 
                                    and how much you're willing to spend.
                                </p>
                        </div>
                        <div className="little-descr-sqr">
                                <span className="little-descr-sqr-shadow sh-sqr3"></span>
                                <div className="little-descr-sqr-img">
                                    <img src={I3}></img>
                                </div>        
                                <p>
                                I start looking for your
                                ideal candidate and send
                                you cvs of people ready to have a conversation.
                                </p>
                        </div>
                        <div className="little-descr-sqr">
                                <span className="little-descr-sqr-shadow sh-sqr4"></span>
                                <div className="little-descr-sqr-img">
                                    <img src={I4}></img>
                                </div>        
                                <p>
                                    You chose the best match.
                                </p>
                        </div>
                        <div className="little-descr-sqr">
                                <span className="little-descr-sqr-shadow sh-sqr5"></span>
                                <div className="little-descr-sqr-img">
                                    <img src={I5}></img>
                                </div>        
                                <p>
                                    After one month of work when it is the time forthe candidate's
                                    first salary you are charged half of his monthly salary as my service fee.
                                </p>
                        </div>
                    </div>
                    <button>Book a call</button>
                    <p className="number4">04</p>
                    <img src = {Dotted} className="description-dotted" />
            </div>
        )
    }
}