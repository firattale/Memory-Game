import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { defineUserNameAction } from "../../actions/defineUserNameAction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <button onClick={this.defineUserName}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }

  defineUserName = () => {
    this.props.defineUserName();
  };
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
