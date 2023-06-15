import React from "react";
import Button from './Button';

const ButtonPanel = ({clickHandler}) => {

    const buttonGroups = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['AC']
    ];


    return(
      <div className="button-panel"> 
        {buttonGroups.map((group, index) => (
            <div key={index} className="button-row">
                {group.map((button) => (
                    <Button key={button} name={button} clickHandler={clickHandler} />
                ))}

            </div>
        ))}
      </div> 
    )
}

export default ButtonPanel;