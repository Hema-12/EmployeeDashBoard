import { combineReducers } from "redux";
import records from "./recordReducer";
import depts from "./deptReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  records,
  depts,
  apiCallsInProgress
});

export default rootReducer;
