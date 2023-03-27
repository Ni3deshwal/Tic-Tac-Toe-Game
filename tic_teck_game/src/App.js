
import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Score from './components/Score/Score';

function App() {
  const [board,setBoard]=useState(Array(9).fill(null))
  const[xplay,setXplay]=useState(true);
  const[xscore,setXscore]=useState(0);
  const[oscore,setOscore]=useState(0);
  const[tied,setTied]=useState(0);
  const[gameover,setGameover]=useState(false);
  

  const wincondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,5],
    [0,3,6],
    [1,4,7],
    [2,5,8],
  ]

  const handleboxclick=(key)=>{

    const updatedboard=board.map((value,index)=>{
      if(index===key) return xplay===true?"X":"O";

      else return value; 
    });
  
  
  setXplay(!xplay);  
  setBoard(updatedboard); 
  const winner=checkwinner(updatedboard);
  if(winner)
  {
    if(winner==="X"){ 
      setXscore(xscore+1);
      setGameover(true);
    }
    
    else {
      setOscore(oscore+1);
      setGameover(true);
    }
  }
  let filled=true;
  updatedboard.map((item)=>{
    if(item===null) filled=false;
  })
  if(filled && winner!=="X" && winner!=="O")
  {
    filled=true;
    
    setTied(tied+1);
  }

  };
  const checkwinner=(updatedboard)=>{
    for(let i=0;i<wincondition.length;i++)
    {
      const [x,y,z]=wincondition[i];

      if(updatedboard[x]&& 
        updatedboard[x]===updatedboard[y]&&
        updatedboard[y]===updatedboard[z])
        {
          return updatedboard[x];
        }

    }
  }
  const reset=()=>{
    setGameover(false);
    setBoard(Array(9).fill(null))
  }
  const game_restart=()=>{
    setGameover(false);
    setBoard(Array(9).fill(null));
    setXscore(0);
    setOscore(0);
    setTied(0);
  }



  return (
    <div className="App">
    <Score xscore={xscore} oscore={oscore} tied={tied}/>
     <Board board={board} onClick={gameover===true?reset:handleboxclick} />
     <button onClick={reset} className='button'>Play Again</button>
     <button className='button' onClick={game_restart}>Restart Game</button>
    </div>
  );
}

export default App;
