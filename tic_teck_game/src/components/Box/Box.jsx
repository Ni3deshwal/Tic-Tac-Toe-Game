import React from 'react'
import bx from '../Box/Box.module.css'

function Box({value,key,onClick}) {
  return (
    // <button className={value==="X"?`${bx}.x`:`${bx}.o`} key={key} onClick={onClick}>{value}</button>
    // <button className={bx.box} key={key} onClick={onClick}>{value}</button>
    <button className={`${bx.box} ${value === "X"? bx.x: bx.o}`} key={key} onClick={onClick}>{value}</button>
  )
}

export default Box