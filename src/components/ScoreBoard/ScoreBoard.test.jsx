import React from "react";
import { shallow } from "enzyme";
import { ScoreBoard } from ".";

it("should render correctly", () => {
  const wrapper = shallow(<ScoreBoard />);
  expect(wrapper).toMatchSnapshot();
});
