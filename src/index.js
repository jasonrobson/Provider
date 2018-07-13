import React, { Component, createContext } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const CounterContext = createContext({
  value: 0,
  change: () => {}
});

class CounterProvider extends Component {
  state = {
    value: 0
  };

  change = payload => {
    this.setState({
      value: payload
    });
  };

  render() {
    const newValue = {
      ...this.state,
      change: this.change
    };

    return (
      <CounterContext.Provider value={newValue}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <CounterProvider>
        <CounterContext.Consumer>
          {({ value, change }) => (
            <fragment>
              <span>Valor: {value}</span>
              <button
                type="button"
                onClick={() => {
                  change(value + 1);
                }}
              >
                fafafa
              </button>
            </fragment>
          )}
        </CounterContext.Consumer>
        <CounterContext.Consumer>
          {({ value, change }) => (
            <fragment>
              <span>Valor: {value}</span>
              <button
                type="button"
                onClick={() => {
                  change(value + 1);
                }}
              >
                fafafa
              </button>
            </fragment>
          )}
        </CounterContext.Consumer>
      </CounterProvider>
      <br />
      <hr />
      <br />
      <CounterProvider>
        <CounterContext.Consumer>
          {({ value, change }) => (
            <fragment>
              <span>Valor: {value}</span>
              <button
                type="button"
                onClick={() => {
                  change(value + 1);
                }}
              >
                fafafa
              </button>
            </fragment>
          )}
        </CounterContext.Consumer>
        <CounterContext.Consumer>
          {({ value, change }) => (
            <fragment>
              <span>Valor: {value}</span>
              <button
                type="button"
                onClick={() => {
                  change(value + 1);
                }}
              >
                fafafa
              </button>
            </fragment>
          )}
        </CounterContext.Consumer>
      </CounterProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
