import React, { useState } from 'react';
import './App.css';
import './tictactoe';
import { Board } from './components/Board';
import { defaultSkins, initialState } from './tictactoe';
import { Scoreboard } from './components/Scoreboard';
import { SkinSelector } from './components/SkinSelector';

function App() {

  const [board, setBoard] = useState(initialState);

  const [skins, setSkins] = useState(defaultSkins)

  return (
    <div className="App">
      <header>
        <Scoreboard board={board} skins={skins}/>
      </header>
      <Board board={board} setBoard={setBoard} skins={skins}/>
      <footer>
        <SkinSelector player={1} skins={skins} setSkins={setSkins}/>
        <button onClick={()=>setBoard(initialState)}>Restart</button> 
        <SkinSelector player={2} skins={skins} setSkins={setSkins}/>
      </footer>
    </div>
  );
}

export default App;
