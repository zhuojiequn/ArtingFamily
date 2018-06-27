import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './slider.scss';
export default class Slider extends Component{
    render(){
        return(
            <div id="myCarousel" className="carousel slide">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>   
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="src/public/images/slider0.png" alt="First slide" />
                        <h1>创造你的艺术</h1>
                    </div>
                    <div className="item">
                        <img src="src/public/images/slider1.png" alt="Second slide" />
                    </div>
                    <div className="item">
                        <img src="src/public/images/slider1.png" alt="Third slide" />
                    </div>
                </div>
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
            </div>
        )
    }
}