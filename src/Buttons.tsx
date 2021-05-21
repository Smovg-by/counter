export type ButtonsPropsType = {
  resetCounter: () => void
  stopRes?: boolean
  incrementCounter: () => void
  stopInc?: boolean
  buttons: Array<ButtonsType>
}

export type ButtonsType = {
  id: number
  title: string
}

export function Buttons (props: ButtonsPropsType) {
  return (
    <div className='buttonContainer'>
      {props.buttons.map(item => {
        if (item.title === 'inc') {
          return (
            <button
              className={props.stopInc ? 'incButtonStop' : 'incButton'}
              onClick={() => {
                props.incrementCounter()
              }}
            >
              {item.title}
            </button>
          )
        }
        if (item.title === 'res') {
          return (
            <button
              className={props.stopRes ? 'resetButtonStop' : 'resetButton'}
              onClick={() => {
                props.resetCounter()
              }}
            >
              {item.title}
            </button>
          )
        }
      })}
    </div>
  )
}
