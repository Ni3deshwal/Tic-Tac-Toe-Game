import React from 'react'
import sr from "../Score/Score.module.css"

function Score({xscore,oscore,tied}) {
  return (
    <div className={sr.score}>
      <span class={sr.x_score}>Sourav-{xscore}</span>
      <span className={sr.o_score}>Nitin-{oscore}</span>
      <span className={sr.tied}>Tie-{tied}</span>
    </div>
  )
}

export default Score