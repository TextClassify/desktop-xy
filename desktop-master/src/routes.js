import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import Home from './components/Home/Home';
import Add_text from './components/Add/Add_text'
import Search from './components/Search/Search'
import Add_URL from './components/Add/Add-URL'
import Add_editor from './components/Add/Add_editor'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/add_text" component={Add_text}/>
        <Route path="/search" component={Search}/>
        <Route path="/add_URL" component={Add_URL}/>
        <Route path='./add_editor' component={Add_editor}/>
    </Route>
);

export default routes;