import React,{Component} from 'react';
import './contact.scss';
import '../public/scss/base.scss'
export default class Contact extends Component{
    render(){
        return(
            <div className="contact container">
                <div className="contactCon clearfix">
                    <h3>关于我们</h3>
                    <div className="contact-l clearfix">
                        <img src="src/public/images/tell.png" />
                        <div className="conItem">
                            <p>400-123456</p>
                            <p>400-123456</p>
                        </div>
                    </div>
                    <div className="contact-r clearfix">
                        <img src="src/public/images/area.png" />
                        <span>地址:浙江省杭州市九堡镇</span>
                    </div>
                </div>
            </div>
        )
    }
}