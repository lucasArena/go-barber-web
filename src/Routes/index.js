import React from 'react';
import { Switch, Router } from 'react-router-dom';

import Route from './route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import history from '../services/history';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Signin} />
                <Route path="/register" component={Signup} />

                <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route path="/profile" component={Profile} isPrivate />
            </Switch>
        </Router>
    );
}
