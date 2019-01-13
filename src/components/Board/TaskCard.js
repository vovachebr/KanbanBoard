import React, { Component } from 'react';
import { connect } from 'react-redux';

let actions = require("../../actions/ColumnActions");

class TaskCard extends Component {
    constructor(props){
        super(props);
        this.task = props.task;
        console.log(this.task);
    }
    render() {
        return (<div>
            <span>{this.task.name}</span>   
        </div>)
    }

}

export default connect(null,actions)(TaskCard);