import React from 'react';
import PropTypes from 'prop-types';
import StartInput from './StartInput';

StartGame.propTypes = {
  setRounds: PropTypes.func,
  setShow: PropTypes.func,
  setTimeSpent: PropTypes.func,
  setShowGame: PropTypes.func,
};

function StartGame(props) {
  const [hasError, setHasError] = React.useState(false);
  const [formResponse, setFormResponse] = React.useState({startInput: 3});

  function handleSubmit() {
    props.setTimeSpent(Date.now());
    props.setRounds(parseInt(formResponse.startInput));
    props.setShowGame(true);
  }

  return (
    <>
      <p className='start-title'>
        Hi, this is
        <span className='start-name'> Chiamaka&apos;s </span>
        math game, choose your parameters and get to calculating!
      </p>
      <StartInput
        setHasError={setHasError}
        setFormResponse={setFormResponse}
        hasError={hasError}
        formResponse={formResponse}/>
      <button
        className={hasError ? 'disabled start-button' : 'start-button'}
        onClick={handleSubmit} type='button'>Start Game
      </button>
    </>
  );
}

export default StartGame;
