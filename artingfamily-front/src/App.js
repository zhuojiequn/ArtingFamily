import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './containers/Home';
export default class App extends Component{
    render(){
        return (
        <Router>
            {/*路由定义*/}
            <Switch>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
        )
    }
}
