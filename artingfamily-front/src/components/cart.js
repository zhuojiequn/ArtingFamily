import React,{Component} from 'react';
import {connect} from 'react-redux';
import {cartToolsAction} from '../actions/act-main';

class Cart extends Component{
    render(){ 
        return(
            <h1>cart</h1>
        )
    }
}
const mapStateToprops = (state)=>{
    return {

    }
}
export default connect(
    mapStateToprops,
    {cartToolsAction}
)(Cart);