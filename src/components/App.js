
import React, { Component } from 'react';

// Child Component 1
class ChildComponent1 extends Component {
  render() {
    return (
      <button onClick={() => this.props.onOptionSelect("Option 1")}>
        Button 1
      </button>
    );
  }
}

// Child Component 2
class ChildComponent2 extends Component {
  render() {
    return (
      <button onClick={() => this.props.onOptionSelect("Option 2")}>
        Button 2
      </button>
    );
  }
}

// Parent Component
class ParentComponent extends Component {
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
        <ChildComponent1 onOptionSelect={this.handleOptionSelect} />
        <ChildComponent2 onOptionSelect={this.handleOptionSelect} />
        <p>Selected Option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export default ParentComponent;
