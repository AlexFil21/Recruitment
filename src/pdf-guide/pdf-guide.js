import React from 'react'
import Dotted from '../img/dotted.png'

import './pdf-guide.css'

export default class PdfGuide extends React.Component {

    MovePGFgComponent () {
        document.body.addEventListener("mousemove", (event) => {
            let Numb = document.getElementsByClassName('pdf-guide-number');
            let countX = event.pageX/45;
            let countY = event.pageY/85;

            Numb[0].style.transform = 'translate('+(countX/3)+'%, '+(countY-20)+'%)';
            
        });
    }

    render () {
        this.MovePGFgComponent()

        return (
            <div className="pdf-guide">
                    <div className="pdf-guide-content"> 
                        <h4>PDF Guide.</h4>
                        <p>
                            I have assembled my best practices for hiring a developer in Ukraine or Eastern Europe
                            in one pdf book. Why Ukraine ? Because these developers are perfect ration of price,
                            quality and mentality.
                        </p>
                        <h5>Email Address</h5>
                        <input type='email'/>
                        <button>Get the pdf guide</button>
                    </div>

                    <span className="pdf-guide-number">06</span>
                    <img src={Dotted} className="pdf-guide-dotted dotted1" />
                    <img src={Dotted} className="pdf-guide-dotted dotted2" />
                    
                    <div className="pdf-guide-dotted dotted3">
                        <div>
                            <img src={Dotted} className="dot3" />
                        </div>
                    </div>
                
                    <div className="pdf-guide-bgc"></div>
            </div>
        )
    }
}