import React,{Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Writeintroduce from '../components/writeintroduce';


export default class Write extends Component{
    render(){
        return(
            <div>
                <Header />
                <Writeintroduce />
                <Footer />
            </div>
        )
    }
}