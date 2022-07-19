import React from 'react';
import StartGame from './StartGame';
import PlayGame from './PlayGame';
import '../css/index.css';

function App() {
  const [rounds, setRounds] = React.useState(3);
  const [showGame, setShowGame] = React.useState(false);
  const [timeSpent, setTimeSpent] = React.useState(0);
  return (
    <div className='container'>
      {showGame ?
        <PlayGame
          rounds={rounds}
          timeSpent={timeSpent}
          setTimeSpent = {setTimeSpent}/> :
        <StartGame
          rounds={rounds}
          setRounds={setRounds}
          setShowGame={setShowGame}
          showGame={showGame}
          setTimeSpent={setTimeSpent}/>
      }
    </div>
  );
}

export default App;
