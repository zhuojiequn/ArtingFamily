import React,{Component} from 'react';
import Header from './header';
import Footer from './footer';
import Banner from './banner'
import './writeintroduce.scss';

export default class WriteIntroduce extends Component{
    render(){
        return(
            <div className="writeIntro">
                <div className="write_bar">
                    <img src="src/public/images/write_ban.png" />
                </div>
                
            </div>
        )
    }
}