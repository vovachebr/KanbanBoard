let reducer = function(state = [], action) {
  let boards = state.boards;
  switch (action.type) {
    case "ADD_BOARD":
      let newId = Math.max.apply(Math,boards.map(e => e.id))+1;
      newId = newId < 1 ? 1 : newId;
      let newBoard = {name:action.name};
      newBoard.created = new Date().toISOString();
      newBoard.updated = new Date().toISOString();
      newBoard.columns = [{id:1,name:"TODO", tasks:[]},{id:2,name:"In progress", tasks:[]},{id:3,name:"Done", tasks:[]}];
      newBoard.filteres = [{name:"For standart employee",filter:(t)=>t}];
      newBoard.id = newId;
      boards.push(newBoard);
      return {...state, boards:boards};
    case "DELETE_BOARD":
      boards.splice(boards.findIndex((b)=>b.id===action.id),1);
      return  {...state, boards:boards};
    default: 
      return state;
  }
}
export default reducer;