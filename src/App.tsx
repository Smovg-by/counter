import React, { useState } from 'react'

import './App.css'
import { Display } from './Display'
import { IncButton } from './IncButton'
import { ResetButton } from './ResetButton'

function App () {
  // BLL
  let [counter, setCounter] = useState<number>(0)
  let [error, setError] = useState<boolean>(false)
  let [stopInc, setStopInc] = useState<boolean>(false)
  let [stopRes, setStopRes] = useState<boolean>(true)

  function incrementCounter () {
    if (counter < 5) {
      counter++
      setCounter(counter)
      if (counter === 5) {
        setError(true)
        setStopInc(true)
      }
    }
    if (counter> 0) {
      setStopRes(false)
    }
  }

  function resetCounter () {
    setCounter(0)
    setError(false)
    setStopInc(false)
    setStopRes(true)
  }
  //UI
  return (
    <div className='App'>
      <Display counter={counter} error={error} />
      <div className='buttonContainer'>
        <IncButton incrementCounter={incrementCounter} stopInc={stopInc} />
        <ResetButton resetCounter={resetCounter} stopRes={stopRes} />
      </div>
    </div>
  )
}

export default App
