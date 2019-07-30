import React from 'react'
import DottedWhite from '../img/dotted1.png'
import Google from '../img/google-black.svg'

import './footer.css'


export default class Footer extends React.Component {

    MoveFooterComponent () {
        document.body.addEventListener("mousemove", (event) => {
            let dotted = document.getElementsByClassName('footer-dooted');
            let countX = event.pageX/45;

            dotted[0].style.transform = 'translateX('+(countX/2)+'%)';            
        });
    }

    render () {
        this.MoveFooterComponent()

        return (
            <div className='footer'>
                <h3 className='reqrName'>Alex Reqruitment</h3>
                <div className="reqrLinks">
                    <div className="reqrLinks-google">
                        <span>
                            <img src={Google} />
                        </span> 
                        <a href='#'>
                            developer@gmail.com
                        </a>   
                    </div>
                    <div className="reqrLinks-inst">
                        <span>
                            in
                        </span> 
                        <a href='#'>
                            https://www.linkedin.com
                        </a> 
                    </div>
                </div>
                    
                <button>Book a call</button>
                <img src={DottedWhite} className = 'footer-dooted' />
            </div>
        )
    }
}