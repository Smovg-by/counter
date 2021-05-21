import React, { useState } from 'react'

import './App.css'
import { Display } from './Display'
import { Buttons } from './Buttons'
import { ButtonsType } from './Buttons'

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
    if (counter > 0) {
      setStopRes(false)
    }
  }

  function resetCounter () {
    setCounter(0)
    setError(false)
    setStopInc(false)
    setStopRes(true)
  }

  let [buttons, setButtons] = useState<Array<ButtonsType>>([
    {
      id: 1,
      title: 'inc'
    },
    {
      id: 2,
      title: 'res'
    }
  ])

  //UI
  return (
    <div className='App'>
      <Display counter={counter} error={error} />
      <div>
        <Buttons
          buttons={buttons}
          incrementCounter={incrementCounter}
          stopInc={stopInc}
          resetCounter={resetCounter}
          stopRes={stopRes}
        />
      </div>
    </div>
  )
}

export default App
