import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openDialog, closeDialog } from "redux-dialog";

import Alert from '../Alert';
import TaskType from './TaskType';
import Labels from './Labels';
import './NewTask.css';

let actions = require("../../actions/NewTaskActions");

class NewTask extends Component {
    constructor(props){
        super(props);
        this.boards = props.boards;
        this.labels = [];
        this.description = "";
        this.taskName = "";
    }
    render() {
        return (<div className="card row" id="newTaskCard">
        <Alert appElement={document.getElementById('root')}/>
        <div className="col s6">
            <div className="input-field inline">
            <label htmlFor="taskName">Task name</label>
            <input type="text" id="taskName" maxLength="100" required
            onChange={(e)=> {this.taskName = e.target.value; e.target.parentElement.classList.remove("error");}}/>
            </div>
            <br/>
            <div className="input-field inline">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" maxLength="100" required
                onChange={(e)=> {this.description = e.target.value; e.target.parentElement.classList.remove("error");}}/>
            </div>
            <br/>
            <div className="input-field inline">
                <label htmlFor="employee">Employee</label>
                <input type="text" id="employee" maxLength="100"/>
            </div>
        </div>
        <div className="col s6">
        <label>Choose priority</label>
            <select className="browser-default">
                <option value="minor">Minor</option>
                <option value="normal">Normal</option>
                <option value="major">Major</option>
            </select>
            <br/>
            <TaskType/>
            <br/>
            <label>Choose board</label>
            <select className="browser-default">
                {this.loadBoards()}
            </select>
        </div>
        <Labels updatelabelsCallback={this.updatelabelsCallback.bind(this)} labels={this.labels}/>
        <button className="waves-effect waves-light btn right"
        onClick={()=>this.tryCreateTask()}>Create task</button>
    </div>)
    }

    loadBoards(){
        let options = [];
        for (let i = 0; i < this.boards.length; i++) {
            const board = this.boards[i];
            options.push(<option value={board.id} key={board.id}>{board.name}</option>);
        }
        return options;
    }
    updatelabelsCallback(labels){
        this.labels = labels;
        console.log(labels);
    }

    tryCreateTask(){
        let isValid = this.validateForm();
        if (isValid){
            //добавить задачу на доску
            //редирект на доску
        }
        else{
            this.props.openDialog("Alert");
            setTimeout(()=>this.props.closeDialog("Alert"),5000);
        }
    }

    validateForm(){
        let isValid = true;
        if(!this.description.length){
            isValid = false;
            document.getElementById("description").parentElement.classList.add("error");
        }
        if (!this.taskName.length){
            isValid = false;
            document.getElementById("taskName").parentElement.classList.add("error");
        }

        return isValid;
    }
}

const mapStateToProps = state => {return {boards:state.homeReducer.boards,task:state.newTaskReducer, dialog: state.dialogReducer}};
const mapDispatchToProps = dispatch => {return {addTask:(task)=>dispatch(actions.addTask(task)),
    openDialog:(name)=>dispatch(openDialog(name)),
    closeDialog:(name)=>dispatch(closeDialog(name)),
}}

export default connect(mapStateToProps,mapDispatchToProps)(NewTask);

//bug_report
//extension
//label