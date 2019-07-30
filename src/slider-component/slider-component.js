import React from 'react'
import B1 from '../img/b1.jpg'
import B2 from '../img/b2.jpg'

import './slider-component.css'


export default class SliderComponent extends React.Component {

    state = {
        childCount: 0,
        active: false,
        arr: []
    }
    
    SlideMoving (count) {
        let sliderList = document.getElementsByClassName('slider-list');
        sliderList[0].style.left = -(count*100)+'vw';
    }

    ShowSlide (event) {
        let newArr = this.state.arr
        let idx = event.target.id - 1

        for (let i = 0; i< newArr.length; i++) {
            newArr[i].active = false
        }
        newArr[idx].active = true
        this.SlideMoving(idx);

        this.setState ({arr: newArr})
    }

    GetArr (count) {
        const arrTr = [];
        let arrObj = {
            number: 0,
            active: false
            }

        for (let i=0; i<count; i++){  
            if( i==0 ) {
                arrObj = {
                    number: i+1,
                    active: true
                }
            } else {
                arrObj = {
                    number: i+1,
                    active: this.state.active
                }
            }
            arrTr.push(arrObj);
        }
        
        this.setState({arr: arrTr})
    }

    Slider () {
        const sliderBtn = this.state.arr.map(item => {     
            let classname = 'slider-btn '
        
            if (item.active) { classname += 'active'}

            return  <li id={item.number} key={item.number} className={classname} onClick = {(e) => this.ShowSlide(e)}>
                    </li>
        })

        return sliderBtn      
    }

    WindowLoad () {
       return false
    }

    render () {
        const {childCount} = this.state;

        window.addEventListener('load', () => {                            
            const element = document.getElementsByClassName('slider-list')[0]
            this.setState({ childCount: element.children.length});
            this.GetArr(element.children.length);
        })

        return (
            <div className = 'slider-component'>
               
                <span className = 'slider-component-number'>07</span>
                <h4><b>Case studies</b></h4>
                <div className = 'slider-list'>
                    <div className = 'slide slide1'>
                        <div> <img src={B1} /> </div>
                        <div className = 'slide-descr1'>
                            <p >
                                Project: precisionsurvey<br />
                                Description: surveys<br />
                                Candidate requirements: One senior developer<br />
                                Project length: unlimited.<br />
                                Candidates contacted: 100.<br />
                                Rate: 4000$ per month (160 hours at 25$ an hour).<br />
                                Time taken: 1 day.<br />
                                Decision maker: CTO. <br />
                            </p>
                        </div>
                        <div className = 'slide-descr2'>
                            <p >
                                Project: precisionsurvey<br />
                                Description: surveys<br />
                                Candidate requirements: One senior developer<br />
                                Project length: unlimited.<br />
                                Candidates contacted: 100.<br />
                                Rate: 4000$ per month (160 hours at 25$ an hour).<br />
                                Time taken: 1 day.<br />
                                Decision maker: CTO.<br />
                            </p>
                        </div>
                        <div> <img src={B2} /> </div>
                        
                    </div>
                    <div className = 'slide slide2'>
                        <div> <img src={B1} /> </div>
                        <div className = 'slide-descr1'>
                            <p >
                                Project: precisionsurvey<br />
                                Description: surveys<br />
                                Candidate requirements: One senior developer<br />
                                Project length: unlimited.<br />
                                Candidates contacted: 100.<br />
                                Rate: 4000$ per month (160 hours at 25$ an hour).<br />
                                Time taken: 1 day.<br />
                                Decision maker: CTO. <br />
                            </p>
                        </div>
                        <div className = 'slide-descr2'>
                            <p >
                                Project: precisionsurvey<br />
                                Description: surveys<br />
                                Candidate requirements: One senior developer<br />
                                Project length: unlimited.<br />
                                Candidates contacted: 100.<br />
                                Rate: 4000$ per month (160 hours at 25$ an hour).<br />
                                Time taken: 1 day.<br />
                                Decision maker: CTO.<br />
                            </p>
                        </div>
                        <div> <img src={B2} /> </div>
         
                    </div>
                </div>
                
                <ul className="slider-btn-list" >
                   { childCount ? this.Slider(childCount) : this.WindowLoad()}
                </ul>

            </div>
        )
    }
}




