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


export { addBoard, deleteBoard };