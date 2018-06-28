import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../public/scss/base.scss';
import './footer.scss';

export default class Footer extends Component{
    render(){
        return(
            <div>
               <div className="footer_top">
                  <div className="container">
                    <div className="footer_img">
                       <img src="src/public/images/log.PNG" />
                    </div>
                    <div className="footer_lx">
                        <p>热线：400-123456</p>
                        <p>地址：浙江省杭州市九堡镇西关街道</p>
                    </div>
                    <div className="footer_lj">
                        <ul>
                            <li className="first_li"><a href="#">关于我们</a></li>
                            <li><a href="#">加入我们</a></li>
                            <li><a href="#">报名渠道</a></li>
                            <li><a href="#">留言评论</a></li>
                            <li><a href="#">线上培训</a></li>
                        </ul>
                    </div>
                  </div>
               </div>
               <div className="footer_down">
                    <p className="text-center">ICP备案号：12435454641</p>
               </div>
            </div>
        )
    }
}