import React, { Component } from 'react';

class TaskType extends Component {
    constructor(props){
        super(props);
        this.showen = "feature";
    }
    render() {
        return (<div><label>Choose task type</label>
            {this.showen === "feature" ? <i className="material-icons">extension</i> : null}
            {this.showen === "defect" ? <i className="material-icons">bug_report</i> : null}
            {this.showen === "documentation" ? <i className="material-icons">help</i> : null}
            {this.showen === "edit" ? <i className="material-icons">mode_edit</i> : null}
            <select className="browser-default" onChange={(e)=>this.change(e)}>
                <option value="feature">Feature</option>
                <option value="defect">Defect</option>
                <option value="documentation">Documentation</option>
                <option value="edit">Edit</option>
            </select></div>)
    }
    change(e){
        this.showen = e.target.value;
        this.forceUpdate();
    }
}

export default TaskType;