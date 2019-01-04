import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { loadState,saveState } from "./store"
import reducer from './reducers/main';

import './index.css';
import App from './App';

const standartColumns = [{id:1,name:"TODO", tasks:[]},{id:2,name:"In progress", tasks:[]},{id:3,name:"Done", tasks:[]}];
const standartFilteres = [{name:"For standart employee",filter:(t)=>t}];
const initialState = {homeReducer: 
    {boards :
        [{id:1, name:"FirstBoard", created: new Date(2018,5,4).toISOString(),updated: new Date(2018,5,4).toISOString(), columns:standartColumns, filteres:standartFilteres},
        {id:2, name:"SecondBoard", created: new Date(2017,6,14).toISOString(),updated: new Date(2017,6,14).toISOString(),columns:standartColumns, filteres:standartFilteres},
        {id:3, name:"ThirdBoard", created: new Date(2018,0,11).toISOString(),updated: new Date(2018,0,11).toISOString(),columns:standartColumns, filteres:standartFilteres},
        {id:4, name:"FourthBoard", created: new Date(2016,10,25).toISOString(),updated: new Date(2016,10,25).toISOString(),columns:standartColumns, filteres:standartFilteres},
        {id:5, name:"FifthBoard", created: new Date(2018,7,6).toISOString(),updated: new Date(2018,7,6).toISOString(),columns:standartColumns, filteres:standartFilteres}]
    }
};

const store = createStore(reducer,loadState() || initialState);
store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));