import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";

function App() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const onMenuItemClicked = index => {
        return () => setSelectedMenuItem(index);
    };

    return (
        <div className="container">
            <Menu onMenuItemClicked={onMenuItemClicked} />
            <div className="content column">
                MenuItem {selectedMenuItem} selected
            </div>
        </div>
    );
}

export default App;
