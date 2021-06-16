type setButtonPropsType = {
  setValueHandler: () => void
}

export function SetButton (props: setButtonPropsType) {
  return (
    <div className='buttonContainer'>
      <button className={'button'} onClick={props.setValueHandler}>
        set
      </button>
    </div>
  )
}
