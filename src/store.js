import {createStore} from 'redux';
import reducer from './reducers/main';

const store = createStore(reducer);

store.dispatch({type:"SET_INITIAL_BOARDS", boards :
    [{id:1, name:"FirstBoard", created: new Date(2018,5,4),updated: new Date(2018,5,4), columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]},
      {id:2, name:"SecondBoard", created: new Date(2017,6,14),updated: new Date(2017,6,14),columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]},
      {id:3, name:"ThirdBoard", created: new Date(2018,0,11),updated: new Date(2018,0,11),columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]},
      {id:4, name:"FourthBoard", created: new Date(2016,10,25),updated: new Date(2016,10,25),columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]},
      {id:5, name:"FifthBoard", created: new Date(2018,7,6),updated: new Date(2018,7,6),columns:[{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}], filteres:[{name:"For standart employee",filter:(t)=>t}]}]});

export default function makeStore() {
    return store;
}
      