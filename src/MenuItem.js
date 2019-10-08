import React from "react";
import "./MenuItem.css";

function MenuItem(props) {
    return (
        <div
            className={`MenuItem--container ${props.isSelected &&
                "MenuItem--selected"}`}
            onClick={props.onClick}
        >
            <span className="MenuItem--text">{props.text}</span>
        </div>
    );
}

export default MenuItem;
