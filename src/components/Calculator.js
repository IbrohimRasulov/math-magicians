import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.btnOnClick = this.btnOnClick.bind(this);
  }

  btnOnClick = (event) => {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output-box">
          <span className="output-value">
            {total}
            {operation}
            {next}
          </span>
        </div>
        <button type="button" className="button-1 top-buttons" onClick={this.btnOnClick}>AC</button>
        <button type="button" className="button-2 top-buttons" onClick={this.btnOnClick}>+/-</button>
        <button type="button" className="button-3 top-buttons" onClick={this.btnOnClick}>%</button>
        <button type="button" className="button-4 right-buttons" onClick={this.btnOnClick}>÷</button>
        <button type="button" className="button-5 central-buttons" onClick={this.btnOnClick}>1</button>
        <button type="button" className="button-6 central-buttons" onClick={this.btnOnClick}>2</button>
        <button type="button" className="button-7 central-buttons" onClick={this.btnOnClick}>3</button>
        <button type="button" className="button-8 right-buttons" onClick={this.btnOnClick}>x</button>
        <button type="button" className="button-9 central-buttons" onClick={this.btnOnClick}>4</button>
        <button type="button" className="button-10 central-buttons" onClick={this.btnOnClick}>5</button>
        <button type="button" className="button-11 central-buttons" onClick={this.btnOnClick}>6</button>
        <button type="button" className="button-12 right-buttons" onClick={this.btnOnClick}>-</button>
        <button type="button" className="button-13 central-buttons" onClick={this.btnOnClick}>7</button>
        <button type="button" className="button-14 central-buttons" onClick={this.btnOnClick}>8</button>
        <button type="button" className="button-15 central-buttons" onClick={this.btnOnClick}>9</button>
        <button type="button" className="button-16 right-buttons" onClick={this.btnOnClick}>+</button>
        <button type="button" className="button-17 central-buttons" onClick={this.btnOnClick}>0</button>
        <button type="button" className="button-18 central-buttons" onClick={this.btnOnClick}>.</button>
        <button type="button" className="button-19 right-buttons" onClick={this.btnOnClick}>=</button>
      </div>
    );
  }
}

export default Calculator;
