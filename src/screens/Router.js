import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../screens/Home/Home'
import SearchUserGithub from '../screens/SearchUserGithub/SearchUserGithub'
import Error from '../screens/Error/ErrorRouter'
import NavigationBar from '../components/UI/Navigation/NavigationBar'
import RegisterCandidate from '../screens/RegisterCandidate/RegisterCandidate';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <NavigationBar></NavigationBar>
                <Switch>
                   <Route exact path="/" component={Home}/>
                   <Route exact path="/register" component={RegisterCandidate}/>
                   <Route exact path="/search" component={SearchUserGithub}/>
                   <Route component={Error}/>
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router;