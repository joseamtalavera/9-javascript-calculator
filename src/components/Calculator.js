import React, { useState } from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

const Calculator = () => {
    const[display, setDisplay] = useState('0');


    const handleButtonClick = (buttonName) => {
        
        if(buttonName === 'AC') {
            setDisplay('0');
        } else if (buttonName === '=') {
            try{
                const result = evaluateExpression(display);
                setDisplay(String(result));
            } catch(error) {
                console.error('Error: ', error);
                setDisplay('Error');
            }
        } else {
            setDisplay((prevDisplay) => {
                const updatedDisplay = prevDisplay === '0' ? buttonName : prevDisplay + buttonName;
                return updatedDisplay;
                }
            )
        }
        
    };
    
    const evaluateExpression = (expression) => {
        return new Function('return ' + expression)();
    }
    

    return(
        <div className="calculator-container">
            <Display value={display}/>
            <ButtonPanel clickHandler={handleButtonClick} />
        </div>
    )
};

export default Calculator;