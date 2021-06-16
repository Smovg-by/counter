export type ActionType = IncrementAT | ResetAT | SetValueAT

type IncrementAT = {
  type: 'INCREMENT'
}

type ResetAT = {
  type: 'RESET'
}

type SetValueAT = {
  type: 'SET_VALUE'
  currentValue: number
  maxValue: number
  startValue: number
}
