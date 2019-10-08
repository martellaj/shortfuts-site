import React from "react";
import "./FeatureCard.css";

function FeatureCard(props) {
    const { title = "None", description, demo } = props;

    return (
        <div className="FeatureCard--container">
            <div className="FeatureCard--header">
                {title}
                {demo && (
                    <a
                        style={{ marginLeft: "12px" }}
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        FEATURE DEMO
                    </a>
                )}
            </div>
            <div className="FeatureCard--description">{description}</div>
        </div>
    );
}

export default FeatureCard;
