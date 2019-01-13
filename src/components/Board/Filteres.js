import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Board.css';
let actions = require("../../actions/BoardActions");

class Filteres extends Component {

    render() {
        return (<div className="filteres"><span>Quick filters:</span>
                <ul>
                {this.addFilteres()}
                </ul>
            </div>)
    }
    addFilteres(){
        let filteres = [];
        for (let i = 0; i < this.props.filteres.length; i++) {
            const filter = this.props.filteres[i];
            const name = filter.name.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(' ').replace(/ /g, '');//Capitalize every first letter
            filteres.push(<li key={i}><input type="checkbox" name={name} id={name} value=""/>
            <label htmlFor={name}>{filter.name}</label></li>);
        }
        return filteres;
    }
}

export default connect(null,actions)(Filteres);