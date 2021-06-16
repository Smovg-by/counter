export const IncrementAC = () => {
  return {
    type: 'INCREMENT'
  }
}
export const ResetAC = () => {
  return {
    type: 'RESET'
  }
}
export const SetValueAC = (
  currentValue: number,
  maxValue: number,
  startValue: number
) => {
  return {
    type: 'SET_VALUE',
    currentValue,
    maxValue,
    startValue
  }
}
