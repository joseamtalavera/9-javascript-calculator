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

    const numberButtons = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const operatorButtons = ['add', 'subtract', 'multiply', 'divide'];


    return(
      <div className="button-panel"> 
        {buttonGroups.map((group, index) => (
            <div key={index} className="button-row">
                {group.map((button) => {
                  if (button === 'AC') {
                   return (

                    <Button 
                    key={button} 
                    id={button.toLowerCase()}
                    name={button} 
                    clickHandler={clickHandler} 
                    />
                );
                } else if (button === '=') {
                  return (
                    <Button
                      key={button}
                      id='equals'
                      name={button}
                      clickHandler={clickHandler}
                      />
                  );
                } else if (operatorButtons.includes(button)) {
                  return(
                    <Button
                      key={button}
                      id={button}
                      name={button}
                      clickHandler={clickHandler}
                      />
                  );
                } else if (button === '.') {
                  return(
                    <Button
                      key={button}
                      id='decimal'
                      name={button}
                      clickHandler={clickHandler}
                      />
                  );
                } else {
                  return (
                    <Button
                    key={button}
                    id={numberButtons[parseInt(button)]}
                    name={button}
                    clickHandler={clickHandler}
                    />
                  );
                }  
                }
               )}
               </div>
               ))}
 
      </div> 
    )
  }

export default ButtonPanel;