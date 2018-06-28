import React,{Component} from 'react';
import './excellent.scss';

export default class Excellent extends Component{
    componentDidMount(){
        $(function() {
            $('#main ul li').hover(function(){
                    $(this).stop(true).animate({width:250}).siblings('li').stop(true).animate({width:160});
                    $(this).find('.des').hide();
            },function(){
                    $('#main ul li').stop(true).animate({width:150});
                    $(this).find('.des').show();
            })
         });
    }
    render(){
        var picArr = [];
        for(var i = 0;i < 4; i ++){
            picArr.push({
                background:`url(src/public/images/zuoping${i+1}.png) center`
            })
        }
        return(
            <div className="excellent container">
                <div id="main">
                    <ul>
                        <li>
                            <div className="des"><h4></h4></div>
                            <div style={picArr[0]}></div>
                        </li>
                        <li>
                            <div className="des"><h4></h4></div>
                            <div style={picArr[1]}></div>
                        </li>
                        <li>
                            <div className="des"><h4></h4></div>
                            <div style={picArr[2]}></div>
                        </li>
                        <li>
                            <div className="des"><h4></h4></div>
                            <div style={picArr[3]}></div>
                        </li>
                    </ul>
                </div>
                <span className="doMark">
                    <img src="src/public/images/jiantou1.png" />
                </span>
                <h3>优秀作品</h3>

            </div>
        )
    }
}