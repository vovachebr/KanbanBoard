import React, { Component } from 'react';
import { connect } from 'react-redux';

let actions = require("../../actions/ColumnActions");

class TaskSettings extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<div>
            <span>TaskSettings</span>   
        </div>)
    }

}

export default connect(null,actions)(TaskSettings);