import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import defineUserNameAction from "../../actions/defineUserNameAction";
import Login from "../Login/Login";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <Login />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  defineUserName: () => dispatch(defineUserNameAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
