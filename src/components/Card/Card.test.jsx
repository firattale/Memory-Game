import React from "react";
import { shallow } from "enzyme";
import { Login } from ".";

it("should render correctly", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
