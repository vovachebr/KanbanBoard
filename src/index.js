import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { loadState,saveState } from "./store"
import reducer from './reducers/main';

import './index.css';
import App from './App';

const standartColumns = [{id:1,name:"TODO", tasks:[]},{id:2,name:"In progress", tasks:[]},{id:3,name:"Done", tasks:[]}];
const testInitialColumns = [
    {id:1,name:"TODO", tasks:[{
        description: "Сделать это задание",
        employee: "",
        id: "feature-1",
        labels: ["задание"],
        name: "Сделать задание",
        numberID: 1,
        priority: "normal",
        type: "feature",
    }]},
    {id:2,name:"In progress", tasks:[
        {
            description: "Сделать вот это задание",
            employee: "",
            id: "feature-2",
            labels: ["миссия"],
            name: "Сделать что-нибудь",
            numberID: 2,
            priority: "normal",
            type: "feature",
        }
    ]},
    {id:3,name:"Done", tasks:[]},
    {id:4,name:"TestColumn", tasks:[]}
];
const standartFilteres = [{name:"For standart employee",filter:(t)=>t}];
const testInitialFilteres = [{name:"For standart employee",filter:(t)=>t},{name:"Нормальные задания",filter:(t)=>t["priority"].filter(t["priority"] === "normal")}];
const initialState = {homeReducer: 
    {boards :
        [{id:1, name:"test board", created: new Date(2018,5,4).toISOString(),updated: new Date(2019,0,8).toISOString(), columns:testInitialColumns, filteres:testInitialFilteres},
        {id:2, name:"board", created: new Date(2017,6,14).toISOString(),updated: new Date(2017,6,14).toISOString(),columns:standartColumns, filteres:standartFilteres},
        {id:3, name:"empty board", created: new Date(2018,0,11).toISOString(),updated: new Date(2018,0,11).toISOString(),columns:standartColumns, filteres:standartFilteres},
        {id:4, name:"can be deleted", created: new Date(2016,10,25).toISOString(),updated: new Date(2016,10,25).toISOString(),columns:standartColumns, filteres:standartFilteres},
        {id:5, name:"not important", created: new Date(2018,7,6).toISOString(),updated: new Date(2018,7,6).toISOString(),columns:standartColumns, filteres:standartFilteres}]
    }
};

const store = createStore(reducer,loadState() || initialState);
store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));