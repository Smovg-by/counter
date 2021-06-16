type SettingsDisplayPropsType = {
  onChangeHandler: (event: any) => void
}

export function SettingsDisplay (props: SettingsDisplayPropsType) {
  //BLL

  //UI
  return (
    <div className={'display'}>
      <div>
        <span className={'settingsDescription'}>max value</span>
        <input
          name='maxValue'
          type='number'
          className={'inputArea'}
          onChange={props.onChangeHandler}
        />
      </div>
      <div>
        <span className={'settingsDescription'}>start value</span>
        <input
          name='startValue'
          type='number'
          className={'inputArea'}
          onChange={props.onChangeHandler}
        />
      </div>
    </div>
  )
}
