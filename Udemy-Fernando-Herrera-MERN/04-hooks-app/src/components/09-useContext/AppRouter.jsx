import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Nabvar } from './Nabvar';
import { NotFound } from './NotFound';
export const AppRouter = () => {
    return (
        <Router>
            <>
                <Nabvar />
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/about" component={ AboutPage } />
                    <Route exact path="/login" component={ LoginPage } />
                    <Route component={NotFound} />
                </Switch>
            </>
        </Router>
    )
}
