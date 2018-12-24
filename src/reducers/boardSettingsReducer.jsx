let reducer = function(state = [], action) {
    switch (action.type) {
      case "UPDATE_BOARD_NAME":
        action.board.name = action.name;
        action.board.updated = new Date();
        return {board:action.board};
      case "DELETE_COLUMN":
        action.board.columns.splice(action.board.columns.findIndex((c)=>c.name===action.columnName),1);
        action.board.updated = new Date();
        return {board:action.board};
      case "CREATE_COLUMN":
        let newId = Math.max.apply(Math,action.board.columns.map(e => e.id))+1;
        action.board.columns.push({id:newId, name:action.columnName});
        action.board.updated = new Date();
        let board = action.board;
        return Object.assign({},state,{board: board});
        //return {board:action.board};
      default:
        return state;
    }
  }
  export default reducer;