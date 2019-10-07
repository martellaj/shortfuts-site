import React, { useState } from "react";
import "./App.css";
import MenuItem from "./MenuItem";

function App() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const onMenuItemClicked = index => {
        return () => setSelectedMenuItem(index);
    };

    return (
        <div className="container">
            <div className="menu column">
                <MenuItem text="option 0" onClick={onMenuItemClicked(0)} />
                <MenuItem text="option 1" onClick={onMenuItemClicked(1)} />
                <MenuItem text="option 2" onClick={onMenuItemClicked(2)} />
            </div>
            <div className="content column">
                MenuItem {selectedMenuItem} selected
            </div>
        </div>
    );
}

export default App;
