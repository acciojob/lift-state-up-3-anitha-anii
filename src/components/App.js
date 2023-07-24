

import React, { Component } from 'react';

// Child Component 1
class ChildComponent1 extends Component {
  render() {
    return (
      <button onClick={() => this.props.onOptionSelect("Option 1")}>
        Option 1
      </button>
    );
  }
}

// Child Component 2
class ChildComponent2 extends Component {
  render() {
    return (
      <button onClick={() => this.props.onOptionSelect("Option 2")}>
        Option 2
      </button>
    );
  }
}

// Parent Component (App.js)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleOptionSelect = (option) => {
    this.setState({ selectedOption: option });
  };

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <ChildComponent1 onOptionSelect={this.handleOptionSelect} />
        <ChildComponent2 onOptionSelect={this.handleOptionSelect} />
        <p>Selected Option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export default App;

