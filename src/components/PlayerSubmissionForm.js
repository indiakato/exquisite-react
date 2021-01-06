import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState({
    adj1: '', 
    noun1: '', 
    adv: '', 
    verb1: '', 
    adj2: '', 
    noun2: ''
  });

  const onInputChange = (event) => {
    const newFormFields = {...formFields};
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmitCallback(formFields);
    setFormFields({
      adj1: '', 
      noun1: '', 
      adv: '', 
      verb1: '', 
      adj2: '', 
      noun2: ''
    })
  }


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          <div>
            <input placeholder="1st Adjective" type="text" onChange={onInputChange} value={formFields.adj1} />
          </div>
          <div>
            <input placeholder="1st Noun" type="text" onChange={onInputChange} value={formFields.noun1} />
          </div>
          <div>
            <input placeholder="Adverb" type="text" onChange={onInputChange} value={formFields.adv} />
          </div>
          <div>
            <input placeholder="2nd Adjective" type="text" onChange={onInputChange} value={formFields.adj2} />
          </div>
          <div>
            <input placeholder="2nd Noun" type="text" onChange={onInputChange} value={formFields.noun2} />
          </div>
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" onSubmit={onSubmit} className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
