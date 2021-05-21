export type IncButtonPropsType = {
  incrementCounter: () => void
  stopInc: boolean
}

export function IncButton (props: IncButtonPropsType) {
  return (
    <button
      className={props.stopInc ? 'incButtonStop' : 'incButton'}
      onClick={() => {
        props.incrementCounter()
      }}
    >
      inc
    </button>
  )
}
