import { InitialType } from "@/types";
import { Action } from "redux"

interface AddAction extends Action {
  payload: number;
}

const initialState: InitialType = {
  cash: 5
}


export function cashReducer(state = initialState, action: AddAction) {
  switch (action.type) {
    case "ADD":
      return { ...state, cash: state.cash + action.payload }
    case "REM":
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}