import React from 'react';
import PropTypes from 'prop-types';

EndGame.propTypes = {
  timeSpent: PropTypes.number,
};

function EndGame(props) {
  return (
    <>
      <p className='end-text'>Game Over. Time Spent : {props.timeSpent} ms</p>
    </>
  );
}

export default EndGame;

