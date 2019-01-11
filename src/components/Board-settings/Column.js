import React, { Component } from 'react';
import { connect } from 'react-redux';

let actions = require("../../actions/BoardSettingsActions");

class Column extends Component {
    constructor(props){
        super(props);
        this.board = props.board;
    }
    render() {
        //make "TODO" undeliteble
        return (<div class="column">{this.props.name} 
        {this.props.name !== "TODO" ? <i className="small material-icons right" onClick={(e)=> 
            this.props.deleteColumn(this.board, this.props.name)}
        >delete_forever</i> : null}</div>)
    }
}

const mapStateToProps = state => {return {state:state.boardSettingsReducer}};

export default connect(mapStateToProps,actions)(Column);