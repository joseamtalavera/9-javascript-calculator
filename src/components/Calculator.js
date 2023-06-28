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


                if (buttonName === '.') {
                    const parts = prevDisplay.split(/[+\-*/]/);
                    const lastNumber = parts[parts.length -1];

                    if (!lastNumber.includes('.') || lastNumber === '') {
                      updatedDisplay = prevDisplay + buttonName;
                    } else {
                      updatedDisplay = prevDisplay;
                    }



                } else if (buttonName.match(/[-+*/]/)) {
                    const lastChar = prevDisplay.slice(-1);
            
                    if (
                      (lastChar.match(/[-+*/]/) && buttonName !== '-') ||
                      (lastChar === '-' && prevDisplay.slice(-2, -1).match(/[-+*/]/))
                    ) {
                      // Replace the last operator with the new one
                      updatedDisplay = prevDisplay.slice(0, -1) + buttonName;
                    } else {
                      updatedDisplay = prevDisplay + buttonName;
                    }



                } else {
                    updatedDisplay = prevDisplay === '0' ? buttonName : prevDisplay + buttonName;
                }

                return updatedDisplay;
            });
        }
    };

    const evaluateExpression = (expression) => {
        try {
            const formattedExpression = expression.replace(/÷/g, '/');
            const result = evaluate(formattedExpression);
            return result;
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
