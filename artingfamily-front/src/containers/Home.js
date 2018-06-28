import React,{Component} from 'react';
import Header from '../components/header';
import Slider from '../components/slider';
import AboutUs from '../components/about-us';
import Edution from '../components/edution';
import Excellent from '../components/excellent';
export default class Home extends Component{
    render(){
        var changeBack = {background:'#f4f4f4',minHeight:'300px',marginTop:'-210px',paddingTop:'350px'}
        return(
            <div className="Home">
                <Header />
                <Slider />
                <AboutUs />
                <div style={changeBack}>
                    <Edution />
                    <Excellent />
                </div>
            </div>
        )
    }
}