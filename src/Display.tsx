import React, { useState } from 'react'

export type DisplayPropsType = {
  counter: number
  error: boolean
}

export function Display (props: DisplayPropsType) {
  //BLL

  //UI
  return (
    <div className={props.error ? 'displayError' : 'display'}>
      {props.counter}
    </div>
  )
}
