import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-grid">
        <div className="output"></div>
        <div className="buttons">
          <button className="button-1">AC</button>
          <button className="button-2">+/-</button>
          <button className="button-3">%</button>
          <button className="button-4">/</button>
          <button className="button-5">1</button>
          <button className="button-6">2</button>
          <button className="button-7">3</button>
          <button className="button-8">x</button>
          <button className="button-9">4</button>
          <button className="button-10">5</button>
          <button className="button-11">6</button>
          <button className="button-12">-</button>
          <button className="button-13">7</button>
          <button className="button-14">8</button>
          <button className="button-15">9</button>
          <button className="button-16">+</button>
          <button className="button-17">0</button>
          <button className="button-18">.</button>
          <button className="button-19">=</button>
        </div>
      </div>
    );
  }
};

export default Calculator;
