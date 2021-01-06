import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const setDefault = () => {
    let defaultFields = {}
    props.fields.forEach((field) => {
      if (field.key) {
        defaultFields[field.key] = '';
      }
    })
    return defaultFields
  }

  const [formFields, setFormFields] = useState(setDefault());

  
  }


  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">
          <div>
            <input placeholder="adjective1" type="text" onChange={onInputChange} value={formFields.adj1} />
          </div>
          <div>
            <input placeholder="noun1" type="text" onChange={onInputChange} value={formFields.noun1} />
          </div>
          <div>
            <input placeholder="adverb" type="text" onChange={onInputChange} value={formFields.adv} />
          </div>
          <div>
            <input placeholder="adjective2" type="text" onChange={onInputChange} value={formFields.adj2} />
          </div>
          <div>
            <input placeholder="noun2" type="text" onChange={onInputChange} value={formFields.noun2} />
          </div>
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" onSubmit={sendSubmission} className="PlayerSubmissionForm__submit-btn" />
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
