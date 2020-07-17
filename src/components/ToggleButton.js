import React from 'react';
import '../ToggleButton.css';

const ToggleButton = (props) => {
    return (
        <button className="toggle-button" onClick={props.toggle}>
            <div className="toggle-line" />
            <div className="toggle-line"/>
            <div className="toggle-line"/>
        </button>
    )
}

export default ToggleButton;