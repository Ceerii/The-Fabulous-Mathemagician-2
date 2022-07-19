import React from 'react';
import PropTypes from 'prop-types';


PlayView.propTypes = {
  firstNumber: PropTypes.number,
  operator: PropTypes.string,
  secondNumber: PropTypes.number,
};

function PlayView(props) {
  return (
    <>
      <span className='number'>{props.firstNumber}</span>
      <span className='operator'>{props.operator}</span>
      <span className='number'>{props.secondNumber}</span>
      <span className='operator'>=</span>
    </>
  );
}

export default PlayView;

