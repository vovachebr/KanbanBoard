import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Board.css';
let actions = require("../../actions/BoardActions");

class KanbanBoard extends Component {
    constructor(props){
        super(props);
        this.board = props.board;
    }
    render() {
        return (<div></div>)
    }
}

export default connect(null,actions)(KanbanBoard);