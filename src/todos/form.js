import React from "react";

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: { text: "", isDone: false },
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(e) {
    const tempTodo = {
      ...this.state.todo,
      text: e.target.value,
      id: Math.random().toString(),
    };
    this.setState({ todo: tempTodo });
  }

  clickHandler() {
    this.setState({ todo: { text: "" } });
    this.props.onClick(this.state.todo);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.todo.text}
          onChange={this.changeHandler}
        />
        <button onClick={this.clickHandler}>Add Todo</button>
      </div>
    );
  }
}
