function updateBoardName (board,name) {
    return {
        type: "UPDATE_BOARD_NAME",
        board,
        name
    }
};

function deleteColumn (board,columnName) {
    return {
        type: "DELETE_COLUMN",
        board,
        columnName
    }
};

function createNewColumn (board,columnName) {
    return {
        type: "CREATE_COLUMN",
        board,
        columnName
    }
};

export { updateBoardName,deleteColumn,createNewColumn };
