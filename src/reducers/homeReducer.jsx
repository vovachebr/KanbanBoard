let reducer = function(state = [], action) {
  let boards = state.boards;
  switch (action.type) {
    case "SET_INITIAL_BOARDS":
      state.boards = action.boards;
      return Object.assign(state, {boards:action.boards});
    case "ADD_BOARD":
      let newId = Math.max.apply(Math,boards.map(e => e.id))+1;
      let newBoard = {name:action.name};
      newBoard.created = new Date();
      newBoard.updated = new Date();
      newBoard.columns = [{id:1,name:"TODO"},{id:2,name:"In progress"},{id:3,name:"Done"}];
      newBoard.filteres = [{name:"For standart employee",filter:(t)=>t}];
      newBoard.id = newId;
      boards.push(newBoard);
      //state.boards.push(action.board);
      return Object.assign(state, {boards:boards});
//      return {boards:state.boards};
    case "DELETE_BOARD":
      boards.splice(boards.findIndex((b)=>b.id===action.id),1);
      //return {boards:state.boards};
      return Object.assign(state, {boards:boards});
    default: 
      return state;
  }
}
export default reducer;