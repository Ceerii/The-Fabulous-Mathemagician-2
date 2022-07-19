import React from 'react';
import PropTypes from 'prop-types';


PlayInput.propTypes = {
  formAnswer: PropTypes.string,
  setFormAnswer: PropTypes.func,
};

function PlayInput(props) {
  function handleChange(event) {
    props.setFormAnswer(event.target.value.toString());
  }
  return (
    <>
      <input
        type='number'
        autoComplete='off'
        name='startInput'
        id='startInput'
        className='input-box'
        value={props.formAnswer}
        onChange={handleChange} />
    </>
  );
}

export default PlayInput;
