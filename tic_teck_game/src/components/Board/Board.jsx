import React from 'react'
import bd from '../Board/Board.module.css'
import Box from '../Box/Box'

function Board({board,onClick,index}) {
  return (
    <div className={bd.board}> 
        {
            board.map((item,index)=>(
                <Box value={item} key={index} onClick={()=>item===null&&onClick(index)}/>
            ))
        }
        
  
    </div>
  )
}

export default Board