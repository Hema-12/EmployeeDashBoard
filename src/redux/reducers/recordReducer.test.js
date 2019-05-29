import recordReducer from "./recordReducer";
import * as actions from "../actions/recordActions";

it("should add record when passed CREATE_RECORD_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];

  const newRecord = {
    title: "C"
  };

  const action = actions.createRecordSuccess(newRecord);

  // act
  const newState = recordReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update record when passed UPDATE_RECORD_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" }
  ];

  const record = { id: 2, title: "New Title" };
  const action = actions.updateRecordSuccess(record);

  // act
  const newState = recordReducer(initialState, action);
  const updatedRecord = newState.find(a => a.id == record.id);
  const untouchedRecord = newState.find(a => a.id == 1);

  // assert
  expect(updatedRecord.title).toEqual("New Title");
  expect(untouchedRecord.title).toEqual("A");
  expect(newState.length).toEqual(3);
});
