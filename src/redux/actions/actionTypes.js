export const CREATE_RECORD = "CREATE_RECORD";
export const LOAD_RECORDS_SUCCESS = "LOAD_RECORDS_SUCCESS";
export const LOAD_DEPTS_SUCCESS = "LOAD_DEPTS_SUCCESS";
export const CREATE_RECORD_SUCCESS = "CREATE_RECORD_SUCCESS";
export const UPDATE_RECORD_SUCCESS = "UPDATE_RECORD_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_RECORD_OPTIMISTIC = "DELETE_RECORD_OPTIMISTIC";
