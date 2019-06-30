import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
// import defineUserNameAction from "../../actions/defineUserNameAction";
// import handleLoginVisibility from "../../actions/defineUserNameAction";

class Login extends Component {
  state = { value: "" };

  render() {
    return (
      <div>
        <p>Please choose your username</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userName"
            id=""
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = e => {
    this.props.defineUserName(this.state.value);
    this.props.handleLoginVisibility();
    e.preventDefault();
    console.log(`submitted`);
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // return {
  //   onClick: () => {
  //     dispatch(setVisibilityFilter(ownProps.filter));
  //   }
  // };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
