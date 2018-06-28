import React,{Component} from 'react';
import './aboutBody.scss';
import '../public/scss/base.scss';

export default class AboutBody extends Component{
    render(){
        return(
            <div className="aboutBody container">
                {/*我们的坚持*/}
                <div className="us">
                    <div className="title">
                        <span className="title1">
                            我们的
                        </span>
                        <span className="title2">
                            坚持
                        </span>
                    </div>
                    <ul>
                        <li>
                            <img src="src/public/images/us1.png" />
                            <span>弘扬中国传统艺术文化精髓</span>
                        </li>
                        <li>
                            <img src="src/public/images/us2.png" />
                            <span>弘扬中国传统艺术文化精髓</span>
                        </li>
                        <li>
                            <img src="src/public/images/us3.png" />
                            <span>弘扬中国传统艺术文化精髓</span>
                        </li>
                        <li>
                            <img src="src/public/images/us4.png" />
                            <span>弘扬中国传统艺术文化精髓</span>
                        </li>
                    </ul>
                </div>
                {/* 我们的故事 */}
                <div className="story">
                    <div className="title">
                        <span className="title1">
                            品牌
                        </span>
                        <span className="title2">
                            故事
                        </span>
                    </div>
                    <div className="storyBody">
                        <img src="src/public/images/storyBack.png" />
                        <div className="storyCon">
                            我们的祖先和世界上一些国家和地区,如埃及、印度希腊、波斯、西南亚地区的一些名族，在长期的实践中，
                            发明了陶瓷。陶瓷器件的制作有了近万年的历史，人类自开始懂得制作陶瓷。。。。。
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}