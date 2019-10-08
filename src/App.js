import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./Menu";
import Content from "./Content";
import Header from "./Header";

function App() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const premiumParam = urlParams.get("premium");
        if (premiumParam) {
            setSelectedMenuItem(1);
        }

        const faqParam = urlParams.get("faq");
        if (faqParam) {
            setSelectedMenuItem(2);
        }
    }, []);

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
