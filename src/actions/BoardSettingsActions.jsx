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

function updateFilteres (board,filteres) {
    return {
        type: "UPDATE_FILTERES",
        board,
        filteres
    }
};

export { updateBoardName,deleteColumn,createNewColumn,updateFilteres };
