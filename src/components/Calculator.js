import React, { useState } from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';
import { evaluate } from  'mathjs';

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

                let updatedDisplay;
                if (
                    buttonName === '.' && (prevDisplay.includes('.') || prevDisplay.endsWith('.'))
                    ) {
                        updatedDisplay = prevDisplay;
                    } else if (buttonName === '.' && prevDisplay.match(/[-+*/]$/)) {
                        updatedDisplay = prevDisplay + 0 + buttonName;
               
                } else {
                    updatedDisplay = prevDisplay === '0' ? buttonName : prevDisplay + buttonName;
                }
                return updatedDisplay;
                
                }
            )
        }
        
    };
    
    const evaluateExpression = (expression) => {
        try {
            return evaluate(expression);
        } catch (error) {
            console.error('Error:', error);
            return 'Error';
        }
    }
    

    return(
        <div className="calculator-container">
            <Display value={display}/>
            <ButtonPanel clickHandler={handleButtonClick} />
        </div>
    )
};

export default Calculator;