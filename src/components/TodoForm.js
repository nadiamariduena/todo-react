import React from "react";
export default class todoForm extends React.Component {
  state = {
    text: "",
  };

  render() {
    return (
      <input
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="todo..."
      />
    );
  }
}
