import React from 'react'
import { useState } from "react";

const InputComp = ({ph, lbl, handler}) => {
  return (
    <>
    <label> {lbl} </label>
    <input type="text" placeholder={ph} onChange={handler}/>
    </>
  )
}

export default InputComp