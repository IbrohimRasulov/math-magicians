import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-grid">
        <div className="output-box"><span className="output-value">0123456789</span></div>
        <button type="button" className="button-1 top-buttons">AC</button>
        <button type="button" className="button-2 top-buttons">+/-</button>
        <button type="button" className="button-3 top-buttons">%</button>
        <button type="button" className="button-4 right-buttons">/</button>
        <button type="button" className="button-5 central-buttons">1</button>
        <button type="button" className="button-6 central-buttons">2</button>
        <button type="button" className="button-7 central-buttons">3</button>
        <button type="button" className="button-8 right-buttons">x</button>
        <button type="button" className="button-9 central-buttons">4</button>
        <button type="button" className="button-10 central-buttons">5</button>
        <button type="button" className="button-11 central-buttons">6</button>
        <button type="button" className="button-12 right-buttons">-</button>
        <button type="button" className="button-13 central-buttons">7</button>
        <button type="button" className="button-14 central-buttons">8</button>
        <button type="button" className="button-15 central-buttons">9</button>
        <button type="button" className="button-16 right-buttons">+</button>
        <button type="button" className="button-17 central-buttons">0</button>
        <button type="button" className="button-18 central-buttons">.</button>
        <button type="button" className="button-19 right-buttons">=</button>
      </div>
    );
  }
}

export default Calculator;
