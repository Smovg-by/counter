type SettingsDisplayPropsType = {
  onChangeHandler: (event: any) => void
  maxValue: number
  startValue: number
}

export function SettingsDisplay (props: SettingsDisplayPropsType) {
  //BLL

  //UI
  return (
    <div className={'display'}>
      <div>
        <span className={'settingsDescription'}>max value</span>
        <input
          value={props.maxValue}
          name='maxValue'
          type='number'
          className={'inputArea'}
          onChange={props.onChangeHandler}
        />
      </div>
      <div>
        <span className={'settingsDescription'}>start value</span>
        <input
          value={props.startValue}
          name='startValue'
          type='number'
          className={'inputArea'}
          onChange={props.onChangeHandler}
        />
      </div>
    </div>
  )
}
