import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {DashboardPage} from 'components'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/dashboard" component={DashboardPage} />
                </div>
            </Router>
        );
    }
}

export default App;
