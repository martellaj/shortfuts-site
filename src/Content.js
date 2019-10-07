import React from "react";
import "./Content.css";

function Content(props) {
    return (
        <div className="Content--container">
            MenuItem {props.selectedMenuItem} selected
        </div>
    );
}

export default Content;
