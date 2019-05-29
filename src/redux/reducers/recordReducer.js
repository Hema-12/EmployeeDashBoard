import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function recordReducer(state = initialState.records, action) {
  switch (action.type) {
    case types.CREATE_RECORD_SUCCESS:
      return [...state, { ...action.record }];
    case types.UPDATE_RECORD_SUCCESS:
      return state.map(record =>
        record.id === action.record.id ? action.record : record
      );
    case types.LOAD_RECORDS_SUCCESS:
      return action.records;
    case types.DELETE_RECORD_OPTIMISTIC:
      return state.filter(record => record.id !== action.record.id);
    default:
      return state;
  }
}
