import React,{Component} from 'react';
import './excellent.scss';

export default class Excellent extends Component{
    componentDidMount(){
        $(function() {
            $('#main ul li').hover(function(){
                    $(this).stop(true).animate({width:400}).siblings('li').stop(true).animate({width:160});
                    $(this).find('.des').hide();
            },function(){
                    $('#main ul li').stop(true).animate({width:150});
                    $(this).find('.des').show();
            })
         });
    }
    render(){
        var picArr = [];
        for(var i = 1;i < 7; i ++){
            picArr.push({
                background:`url(src/public/images/${i}.jpg) center`
            })
        }
        return(
            <div className="excellent">
                <div id="main">
                    <ul>
                        <li>
                            <div className="des"><h4>园林酒店</h4></div>
                            <div style={picArr[1]}></div>
                        </li>
                        <li>
                            <div className="des"><h4>设计师酒店</h4></div>
                            <div style={picArr[2]}></div>
                        </li>
                        <li>
                            <div className="des"><h4>青年旅社</h4></div>
                            <div style={picArr[3]}></div>
                        </li>
                        <li>
                            <div className="des"><h4>特色客栈</h4></div>
                            <div style={picArr[4]}></div>
                        </li>
                    </ul>
                </div>
                <h3>优秀作品</h3>

            </div>
        )
    }
}