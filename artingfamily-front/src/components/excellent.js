import React,{Component} from 'react';

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
                </div>
            </div>
        )
    }
}