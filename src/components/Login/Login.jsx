import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import defineUserNameAction from "../../actions/defineUserNameAction";

class Login extends Component {
  render() {
    return (
      <div>
        <p>Please choose your username</p>
        <input type="text" name="userName" id="" />
      </div>
    );
  }

  defineUserName = () => {
    this.props.defineUserName();
  };
}

const mapDispatchToProps = dispatch => ({
  defineUserName: () => dispatch(defineUserNameAction())
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
