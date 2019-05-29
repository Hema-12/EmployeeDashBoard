import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as recordActions from "./actions/recordActions";

it("Should handle creating records", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const record = {
    title: "Clean Code"
  };

  // act
  const action = recordActions.createRecordSuccess(record);
  store.dispatch(action);

  // assert
  const createdRecord = store.getState().records[0];
  expect(createdRecord).toEqual(record);
});
