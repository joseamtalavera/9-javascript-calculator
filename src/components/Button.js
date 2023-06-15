import React from "react";


const Button = ({name, clickHandler}) => {

    return(
        <button
        className="calc-button"
        id={name}
        onClick={()=>clickHandler(name)} 
        >
            {name}
        </button>
    )
}
export default Button;