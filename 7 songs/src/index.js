import React from 'react';
import ReactDOM from 'react-dom';
//curly braces because these are named exports not default
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, document.querySelector('#root'));