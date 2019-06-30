import React from "react";
import { shallow } from "enzyme";
import Login from "./index";

it("should render correctly", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
