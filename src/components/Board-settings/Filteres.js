import React, { Component } from 'react';

import './BoardSettings.css';

class Filteres extends Component {
    constructor(props){
        super(props);
        this.filteres = props.currentFilteres || [];
        this.update = props.updateFilteres;
        this.isPropertyDropDownShowen = true;
        this.filterValueElement = <input className="col s3" placeholder="name" onInput={
            (e)=>this.updateCreateFilterFunction(e.target.value)}/>;
        this.createFilterName = "";
        this.createFilterType = "name";
        this.createFilterFunction = (t)=>t.name.includes("");
    }
    render() {
        return (<div id="filterBlock">
                <button className="waves-effect waves-light btn left"
                    onClick={() => {
                        this.isPropertyDropDownShowen = !this.isPropertyDropDownShowen;
                        this.filterValueElement = <input className="col s3" placeholder="name" onInput={
                            (e)=>this.updateCreateFilterFunction(e.target.value)}/>; 
                        this.forceUpdate()}
                    }>Create filter</button>
                <div className="filterProperties col s12">
                    { this.isPropertyDropDownShowen ? this.showPropertyDropDown() : null}
                    { this.isPropertyDropDownShowen ? this.filterValueElement : null}
                    { this.isPropertyDropDownShowen ? <div className="input-field inline col s3">
                        <input id="filterName" type="text" maxLength="25" onInput={(e)=>this.createFilterName = e.target.value}/>
                        <label htmlFor="filterName" >Filter name</label></div> : null}
                    { this.isPropertyDropDownShowen ? <button className="waves-effect waves-light btn left"
                    onClick={() => this.tryAddFilter()}>Apply</button> : null}
                    </div>
                <div className="filteresList col s4">
                    {this.renderFilteres()}    
                </div>
                </div>)
    }

    renderFilteres(){
        let filteres = [];
        for (let i = 0; i < this.filteres.length; i++) {
            const filter = this.filteres[i];
            filteres.push(<div key={filter.name}>{filter.name}<i className="small material-icons right" onClick={(e)=> 
                this.deleteFilter(filter.name)}
            >delete_forever</i></div>);
        }
        return filteres;
    }

    deleteFilter(name){
        this.filteres = this.filteres.filter((f)=> f.name !== name);
        this.update(this.filteres);
    }

    showPropertyDropDown(){
        return(
        <select className="browser-default col s3" onChange={(e)=>{
                this.createFilterType = e.target.value; 
                this.showFilterValue(e.target.value); 
                this.forceUpdate();
            }}>
            <option value="name">Name</option>
            <option value="description">Description</option>
            <option value="employee">Employee</option>
            <option value="labelName">Label name</option>
            <option value="priority">Priority</option>
            <option value="type">Type</option>
        </select>
        );
    }
    showFilterValue(value){
        if(value === "priority"){
            this.filterValueElement = 
            <select className="browser-default col s3" onChange={
                (e)=>this.updateCreateFilterFunctionDropDown(e.target.value)}>
                <option value="minor">Minor</option>
                <option value="normal">Normal</option>
                <option value="major">Major</option>
            </select>;
            this.updateCreateFilterFunctionDropDown("minor");
        }
        else if (value === "type"){
            this.filterValueElement = 
            <select className="browser-default col s3" onChange={
                (e)=>this.updateCreateFilterFunctionDropDown(e.target.value)}>
                <option value="feature">Feature</option>
                <option value="defect">Defect</option>
                <option value="documentation">Documentation</option>
                <option value="edit">Edit</option>
            </select>;
            this.updateCreateFilterFunctionDropDown("feature");
        }
        else{
            this.filterValueElement = <input className="col s3" placeholder={value} onInput={
                (e)=>this.updateCreateFilterFunction(e.target.value)}/>
            this.updateCreateFilterFunction(this.filterValueElement.value ? this.filterValueElement.value : "");
        }
    }
    tryAddFilter(){
        let names = this.filteres.map((f)=>f.name);
        if(!this.createFilterName || names.includes(this.createFilterName)){
            this.update(false);
        }else{
             console.log(this.createFilterFunction);
             this.filteres.push({name: this.createFilterName, filter: this.createFilterFunction});
             this.update(this.filteres);
             this.forceUpdate();
        }
    }
    updateCreateFilterFunction(value){
        this.createFilterFunction = new Function( 't', `return t[${this.createFilterType}].filter(t[${this.createFilterType}].includes(${value}))`);
        console.log(this.createFilterFunction);
    }
    updateCreateFilterFunctionDropDown(value){
        this.createFilterFunction = new Function( 't', `return t[${this.createFilterType}].filter(t[${this.createFilterType}] === ${value})`);
        console.log(this.createFilterFunction);
    }
}

export default Filteres;