import React from "react";
import "./Content.css";
import FeatureCard from "./FeatureCard";

function Content(props) {
    const getContentTitle = selectedMenuItem => {
        switch (selectedMenuItem) {
            case 0:
                return "BASIC FEATURES";
            case 1:
                return "PREMIUM FEATURES";
            case 2:
                return "FAQ";
            default:
                return "CONTACT";
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
            {getContent(props.selectedMenuItem)}
        </div>
    );
}

export default Content;
