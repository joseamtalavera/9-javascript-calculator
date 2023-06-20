import React from "react";


const Button = ({name, clickHandler, id}) => {

    return(
        <button
        className="calc-button"
        id={id}
        onClick={()=>clickHandler(name)} 
        >
            {name}
        </button>
    )
}
export default Button;