import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskCard from './TaskCard';


let actions = require("../../actions/ColumnActions");

class Column extends Component {
    constructor(props){
        super(props);
        this.column = props.value;
        console.log(this.column);
    }
    render() {
        return (<div>
            <h4>{this.column.name}</h4>
            <ul>
            {this.renderTasks()}
            </ul>
        </div>)
    }

    renderTasks(){
        let tasks = [];
        const tasksCount = this.column.tasks.length;
        for (let i = 0; i < tasksCount; i++) {
            const task = this.column.tasks[i];
            tasks.push(<li key={i}><TaskCard task={task}/></li>);
        }
        return tasks;
    }
}

export default connect(null,actions)(Column);