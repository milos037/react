import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
//FRAGMENT ili
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";
import styles from "./Person.css";

class Person extends Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] render...");
    const age = this.props.age === undefined ? "NE ZNAM" : this.props.age;

    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please login</p>
        )}

        <p onClick={this.props.click}>
          Ja sam {this.props.name} i imam {age} godina
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.change}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, styles.Person);
