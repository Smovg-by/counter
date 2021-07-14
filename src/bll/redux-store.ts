import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { loadState, saveState } from '../utils/localStorage-utils';
import { counterReducer } from './counter-reducer'

export const rootReducer = combineReducers({
  counter: counterReducer
})

export let reduxStore = createStore(rootReducer, loadState(), applyMiddleware(thunk))

reduxStore.subscribe(() => {
  saveState({
    counter: reduxStore.getState().counter
  })

})

export type AppStateType = ReturnType<typeof rootReducer> // ReturnType смотрит, что возвращает функция, и типизирует это значение

export type AppStoreType = typeof reduxStore
