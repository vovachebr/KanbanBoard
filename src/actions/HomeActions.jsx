function addBoard (name) {
    return {
        type: "ADD_BOARD",
        name
    }
};

function deleteBoard (id) {
    return {
        type: "DELETE_BOARD",
        id
    }
};

function setInitialBoards (state) {
    return {
        type: "SET_INITIAL_BOARDS",
        state
    }
};

export { addBoard, deleteBoard,setInitialBoards };