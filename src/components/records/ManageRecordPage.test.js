import React from "react";
import { mount } from "enzyme";
import { depts, newRecord, records } from "../../../tools/mockData";
import { ManageRecordPage } from "./ManageRecordPage";

function render(args) {
  const defaultProps = {
    depts,
    records,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    saveRecord: jest.fn(),
    loaddepts: jest.fn(),
    loadRecords: jest.fn(),
    record: newRecord,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageRecordPage {...props} />);
}

it("sets error when attempting to save an empty name field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("name is required.");
});
