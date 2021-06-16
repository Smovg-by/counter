import { StateType } from '../redux/store'

type CounterDisplayPropsType = {
  state: StateType
  noteMessage: boolean
  errorMessage: boolean
}

export function CounterDisplay (props: CounterDisplayPropsType) {
  //BLL
  let currentValue = props.state.currentValue
  let maxValue = props.state.maxValue
  let noteText: string = 'Press SET to proceed'
  let errorText: string = 'Incorrect value!'

  function displayValueSelector () {
    if (props.noteMessage) {
      return <span className={'noteMessage'}>{noteText}</span>
    } else if (props.errorMessage) {
      return <span className={'errorMessage'}>{errorText}</span>
    } else {
      return currentValue
    }
  }

  let displayValue = displayValueSelector()

  //UI
  return (
    <div
      className={currentValue >= maxValue ? 'display displayRed' : 'display'}
    >
      {displayValue}
    </div>
  )
}
