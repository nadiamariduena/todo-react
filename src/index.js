import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./components/App";
import TodoList from "./components/todoList";

//
//
/*
In a nutshell, rendering is the process of transforming your react components into DOM (Document Object Model) nodes that your browser can understand and display on the screen. DOM manipulation is extremely slow. In contrast, manipulating React elements is much, much faster.

*/

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodoList />
  </React.StrictMode>,
  document.getElementById("root")
);
