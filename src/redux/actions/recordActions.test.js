import * as recordActions from "./recordActions";
import * as types from "./actionTypes";
import { records } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Records Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_RECORDS_SUCCESS when loading records", () => {
      fetchMock.mock("*", {
        body: records,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_RECORDS_SUCCESS, records }
      ];

      const store = mockStore({ records: [] });
      return store.dispatch(recordActions.loadRecords()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createRecordSuccess", () => {
  it("should create a CREATE_RECORD_SUCCESS action", () => {
    //arrange
    const record = records[0];
    const expectedAction = {
      type: types.CREATE_RECORD_SUCCESS,
      record
    };

    //act
    const action = recordActions.createRecordSuccess(record);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
