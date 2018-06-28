import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About'
export default class App extends Component{
    render(){
        return (
        <Router>
            {/*路由定义*/}
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </Router>
        )
    }
}
