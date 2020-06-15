// 1
import React, { Component } from "react";
// 14
import TodoItems from "./TodoItems";

// 3
class TodoList extends Component {
  /*
What is Props?
-Stands for properties
- Can be passed like function arguments
- Can only be used in a uni-directional flow(parent > child)
- example of how it works

when you add the href="value" you are assigning an attribute to an html element:
<a href="value"> Link </a>
Its the same with the props
<Component property="value">

check the video min 3:05
https://youtu.be/KvapOdsFK5A
*/

  constructor(props) {
    super(props);
    /*
        Create a class named "Model" which will inherit the methods from the "Car" class, by using the extends keyword.

        By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:

Clear Example:
        https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_class_extends
    */
    // 6
    this.state = {
      items: [],
    };
    // 5
    this.addItem = this.addItem.bind(this);
  }
  //4
  addItem(e) {
    //   8
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
    }

    // 9
    this._inputElement.value = "";
    // 10
    console.log(this.state.items);
    // 11
    e.preventDefault();
  }
  //2
  //7 add this inside the input: ref={(a) => (this._inputElement = a)}
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          {/* add item, when the form will be submited the add item will be called */}
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
          </form>
        </div>
        {/* 12 */}
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}
export default TodoList;
