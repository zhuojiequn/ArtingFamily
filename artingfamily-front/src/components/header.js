import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../public/scss/base.scss';
import './header.scss';

export default class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-fixed-top navbar-has-shadow">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse"
                                aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src="src/public/images/logo.png" className="navbar-brand__img" alt="" />
                            </a>
                    </div>
                    {/* 菜单 */}
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav navbar-left">
                            <li><Link className="spacing active" data-track data-track-location='header' to="/">首<span>页</span></Link></li>
                            <li><Link className="spacing" data-track data-track-location='header' to="/">陶<span>瓷</span></Link></li>
                            <li><Link className="spacing" data-track data-track-location='header' to="/">剪<span>纸</span></Link></li>
                            <li><Link className="spacing" data-track data-track-location='header' to="/">书<span>法</span></Link></li>
                            <li><Link data-track data-track-location='header' to="/">报渠道名</Link></li>
                            <li><Link data-track data-track-location='header' to="/">线上培训</Link></li>
                            <li><Link className="spacing" data-track data-track-location='header' to="/">剪<span>纸</span></Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link data-track data-track-location='header' to="/" >登录</Link></li>
                            <li><Link data-track data-track-location='header' to="/"  track-event='Clicked Get Started'>注册</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}