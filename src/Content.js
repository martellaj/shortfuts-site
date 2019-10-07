import React from "react";
import "./Content.css";
import FeatureCard from "./FeatureCard";

function Content(props) {
    const getContentTitle = selectedMenuItem => {
        switch (selectedMenuItem) {
            case 0:
                return "Basic Features";
            case 1:
                return "Premium Features";
            case 2:
                return "FAQ";
            default:
                return "Contact";
        }
    };

    const getContent = selectedMenuItem => {
        switch (selectedMenuItem) {
            case 0:
                return [<FeatureCard />, <FeatureCard />];
            case 1:
                return [
                    <FeatureCard />,
                    <FeatureCard />,
                    <FeatureCard />,
                    <FeatureCard />
                ];
            case 2:
                return [<FeatureCard />];
            default:
                return [<FeatureCard />];
        }
    };

    return (
        <div className="Content--container">
            <h2 className="Content--title">
                {getContentTitle(props.selectedMenuItem)}
            </h2>
            <div className="Content--content">
                {getContent(props.selectedMenuItem)}

                {/* Spacing block */}
                <div style={{ height: "24px" }}></div>
            </div>
        </div>
    );
}

export default Content;
