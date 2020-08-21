import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Contact } from './components';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/about" component={About} />

            <Route exact path="/contact" component={Contact} />
        </Switch>
    );
};