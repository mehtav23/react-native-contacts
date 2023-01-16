import React from "react";
import renderer from "react-test-renderer";
import ContactList from "../../src/components/ContactList";

const mockNavigate = jest.fn();
jest.mock("react-navigation", () => ({
  withNavigation: (Component) => (props) =>
    <Component navigation={{ navigate: mockNavigate }} {...props} />,
}));
afterAll(() => {
  jest.restoreAllMocks();
});

const list = [
  {
    id: "876af715-d8bc-4106-8a2e-291efc1c37e9",
    firstName: "Arnav",
    lastName: "Kumar",
    primaryNumber: "+918080842761",
    email: "arnav123@gmail.com",
  },
  {
    id: "876af715-d8bc-4106-8a2e-291efc1c37e8",
    firstName: "Varun",
    lastName: "Kumar",
    primaryNumber: "+918080842762",
    email: "arnav123@gmail.com",
  },
];

describe("<ContactList />", () => {
  it("should render the list we passed to it.", () => {
    const tree = renderer.create(<ContactList list={list} />).toJSON();
    expect(tree.children[0].props.data).toEqual(list);
  });

  it("should call the onPress method of the list", () => {
    const { root } = renderer.create(<ContactList list={list} />)
    root.findByProps({testID: '876af715-d8bc-4106-8a2e-291efc1c37e9'}).props.onPress();
    expect(mockNavigate).toHaveBeenCalledWith('Details', {item: list[0]})
  });
});
