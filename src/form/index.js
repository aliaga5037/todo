import React from "react";
import getName from "../utils";

class Form extends React.Component {
  render() {
    const user = { name: "John", surname: "Doe" };
    return (
      <form action="">
        <label htmlFor="name">Name {getName(user)}</label>
        <input type="text" name="name" value={user.name} />
        <input type="submit" value="save" />
      </form>
    );
  }
}

export default Form;
