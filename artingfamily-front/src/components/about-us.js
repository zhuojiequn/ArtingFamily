import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './about-us.scss';
export default class AboutUs extends Component{
    render(){
        return(
            <div className="about-us">
                <div className="container">
                    <div className="us-infor">
                        <div className="us-infor-con">
                            <h3>关于我们</h3>
                            <p>中国古典艺术的陶瓷、剪纸、油画等综合艺术模式。艺术素养对培养学生的创新精神、提高实践能力、塑造健全人格都有极其重要的作用。</p>
                        </div>
                        <div className="us-pic"> 
                            <img src="src/public/images/aboutUs.png"/>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="us-pics">
                        <ul>
                            <li><Link to="/about"><img src="src/public/images/aboutUs01.png" /> </Link></li>
                            <li><Link to="/about"><img src="src/public/images/aboutUs02.png" /> </Link></li>
                            <li><Link to="/about"><img src="src/public/images/aboutUs03.png" /> </Link></li>
                            <li><Link to="/about"><img src="src/public/images/aboutUs04.png" /> </Link></li>
                            <div className="clearfix"></div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}