import React,{Component} from 'react';
import './dynamic.scss';
import {Link} from 'react-router-dom';
import   '../public/scss/base.scss';
//动态信息模块
export default class Dynamic extends Component{
    render(){
        var data = [{src:'src/public/images/aboutUs.png',title:'手',content:` 多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字`},
        {src:'src/public/images/aboutUs.png',title:'手',content:` 多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字`},
        {src:'src/public/images/aboutUs.png',title:'手',content:` 多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字`},
        {src:'src/public/images/aboutUs.png',title:'手',content:` 多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字多个竖排文字`}];
        var jsx = [];
        var newContent = [];
        for(var i=0;i<data.length;i++){
            jsx.push(
                <li key={i}>
                <Link to="/">
                    <span className="circle">
                        <img src={data[i].src} />
                    </span>
                    <div className="content clearfix">
                        <h4>{data[i].title}</h4>
                        <div className="con">
                            <p>
                                {data[i].content}
                            </p>
                        </div>
                    </div>
                </Link>
            </li>
            )
        }
        return(
            <div className="dynamic container">
                <h3>造艺动态</h3>
                <ul className="clearfix">
                    {jsx}
                </ul>
            </div>
        )
    }
}