import React, { Component } from "react";
import "./styles.css";

import Todos from "./components/Todos";

let id = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("enter your todo...");
    this.setState({
      todos: [...this.state.todos, { id: ++id, text: text, checked: false }]
    });
  }

  removeTodo(id) {
    console.log("clickeddddd");
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleCheck(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div>
        <div>Todo Count: {this.state.todos.length}</div>
        <div>
          Unchecked Todo Count:
          {this.state.todos.filter(todo => !todo.checked).length}
        </div>
        <button onClick={this.addTodo.bind(this)}>Add todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todos
              onDelete={() => this.removeTodo(todo.id)}
              onToggle={() => this.toggleCheck(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
