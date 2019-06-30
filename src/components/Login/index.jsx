import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import defineUserNameAction from "../../actions/defineUserNameAction";
import handleLoginVisibilityAction from "../../actions/handleLoginVisibilityAction";

const Login = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(defineUserNameAction(value));
    dispatch(handleLoginVisibilityAction());
  };

  return (
    <div>
      <p>Please choose your username</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" id="" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Login;
