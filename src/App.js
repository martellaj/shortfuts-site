import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Content from "./Content";
import Header from "./Header";

function App() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    const onMenuItemClicked = index => {
        return () => setSelectedMenuItem(index);
    };

    return (
        <div className="container">
            <Header />
            <div className="body">
                <Menu
                    onMenuItemClicked={onMenuItemClicked}
                    selectedMenuItem={selectedMenuItem}
                />
                <Content selectedMenuItem={selectedMenuItem} />
            </div>
        </div>
    );
}

export default App;
