let reducer = function(state = [], action) {
    switch (action.type) {
      case "CREATE_TASK":
        let column = action.board.columns.find((b)=>b.name === "TODO");
        let minId = 0;
        for (let i = 0; i < action.board.columns.length; i++) {
            const column = action.board.columns[i];
            for (let j = 0; j < column.tasks.length; j++) {
                const task = column.tasks[j];
                if(task.numberID > minId)
                    minId = task.numberID;
            }
        }
        minId++;
        action.task.numberID=minId;
        action.task.id=`${action.task.type}-${minId}`;
        column.tasks.push(action.task);
        return {...state};
    default:
        return state;
    }
    
}
export default reducer;