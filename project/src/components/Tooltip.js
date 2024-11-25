import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ children, text, position = "top" }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            {visible && (
                <div className={`tooltip-box tooltip-${position}`}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
