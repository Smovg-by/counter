import { StateType } from './store'
import { ActionType } from './types'

export function rootReducer (state: StateType, action: ActionType) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('increment')
      return { ...state, currentValue: state.currentValue + 1 }

    case 'RESET':
      console.log('reset')
      return { ...state, currentValue: state.startValue }

    case 'SET_VALUE':
      console.log(action.maxValue, action.startValue)
      return {
        ...state,
        startValue: action.startValue,
        maxValue: action.maxValue,
        currentValue: action.startValue
      }

    default:
      return state
  }
}
