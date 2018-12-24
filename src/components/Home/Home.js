import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openDialog, closeDialog } from "redux-dialog";

import Alert from '../Alert';
import './Home.css';
let actions = require("../../actions/HomeActions");

class Home extends Component {
    constructor(props) {
        super(props);
        this.boards = props.boards || [];
        this.isCreateBoardNameVisible = false;
        this.newBoardName = "";
    }
    
    render() {
        return (
        <div>
            <Alert appElement={document.getElementById('root')}/>
            <div>
            <button className="btn-floating btn-large waves-effect waves-light red left" 
            onClick={()=> {this.isCreateBoardNameVisible = true; this.forceUpdate()} }>
                <i className="material-icons">add</i>
            </button>
            {
            this.isCreateBoardNameVisible ? (
            <div className="createBoardControl">
                <div className="input-field inline left">
                    <input id="boardName" type="text"
                    onChange={
                        (e)=> this.newBoardName = e.target.value
                    }/>
                    <label htmlFor="boardName">Board name</label>
                </div>
                <button className="waves-effect waves-light btn left"
                onClick={()=>this.tryCreateBoard()}>Create new board</button>
            </div>) : null
            }
            </div>
            <table className="striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Date created</th>
                    <th>Date updated</th>
                    <th>Settings</th>
                    <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {this.createTable()}
                </tbody>            
            </table>
        </div>)
    }

    createTable(){
        let table = [];
        let sortedBoards = this.boards.sort((b1,b2)=>b2.updated-b1.updated);
        for (let i = 0; i < this.boards.length; i++) {  
            let board = sortedBoards[i];          
            table.push(
            <tr key={board.id}>
                <td><Link to={`/board/${board.id}`}>{board.name}</Link></td>
                <td>{board.created.toDateString()}</td>
                <td>{board.updated.toDateString()}</td>
                <td><Link to={`/board/${board.id}/settings/`}><i className="small settings material-icons">settings</i></Link></td>
                <td><button onClick={(e) => this.delete(board.id)}><i className="small settings material-icons">remove_circle</i></button></td>
            </tr>)
        }
        return table;
    }

    delete(id){
        this.props.deleteBoard(id);
        this.forceUpdate()
    }

    tryCreateBoard(){
        let newName = this.newBoardName;
        if(!newName || newName.length<=3 || this.boards.map(b => b.name).includes(newName)){
            this.props.openDialog("Alert");
            setTimeout(()=>this.props.closeDialog("Alert"),5000);
            return;
        }
        
        this.props.addBoard(newName);
        let id = this.props.boards.find((b)=>b.name === newName).id
        this.props.history.push(`/board/${id}`);
    }
}

const mapStateToProps = state => {return {boards:state.homeReducer.boards, dialog: state.dialogReducer}};
const mapDispatchToProps = dispatch => {return {addBoard:(name)=>dispatch(actions.addBoard(name)),
    deleteBoard:(id)=>dispatch(actions.deleteBoard(id)),
    openDialog:(name)=>dispatch(openDialog(name)),
    closeDialog:(name)=>dispatch(closeDialog(name)),
}}

export default connect(mapStateToProps,mapDispatchToProps)(Home);