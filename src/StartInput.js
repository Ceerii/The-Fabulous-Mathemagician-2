import React from 'react';
import PropTypes from 'prop-types';

StartInput.propTypes = {
  setHasError: PropTypes.func,
  setFormResponse: PropTypes.func,
  hasError: PropTypes.bool,
  formResponse: PropTypes.object,
};

function StartInput(props) {
  function handleChange(event) {
    if (event.target.value === ''||
    event.target.value.trim() < 1||
    event.target.value.trim() > 20) {
      props.setHasError(true);
    } else {
      props.setHasError(false);
    }
    const {name, value} = event.target;
    props.setFormResponse((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  }


  return (
    <div className='start-input-flex'>
      <input type='number'
        min={1}
        max={20}
        autoComplete='off'
        name='startInput'
        id='startInput'
        className={props.hasError ? 'error-input start-input' : 'start-input'}
        value={props.formResponse.startInput}
        onChange={handleChange}/>
      <label>Rounds</label>
    </div>
  );
}

export default StartInput;
