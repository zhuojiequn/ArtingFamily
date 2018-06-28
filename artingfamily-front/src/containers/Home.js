import React,{Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
export default class Home extends Component{
    render(){
        var changeBack = {background:'#f4f4f4',minHeight:'300px',marginTop:'-210px',paddingTop:'350px'}
        return(
            <div className="Home">
                <Header />
                <Footer/>
            </div>
        )
    }
}