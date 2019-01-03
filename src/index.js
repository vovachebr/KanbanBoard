import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from "./registerServiceWorker";
import { loadState,saveState } from "./store"
import reducer from './reducers/main';

import './index.css';
import App from './App';

const initialState = {homeReducer: 
    {boards :
        [{id:1, name:"FirstBoard", created: new Date(2018,5,4),updated: new Date(2018,5,4), columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]},
        {id:2, name:"SecondBoard", created: new Date(2017,6,14),updated: new Date(2017,6,14),columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]},
        {id:3, name:"ThirdBoard", created: new Date(2018,0,11),updated: new Date(2018,0,11),columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]},
        {id:4, name:"FourthBoard", created: new Date(2016,10,25),updated: new Date(2016,10,25),columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]},
        {id:5, name:"FifthBoard", created: new Date(2018,7,6),updated: new Date(2018,7,6),columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]}]
    }
};

const store = createStore(reducer,loadState() || initialState);
store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();