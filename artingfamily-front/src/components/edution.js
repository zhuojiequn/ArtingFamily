import React,{Component} from 'react';
import '../public/scss/base.scss';
import './edution.scss';
export default class Edution extends Component{
    render(){
        return(
            <div className="edution container">
                <div className="edution-l">
                    <h3>教育模式</h3>
                    <div className="artingPic">
                        <img src="src/public/images/arting.png" />
                    </div>
                    <div className="clearfix"></div>
                    <a className="vedioOnlilne"><img src="src/public/images/edutionMark.png"/> 线上视频
                    </a>
                    <a className="course"> <img src="src/public/images/edutionMark.png"/>线下课程</a>
                </div>
                <div className="edution-r">
                    <p>本课程系统讲述陶瓷艺术与陶瓷技术对中国及世界物质文化生活的重大影响，
                        以及对人类精神文明的长期陶冶。分别从陶瓷原料、陶瓷鉴赏、中外陶瓷贸易与文化交流
                        等方面进行了专题讲授。希望通过系列的介绍与刻画，能让广大学习者从陶瓷的历史背景和审
                        美特点等方面更整体的认识中国陶瓷文化的无穷魅力!</p>
                    <p>
                    说到瓷砖，我们不得不说下佛山瓷砖。佛山是国内具有一定知名度的瓷砖出产地，不仅佛山的瓷砖品牌多，
                    款式花样也多，所以有许多人在进行家居装修时直接亲自跑去佛山挑选自己喜欢的瓷砖。但是如今的陶瓷行业,
                    陶瓷品牌鱼龙混杂,让很多消费者不知从何下手
                    </p>
                </div>
            </div>
        )
    }
}