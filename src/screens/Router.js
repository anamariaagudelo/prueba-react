import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../screens/RegisterCandidate/Home';
import RepositoriesCandidate from '../screens/RepositoriesCandidate/RepositoriesCandidate';
import Error from '../screens/Error/ErrorRouter';
import NavigationBar from '../components/UI/Navigation/NavigationBar';
import RegisterCandidate from './RegisterCandidate/RegisterCandidate';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <NavigationBar></NavigationBar>
                <Switch>
                   <Route exact path="/" component={Home}/>
                   <Route exact path="/register" component={RegisterCandidate}/>
                   <Route exact path="/search" component={RepositoriesCandidate}/>
                   <Route component={Error}/>
                </Switch>

            </BrowserRouter>
        )
    }
}

export default Router;