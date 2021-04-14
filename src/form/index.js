import React from "react";
import getName from "../utils";

class Form extends React.Component {
  constructor(props) {
    super();
    console.log("Constructor");
    this.state = {
      isVisibale: true,
      name: props.person.name,
    };
    this.onNameChange = this.onNameChange.bind(this);
  }

  componentDidMount() {
    // const input = document.getElementById("name");
    // input.focus();
    // console.log("Component Did Mount");
    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log(this.state, nextState);
    return this.state.name !== nextState.name;
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { person, field, onSave } = this.props;
    console.log("Render");
    return (
      <form action="">
        <label htmlFor="name">
          Name {getName({ name: this.state.name, surname: person.surname })}
        </label>
        <input
          tabIndex="0"
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        {field === "age" && <input type="number" name="age" />}
        <input type="submit" value="save" onClick={onSave} />
      </form>
    );
  }
}

export default Form;
