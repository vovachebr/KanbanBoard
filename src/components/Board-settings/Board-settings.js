import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openDialog, closeDialog } from "redux-dialog";

import Alert from '../Alert';
import './BoardSettings.css';
import Column from './Column';
import Filteres from './Filteres';

let actions = require("../../actions/BoardSettingsActions");
class BoardSettings extends Component {
    constructor(props){
        super(props);
        this.isAddColumnNameVisible = false;
        this.board = props.boards.find((b)=>b.id===+props.match.params.id);
    }
    render() {
        return (<div className="card row">
                    <Alert appElement={document.getElementById('root')}/>
                    <div className="col s7">
                    <label htmlFor="boardEditName" className="left">Board name:</label>
                    <input type="text" placeholder="Board name" className="left" id="boardEditName" maxLength="100" defaultValue={this.board.name}
                    onBlur={(e)=> e.target.value = this.tryUpdateName(e.target.value)}
                    onKeyPress={(e)=> {if(e.key === "Enter") e.target.value = this.tryUpdateName(e.target.value)}}/>
                    </div>
                    <div className="col s5">
                    <button className="waves-effect waves-light btn left"
                    onClick={()=> {this.isAddColumnNameVisible = true; this.forceUpdate()} }>
                    Add column</button>
                    <div className="placeToColumnName left">
                        {this.isAddColumnNameVisible ? (
                        <div className="input-field inline left">
                        <input id="columnName" type="text" maxLength="25"
                        onBlur={(e)=> e.target.value = this.tryAddColumn(e.target.value)}
                        onKeyPress={(e)=> {if(e.key === "Enter") e.target.value = this.tryAddColumn(e.target.value)}}/>
                        <label htmlFor="columnName">Column name</label>
                        {this.notValidColumn}
                        </div>) : null}
                    </div>
                    </div>
                <div className="col s8"><Filteres currentFilteres={this.board.filteres} updateFilteres={this.updateBoardFilteres.bind(this)}/></div>
                <div className="col s4 columns right">{this.renderColumns()}</div>

                </div>)
    }

    renderColumns(){
        let columns = [];
        for (let i = 0; i < this.board.columns.length; i++) {
            const column = this.board.columns[i];
            columns.push(<Column
                name={column.name} key={i} board={this.board}
                id={column.id}
                moveColumn={this.moveColumn}
                 />);
        }
        return columns
    }

    tryUpdateName(name){
        let names = this.props.boards.map(b => b.name);
        if(!name.length || names.includes(name)){
            this.props.openDialog("Alert");
            setTimeout(()=>this.props.closeDialog("Alert"),5000);
            return this.board.name;
        }
        let result = this.props.updateBoardName(this.board,name);
        this.board = result.board;
        return this.board.name;
    }

    tryAddColumn(name){
        let columns = this.board.columns.map(c => c.name);
        if(name.length<=3 || columns.includes(name) || columns.length>=6){
            this.props.openDialog("Alert");
            setTimeout(()=>this.props.closeDialog("Alert"),5000);
            return name;
        }
        this.props.createNewColumn(this.board,name);
        return name;
    }

    updateBoardFilteres(filteres){
        if(!filteres){
            this.props.openDialog("Alert");
            setTimeout(()=>this.props.closeDialog("Alert"),5000);
        }
        else{
            this.props.updateFilteres(this.board,filteres);
        }
    }
}

const mapStateToProps = state => {return {boards:state.homeReducer.boards, state:state.boardSettingsReducer}};
const mapDispatchToProps = dispatch => {return {createNewColumn:(name)=>dispatch(actions.createNewColumn(name)),
    updateBoardName:(id,name)=>dispatch(actions.updateBoardName(id,name)),
    updateFilteres:(board,filteres)=>dispatch(actions.updateFilteres(board,filteres)),
    openDialog:(name)=>dispatch(openDialog(name)),
    closeDialog:(name)=>dispatch(closeDialog(name)),
}}

export default connect(mapStateToProps,mapDispatchToProps)(BoardSettings);