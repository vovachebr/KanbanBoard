import React from 'react';
import reduxDialog from "redux-dialog";

import './Alert.css';
class Alert extends React.Component {
    render() {
		return(<div id="modalAlert"><h1>Wrong input data!<i className="medium material-icons">error</i></h1></div>)
    }
}

export default reduxDialog({name: "Alert"})(Alert);
