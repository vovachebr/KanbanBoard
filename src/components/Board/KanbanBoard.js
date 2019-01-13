import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Board.css';
import Column from './Column';
import TaskSettings from './TaskSettings';
let actions = require("../../actions/BoardActions");

class KanbanBoard extends Component {
    constructor(props){
        super(props);
        this.board = props.board;
    }
    render() {
        return (<div className="board">
            <ul className="columns">
            {this.renderRows()}
            </ul>
            <TaskSettings/>
        </div>)
    }

    renderRows(){
        let rows = [];
        const columnsLength = this.board.columns.length;
        for (let i = 0; i <columnsLength ; i++) {
            const column = this.board.columns[i];
            rows.push(<li key={i}><Column value = {column}/></li>);
        }
        return rows;
    }
}

export default connect(null,actions)(KanbanBoard);