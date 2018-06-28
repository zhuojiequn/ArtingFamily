import React,{Component} from 'react';
import './banner.scss';
import '../public/scss/base.scss';

export default class Banner extends Component{
    render(){
        return(
            <div className="banner">
                <img src="src/public/images/banner.jpg" />
                <div className="mark"></div>
                <div className="aboutUs">
                    <div className="content">
                        <span>关于我们</span>
                        <p>
                            虽然文学也属於艺术,但由於文学过於庞大,通常将文学单独提出,再提到艺术一般不会包括文学
                            .研究艺术的学科是艺术学. 关於艺术与美术的争议在中文世界中,艺术与美术常常混为一谈,特别在教育系统部
                            分也常常出现争议,有的时候造成了学艺术的学生产生相当的困惑
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}