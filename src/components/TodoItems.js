import React, { Component } from "react";

class TodoItems extends Component {
  createTasks(item) {
    //   the value of the task
    return <li key={item.key}>{item.text}</li>;
  }

  render() {
    var todoEntries = this.props.entries;
    // will iterate through the items and then create a task
    var listItems = todoEntries.map(this.createTasks);

    // here is where its going to be printed
    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;
