import React,{Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import AboutBody from '../components/aboutBody';

export default class About extends Component{
    render(){
        return(
            <div className="About">
                <Header />
                <Banner />
                <AboutBody />
                <Footer />
            </div>
        )
    }
}