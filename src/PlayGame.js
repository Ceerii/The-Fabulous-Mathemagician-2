import React from 'react';
import PlayView from './PlayView';
import PropTypes from 'prop-types';
import PlayInput from './PlayInput';
import EndGame from './EndGame';

PlayGame.propTypes = {
  rounds: PropTypes.number,
  timeSpent: PropTypes.number,
  setTimeSpent: PropTypes.func,
};

function PlayGame(props) {
  const sign = ['+', '*'];
  const randomSign = sign[Math.floor(Math.random() * sign.length)];
  const randomFirstNumber = Math.floor(Math.random() * 10);
  const randomSecondNumber = Math.floor(Math.random() * 10);
  const [operator, setOperator]=React.useState(randomSign);
  const [firstNumber, setFirstNumber] = React.useState(randomFirstNumber);
  const [secondNumber, setSecondNumber] = React.useState(randomSecondNumber);
  const [formAnswer, setFormAnswer] = React.useState('');
  const [round, setRound] = React.useState(1);
  const [timeSpent, setTimeSpent] = React.useState(0);
  const [endGame, setEndGame] = React.useState(false);

  function setGameVariables() {
    setFirstNumber(Math.floor(Math.random() * 10));
    setSecondNumber(Math.floor(Math.random() * 10));
    setOperator(sign[Math.floor(Math.random() * sign.length)]);
    setFormAnswer('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validateAnswer = eval(
        `${parseInt(firstNumber)} ${operator} ${parseInt(secondNumber)}`);
    if (validateAnswer === parseInt(formAnswer) &&
      round < parseInt(props.rounds)) {
      setRound((previousRound) => previousRound + 1);
      setGameVariables();
    } else if (
      validateAnswer === parseInt(formAnswer) &&
      round === parseInt(props.rounds)) {
      setRound(1);
      setTimeSpent(Date.now() - props.timeSpent);
      setEndGame(true);
    }
  }
  return (
    <div className='play-flex'>
      {!endGame ? <><PlayView
        firstNumber={firstNumber}
        secondNumber={secondNumber} operator={operator}/>
      <form onSubmit={(e) => handleSubmit(e)}>
        <PlayInput formAnswer={formAnswer} setFormAnswer={setFormAnswer}/>
      </form>  </> : <EndGame timeSpent={timeSpent}/>}
    </div>
  );
}

export default PlayGame;
