import React from "react";

const Display = ({value}) => {


    return(
        <div className="display-wrapper">
        <div className="display-container" id="display">
            {value}
            </div>
        </div>
    );
};





export default Display;