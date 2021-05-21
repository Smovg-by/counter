type ResetButtonPropsType = {
  resetCounter: () => void
  stopRes: boolean
}

export function ResetButton (props: ResetButtonPropsType) {
  return (
    <button
      className={props.stopRes? 'resetButtonStop' : 'resetButton'}
      onClick={() => {
        props.resetCounter()
      }}
    >
      reset
    </button>
  )
}
