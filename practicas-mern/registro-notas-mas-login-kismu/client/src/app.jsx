import React , { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {
    render() {
        return (
            <h1>Works</h1>
        )
    }
}

const appComponent = connect()(App);

export { appComponent as App  };