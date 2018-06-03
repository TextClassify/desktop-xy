import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Add_text from './components/Add/Add_text';
import Search from './components/Search/Search';
import registerServiceWorker from './registerServiceWorker';
import RoutesApp from './routes';
import Add_URL from './components/Add/Add-URL';
import Add_editor from './components/Add/Add_editor';

ReactDOM.render((
    <Router history={browserHistory}>
        {RoutesApp}
    </Router>
), document.getElementById('root'));
registerServiceWorker();
