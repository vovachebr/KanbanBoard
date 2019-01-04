let reducer = function(state = [], action) {
    switch (action.type) {
      case "CREATE_TASK":
       
        return {...state};
    default:
        return state;
    }
    
}
export default reducer;