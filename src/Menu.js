import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu(props) {
    const { onMenuItemClicked, selectedMenuItem } = props;

    return (
        <div className="Menu--container">
            <MenuItem
                text="BASIC FEATURES"
                isSelected={selectedMenuItem === 0}
                onClick={onMenuItemClicked(0)}
            />
            <MenuItem
                text="PREMIUM BENEFITS"
                isSelected={selectedMenuItem === 1}
                onClick={onMenuItemClicked(1)}
            />
            <MenuItem
                text="FAQ"
                isSelected={selectedMenuItem === 2}
                onClick={onMenuItemClicked(2)}
            />
            <MenuItem
                text="CONTACT"
                isSelected={selectedMenuItem === 3}
                onClick={onMenuItemClicked(3)}
            />
            <MenuItem
                text="PRIVACY POLICY"
                isSelected={selectedMenuItem === 4}
                onClick={onMenuItemClicked(4)}
            />
        </div>
    );
}

export default Menu;
