import React, { useEffect, useState } from 'react'
import { CounterDisplay } from './components/CounterDisplay'
import { IncResButtons } from './components/IncResButtons'
import { SetButton } from './components/SetButton'
import { SettingsDisplay } from './components/SettingsDisplay'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from './bll/redux-store'
import { incValuesTC, initialStateType, reset, setValue, setValueFromLocalStorageTC } from './bll/counter-reducer'




function App() {

  // BLL

  useEffect(() => {
    dispatch(setValueFromLocalStorageTC())
  }, [])

  const state = useSelector<AppStateType, initialStateType>(state => state.counter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(incValuesTC())
  }
  const resetHandler = () => {
    dispatch(reset())
  }

  const incrementDisabled: boolean = state.currentValue >= state.maxValue
  const resetDisabled: boolean = state.currentValue >= state.startValue

  const [values, setValues] = useState({
    maxValue: state.maxValue,
    startValue: state.startValue
  })

  const [noteMessage, setNoteMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteMessage(true)

    let vals = { maxValue, startValue }
    vals = { ...vals, [event.target.name]: Number(event.target.value) }

    console.log(vals.maxValue, vals.startValue)

    if (Number(vals.maxValue) <= Number(vals.startValue)) {
      setErrorMessage(true)
      setNoteMessage(false)
    } else {
      setErrorMessage(false)
    }

    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const currentValue = state.currentValue
  const maxValue = +values.maxValue
  const startValue = +values.startValue

  const setValueHandler = () => {
    setNoteMessage(false)
    dispatch(setValue(currentValue, maxValue, startValue))
  }

  //UI
  return (
    <div className='App'>
      <div className='container'>
        <CounterDisplay
          state={state}
          noteMessage={noteMessage}
          errorMessage={errorMessage}
        />
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
        <SettingsDisplay
          onChangeHandler={onChangeHandler}
          maxValue={values.maxValue}
          startValue={values.startValue}
        />
        <div>
          <SetButton
            setValueHandler={setValueHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default App
