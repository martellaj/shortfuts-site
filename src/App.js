import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Content from "./Content";

function App() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const onMenuItemClicked = index => {
        return () => setSelectedMenuItem(index);
    };

    return (
        <div className="container">
            <Menu onMenuItemClicked={onMenuItemClicked} />
            <Content selectedMenuItem={selectedMenuItem} />
        </div>
    );
}

export default App;
