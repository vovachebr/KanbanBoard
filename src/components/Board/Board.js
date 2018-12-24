import React, { Component } from 'react';
import { connect } from 'react-redux';


import Filteres from './Filteres';
import KanbanBoard from './KanbanBoard';
import './Board.css';
let boardActions = require("../../actions/BoardActions");

class Board extends Component {
    constructor(props){
        super(props);
        this.board = props.boards.find((b)=>b.id===+props.match.params.id);
        
    }
    render() {
        if(!this.board){
            this.props.history.push('/notfound');
            return (<div></div>);
        }
        return (<div>
                    <h2>{this.board.name}</h2>
                    <Filteres filteres={this.board.filteres}/>
                    <KanbanBoard board={this.board}/>
                </div>);
    }
}

const mapStateToProps = state => {return {boards:state.homeReducer.boards,boardReducer:state.boardReducer}};

export default connect(mapStateToProps,boardActions)(Board);