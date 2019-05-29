import React from "react";
import { cleanup, render } from "react-testing-library";
import RecordForm from "./RecordForm";

afterEach(cleanup);

function renderRecordForm(args) {
  let defaultProps = {
    depts: [],
    record: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<RecordForm {...props} />);
}

it("should render Add Record header", () => {
  const { getByText } = renderRecordForm();
  getByText("Add Record");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderRecordForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText, debug } = renderRecordForm({ saving: true });
  // debug();
  getByText("Saving...");
});
