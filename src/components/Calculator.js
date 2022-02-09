import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-grid">
        <div className="output-box"><span className="output-value">0123456789</span></div>
        <button className="button-1 top-symbols">AC</button>
        <button className="button-2 top-symbols">+/-</button>
        <button className="button-3 top-symbols">%</button>
        <button className="button-4 right-symbols">/</button>
        <button className="button-5 centeral-symbols">1</button>
        <button className="button-6 centeral-symbols">2</button>
        <button className="button-7 centeral-symbols">3</button>
        <button className="button-8 right-symbols">x</button>
        <button className="button-9 centeral-symbols">4</button>
        <button className="button-10 centeral-symbols">5</button>
        <button className="button-11 centeral-symbols">6</button>
        <button className="button-12 right-symbols">-</button>
        <button className="button-13 centeral-symbols">7</button>
        <button className="button-14 centeral-symbols">8</button>
        <button className="button-15 centeral-symbols">9</button>
        <button className="button-16 right-symbols">+</button>
        <button className="button-17 centeral-symbols">0</button>
        <button className="button-18 centeral-symbols">.</button>
        <button className="button-19 right-symbols">=</button>
      </div>
    );
  }
};

export default Calculator;
