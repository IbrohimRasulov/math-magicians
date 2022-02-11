import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const btnOnClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator-grid">
      <div className="output-box">
        <span className="output-value">
          {state.total}
          {state.operation}
          {state.next}
        </span>
      </div>
      <button type="button" className="button-1 top-buttons" onClick={btnOnClick}>AC</button>
      <button type="button" className="button-2 top-buttons" onClick={btnOnClick}>+/-</button>
      <button type="button" className="button-3 top-buttons" onClick={btnOnClick}>%</button>
      <button type="button" className="button-4 right-buttons" onClick={btnOnClick}>÷</button>
      <button type="button" className="button-5 central-buttons" onClick={btnOnClick}>1</button>
      <button type="button" className="button-6 central-buttons" onClick={btnOnClick}>2</button>
      <button type="button" className="button-7 central-buttons" onClick={btnOnClick}>3</button>
      <button type="button" className="button-8 right-buttons" onClick={btnOnClick}>x</button>
      <button type="button" className="button-9 central-buttons" onClick={btnOnClick}>4</button>
      <button type="button" className="button-10 central-buttons" onClick={btnOnClick}>5</button>
      <button type="button" className="button-11 central-buttons" onClick={btnOnClick}>6</button>
      <button type="button" className="button-12 right-buttons" onClick={btnOnClick}>-</button>
      <button type="button" className="button-13 central-buttons" onClick={btnOnClick}>7</button>
      <button type="button" className="button-14 central-buttons" onClick={btnOnClick}>8</button>
      <button type="button" className="button-15 central-buttons" onClick={btnOnClick}>9</button>
      <button type="button" className="button-16 right-buttons" onClick={btnOnClick}>+</button>
      <button type="button" className="button-17 central-buttons" onClick={btnOnClick}>0</button>
      <button type="button" className="button-18 central-buttons" onClick={btnOnClick}>.</button>
      <button type="button" className="button-19 right-buttons" onClick={btnOnClick}>=</button>
    </div>
  );
};

export default Calculator;
