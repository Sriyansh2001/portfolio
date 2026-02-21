import React, { useEffect } from "react";
import "./header.scss";
import { formattedDateAndTime } from "Utilities/dateUtilities";

const Header: React.FC = () => {
    const [now, setNow] = React.useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    })

    return (
        <div className="header-main">
            <div>Sriyansh's Portfolio</div>
            <div className="mid-box">{formattedDateAndTime(now)}</div>
            {/* Add music icon,  */}
            <div className="last-box">Placeholder</div>
        </div>
    );
};

export default Header;