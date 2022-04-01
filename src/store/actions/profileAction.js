import {ADD_EVENT, UPDATE_EVENT} from "../reducers/profileReducer";


export const AddEvent = (event) => {
  return async (dispatch) => {
    dispatch({type: ADD_EVENT, payload: event})
  }
}

export const UpdateEvent = (events) => {
  return async (dispatch) => {
    dispatch({type: UPDATE_EVENT, payload: events})
  }
}

