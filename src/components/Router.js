import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../screens/Home'
import RegistertCandidate from '../screens/RegisterCandidate'
import SearchUserGithub from '../screens/SearchUserGithub'
import Error from '../screens/Error'
import Header from './util/Header'
import NavigationBar from './navigation/NavigationBar';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Header/>
            <NavigationBar></NavigationBar>
                <Switch>
                   <Route exact path="/" component={Home}/>
                   <Route exact path="/register" component={RegistertCandidate}/>
                   <Route exact path="/search" component={SearchUserGithub}/>
                   <Route component={Error}/>
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router;