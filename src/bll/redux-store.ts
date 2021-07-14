import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { counterReducer } from './counter-reducer'

export const rootReducer = combineReducers({
  counter: counterReducer
})

export let reduxStore = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer> // ReturnType смотрит, что возвращает функция, и типизирует это значение

export type AppStoreType = typeof reduxStore
