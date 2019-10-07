import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu(props) {
    const { onMenuItemClicked } = props;

    return (
        <div className="Menu--container">
            <MenuItem text="option 0" onClick={onMenuItemClicked(0)} />
            <MenuItem text="option 1" onClick={onMenuItemClicked(1)} />
            <MenuItem text="option 2" onClick={onMenuItemClicked(2)} />
        </div>
    );
}

export default Menu;
