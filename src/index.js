import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import makeStore from './store';

import './index.css';
import App from './App';

export const store = makeStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
