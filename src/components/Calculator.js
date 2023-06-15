import React, { useState } from 'react';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

const Calculator = () => {
    const[input, setInput] = useState('');
    const[output, setOput] = useState('');

    const handleButtonClick = () => {

    };


    return(
        <div className="calculator-container">
            <Display value={input}/>
            <ButtonPanel clickHandler={handleButtonClick} />
        </div>
    )
};

export default Calculator;