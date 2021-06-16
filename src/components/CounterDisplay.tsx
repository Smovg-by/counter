import { StateType } from '../redux/store'

type CounterDisplayPropsType = {
  state: StateType
}

export function CounterDisplay (props: CounterDisplayPropsType) {
  //BLL
  let currentValue = props.state.currentValue
  let maxValue = props.state.maxValue
  //UI
  return (
    <div
      className={currentValue >= maxValue ? 'display displayRed' : 'display'}
    >
      {currentValue}
    </div>
  )
}
