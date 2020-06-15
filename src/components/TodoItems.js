import React, { Component } from "react";

class TodoItems extends Component {
  createTasks(item) {
    //   the value of the task
    return <li key={item.key}>{item.text}</li>;
    // The Key is a string attribute that identifies items in lists of elements.
    // the Key help REACT indentify which items have changed / added or removed.
    //the Key give the element an stable identity
    // its not recommendable to use index is the order of the ITEM might change.
    // it can cause performace  or issues with the components state
    // IF YOU CHOOSE not to assign an explicit key to the items, react by default will assign INDEX

    // https://www.youtube.com/watch?v=Jh47pOXwGq0
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
