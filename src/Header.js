import React from "react";
import "./Header.css";

function Header(prps) {
    return (
        <div className="Header--container">
            <h1>shortfuts</h1>
            <h4>
                shortfuts is a free Chrome extension to help make EA's FIFA
                Ultimate Team web app easier to use by adding keybinds and a few
                extra enhancements. Download the extension from the Chrome Web
                Store{" "}
                <a
                    href="https://bit.ly/shortfuts-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>{" "}
                and browse the features of the application below!
            </h4>
        </div>
    );
}

export default Header;
