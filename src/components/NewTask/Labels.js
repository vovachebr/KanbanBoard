import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openDialog, closeDialog } from "redux-dialog";
import Alert from '../Alert';


class Labels extends Component {
    constructor(props){
        super(props);
        this.updatelabelsCallback = props.updatelabelsCallback;
        this.labels = props.labels;
    }
    render() {
        return (
        <div id="labels">
            <Alert appElement={document.getElementById('root')}/>
            <div className="input-field inline col s6">
            <label htmlFor="labelName">Label name</label>
            <input type="text" id="labelName" maxLength="100"
            onBlur={(e)=> {this.tryAddLabel(e.target.value); e.target.value = ""}}
            onKeyPress={(e)=> {if(e.key === "Enter") {this.tryAddLabel(e.target.value); e.target.value = ""}}}/>
            </div>
            <div className="col s10">
                {this.renderLabels()}
            </div>
        </div>)
    }
    renderLabels(){
        let labels = [];
        for (let i = 0; i < this.labels.length; i++) {
            const label = this.labels[i];
            labels.push(<div key={label} className="collection-item">{label}<i className="small material-icons right" onClick={(e)=> 
                this.deleteLabel(e)}
            >delete_forever</i></div>);
        }
        return labels;
    }
    deleteLabel(e){
        this.labels = this.labels.filter((l)=>l!=e.target.previousSibling.textContent);
        this.updatelabelsCallback(this.labels);
        this.forceUpdate();
    }

    tryAddLabel(name){
        if(this.labels.includes(name) || name.length < 3){
            this.props.openDialog("Alert");
            setTimeout(()=>this.props.closeDialog("Alert"),5000);
        }
        else{
            this.labels.push(name);
            this.updatelabelsCallback(this.labels);
            this.forceUpdate();
        }
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {return {
    openDialog:(name)=>dispatch(openDialog(name)),
    closeDialog:(name)=>dispatch(closeDialog(name)),
}}

export default connect(mapStateToProps,mapDispatchToProps)(Labels);