let reducer = function(state = [], action) {
    switch (action.type) {
      case "CREATE_TASK":
        let column = action.board.columns.find((b)=>b.name === "TODO");
        column.tasks.push(action.task);
        return {...state};
    default:
        return state;
    }
    
}
export default reducer;