// ACTIONS

import { Dispatch } from "redux"
import { AppStateType } from "./redux-store"

const INCREMENT: 'INCREMENT' = 'INCREMENT'
const RESET: 'RESET' = 'RESET'
const SET_VALUE: 'SET_VALUE' = 'SET_VALUE'
const SET_VALUE_FROM_LOCAL_STORAGE: 'SET_VALUE_FROM_LOCAL_STORAGE' = 'SET_VALUE_FROM_LOCAL_STORAGE'

// ACTION TYPES

export type ActionType = incrementType | resetType | setValuetype | setValueFromLocalSorageType

type incrementType = {
  type: 'INCREMENT'
}

type resetType = {
  type: 'RESET'
}

type setValuetype = {
  type: 'SET_VALUE'
  currentValue: number
  maxValue: number
  startValue: number
}
type setValueFromLocalSorageType = {
  type: 'SET_VALUE_FROM_LOCAL_STORAGE'
  newValue: number
}

// ACTION CREATORS

export const increment = (): incrementType => {
  return {
    type: INCREMENT
  }
}
export const reset = (): resetType => {
  return {
    type: RESET
  }
}
export const setValue = (
  currentValue: number,
  maxValue: number,
  startValue: number
): setValuetype => {
  return { type: SET_VALUE, currentValue, maxValue, startValue }
}

export const setValueFromLocalSorage = (newValue: number): setValueFromLocalSorageType => {
  return { type: SET_VALUE_FROM_LOCAL_STORAGE, newValue }
}

// REDUCER

export type initialStateType = {
  currentValue: number
  maxValue: number
  startValue: number
}

let initialState: initialStateType = {
  currentValue: 0,
  maxValue: 10,
  startValue: 0,
}

export function counterReducer(state: initialStateType = initialState, action: ActionType): initialStateType {
  switch (action.type) {

    case 'INCREMENT':
      return { ...state, currentValue: state.currentValue + 1 }

    case 'RESET':
      return { ...state, currentValue: state.startValue }

    case 'SET_VALUE':
      return {
        ...state,
        startValue: action.startValue,
        maxValue: action.maxValue,
        currentValue: action.startValue
      }
    case 'SET_VALUE_FROM_LOCAL_STORAGE':
      return {
        ...state,
        currentValue: action.newValue,
      }

    default:
      return state
  }
}


// THUNK
// THUNK Creator

// export const incValuesTC = () => (dispatch: Dispatch, getState: () => AppStateType) => {
//   let actualValue = getState().counter.currentValue
//   localStorage.setItem('counterValue', JSON.stringify(actualValue + 1))
//   dispatch(increment())
// }

// export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//   let valueAsString = localStorage.getItem('counterValue')
//   if (valueAsString) {
//     let newValue = JSON.parse(valueAsString)
//     dispatch(setValueFromLocalSorage(newValue))
//   }
// }
