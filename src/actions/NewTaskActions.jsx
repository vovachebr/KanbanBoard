function createTask (task, board) {
    return {
        type: "CREATE_TASK",
        task,
        board
    }
};
export { createTask };