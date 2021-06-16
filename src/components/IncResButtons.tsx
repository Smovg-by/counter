type IncResButtonsPropsType = {
  incrementHandler: () => void
  resetHandler: () => void
  incrementDisabled: boolean
  resetDisabled: boolean
}

export function IncResButtons (props: IncResButtonsPropsType) {
  // BLL

  //UI
  return (
    <div className={'buttonContainer'}>
      <button
        className={props.incrementDisabled ? 'button + disabled' : 'button'}
        onClick={props.incrementHandler}
        disabled={props.incrementDisabled}
      >
        inc
      </button>
      <button
        className={props.resetDisabled ? 'button + disabled' : 'button'}
        onClick={props.resetHandler}
        disabled={props.resetDisabled}
      >
        res
      </button>
    </div>
  )
}
