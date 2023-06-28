
import React from "react";
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const buttonGroups = [
   
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['AC']
    
  ];

  const numberButtons = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const operatorButtons = ['add', 'subtract', 'multiply', 'divide'];

  return (
    <div className="button-panel">
      {buttonGroups.map((group, index) => (
        <div key={index} className="button-row">
          {group.map((button) => {
            let buttonLabel;

            if (button === 'AC') {
              buttonLabel = 'clear';
            } else if (button === '=') {
              buttonLabel = 'equals';
            } else if (operatorButtons.includes(button)) {
              buttonLabel = button;
            } else if (button === '.') {
              buttonLabel = 'decimal';
            } else {
              buttonLabel = numberButtons[parseInt(button)];
            }

            // Explictly set the id values for the operator buttons

            if(button === '+') {
              return (
                <Button
                  key={button}
                  id="add"
                  name={button}
                  clickHandler={clickHandler}
                    />
              );
            } else if (button === '-') {
              return (
                <Button
                  key={button}
                  id="subtract"
                  name={button}
                  clickHandler={clickHandler}
                    />
              );
            } else if (button === '*') {
              return (
                <Button
                  key={button}
                  id="multiply"
                  name={button}
                  clickHandler={clickHandler}
                    />
              );
            } else if (button === '/') {
              return (
                <Button
                  key={button}
                  id="divide"
                  name={button}
                  clickHandler={clickHandler}
                  />
              );
            } else if(button === 'AC') {
              return (
                <Button
                  key={button}
                  id="clear"
                  name={button}
                  clickHandler={clickHandler}
                  />
              )
            } else {
              return (
              <Button
                key={button}
                id={buttonLabel}
                name={button}
                clickHandler={clickHandler}
              />
            );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;




