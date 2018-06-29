import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './containers/Home';
import Introduce from './containers/Introduce';
import Write from './containers/WriteIntroduce';
export default class App extends Component{
    render(){
        return (
        <Router>
            {/*路由定义*/}
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/introduce" component={Introduce}></Route>
                <Route path="/write" component={Write}></Route>
            </Switch>
        </Router>
        )
    }
}
