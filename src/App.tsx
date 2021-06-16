import { useReducer, useState } from 'react'
import './App.css'
import { CounterDisplay } from './components/CounterDisplay'
import { IncResButtons } from './components/IncResButtons'
import { SetButton } from './components/SetButton'
import { SettingsDisplay } from './components/SettingsDisplay'
import { rootReducer } from './redux/rootReducer'
import { StateType, StoreType } from './redux/store'

type AppPropsType = {
  store: StoreType
}

function App (props: AppPropsType) {
  // BLL
  const initialState: StateType = props.store.getState()

  const [state, dispatch] = useReducer(rootReducer, initialState)

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const resetHandler = () => {
    dispatch({ type: 'RESET' })
  }

  const incrementDisabled: boolean = state.currentValue >= state.maxValue
  const resetDisabled: boolean = state.currentValue >= state.startValue

  const [values, setValues] = useState({
    maxValue: state.maxValue,
    startValue: state.startValue
  })

  const onChangeHandler = (event: any) => {
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const currentValue = state.currentValue
  const maxValue = +values.maxValue
  const startValue = +values.startValue

  const setValueHandler = () => {
    dispatch({ type: 'SET_VALUE', currentValue, maxValue, startValue })
  }

  //UI
  return (
    <div className='App'>
      <div className='container'>
        <CounterDisplay state={state} />
        <div>
          <IncResButtons
            incrementHandler={incrementHandler}
            resetHandler={resetHandler}
            incrementDisabled={incrementDisabled}
            resetDisabled={!resetDisabled}
          />
        </div>
      </div>

      <div className='container'>
        <SettingsDisplay onChangeHandler={onChangeHandler} />
        <div>
          <SetButton setValueHandler={setValueHandler} />
        </div>
      </div>
    </div>
  )
}

export default App
