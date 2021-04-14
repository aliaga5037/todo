import React from "react";
import "./App.css";
import TodoForm from "./todos/form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    const tempTodos = [...this.state.todos, todo];
    this.setState({
      todos: tempTodos,
    });
  }

  setDone(id) {
    this.setState((prevState) => {
      const newState = prevState.todos.map((t) => {
        if (t.id === id) {
          t.isDone = true;
        }
        return t;
      });
      return { ...prevState, todos: newState };
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <TodoForm onClick={this.addTodo} />
        <ul>
          {todos.map((item) => (
            <li
              style={{ textDecoration: !item.isDone ? "" : "line-through" }}
              key={item.id}
              onClick={this.setDone.bind(this, item.id)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
