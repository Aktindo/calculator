import React from "react";
import "./App.css";

export interface AppProps {}

export interface AppState {
  expression: string;
  expressionResult: number;
}

class App extends React.Component<AppProps, AppState> {
  state = {
    expression: "",
    expressionResult: 0,
  };
  render() {
    return (
      <div className="app">
        <div>
          <h1 className="text-5xl text-center mt-20 font-poppins">
            <i className="fas fa-calculator-alt mr-2"></i>
            Calculator
          </h1>
          <div className="card bordered shadow max-w-lg mx-5 sm:mx-auto mt-10">
            <div className="card-body">
              <h2 className="card-title">
                <div className="bg-base-200 rounded-box flex justify-end p-5">
                  <p className="w-full opacity-75">{this.state.expression}</p>
                  <p className="text-6xl">{this.state.expressionResult}</p>
                </div>
              </h2>
              <div className="grid grid-cols-4 gap-4">
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("(")}
                >
                  (
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression(")")}
                >
                  )
                </button>
                <button
                  className="btn btn-error text-white text-lg"
                  onClick={() =>
                    this.setState({ expressionResult: 0, expression: "" })
                  }
                >
                  AC
                </button>
                <button
                  className="btn btn-secondary text-lg"
                  onClick={() =>
                    this.setState({
                      expression: this.state.expression.substring(
                        0,
                        this.state.expression.length - 1
                      ),
                    })
                  }
                >
                  C
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("7")}
                >
                  7
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("8")}
                >
                  8
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("9")}
                >
                  9
                </button>
                <button
                  className="btn btn-secondary text-lg"
                  onClick={() => this.handleExpression("*")}
                >
                  <i className="fas fa-times"></i>
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("4")}
                >
                  4
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("5")}
                >
                  5
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("6")}
                >
                  6
                </button>
                <button
                  className="btn btn-secondary text-lg"
                  onClick={() => this.handleExpression("-")}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("1")}
                >
                  1
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("2")}
                >
                  2
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("7")}
                >
                  3
                </button>
                <button
                  className="btn btn-secondary text-lg"
                  onClick={() => this.handleExpression("+")}
                >
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression("0")}
                >
                  0
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={() => this.handleExpression(".")}
                >
                  .
                </button>
                <button
                  className="btn btn-secondary text-lg"
                  onClick={() => this.handleExpression("/")}
                >
                  <i className="fas fa-divide"></i>
                </button>
                <button
                  className="btn btn-success text-white text-lg"
                  onClick={() => this.evaluateExpression()}
                  disabled={this.state.expression.length ? false : true}
                >
                  <i className="fas fa-equals"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleExpression(char: string) {
    this.setState({ expression: this.state.expression + char });
  }

  evaluateExpression() {
    let evaluatedNum;

    try {
      evaluatedNum = eval(this.state.expression);
    } catch (error) {
      evaluatedNum = "NaN";
    }

    this.setState({ expressionResult: evaluatedNum });
  }
}

export default App;
