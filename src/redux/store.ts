import { rootReducer } from './rootReducer'
import { ActionType } from './types'

export type StateType = {
  currentValue: number
  maxValue: number
  startValue: number
}

export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  subscribe: (callback: () => void) => void
  getState: () => StateType
  dispatch: (action: ActionType) => void
}

export const store: StoreType = {
  _state: {
    currentValue: 0,
    maxValue: 10,
    startValue: 0
  },
  _callSubscriber () {
    console.log('state has been changed')
  },
  subscribe (callback) {
    this._callSubscriber = callback
  },
  getState () {
    return this._state
  },
  dispatch (action: ActionType) {
    this._state = rootReducer(this._state, action)
  }
}
