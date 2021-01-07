import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const showIfSubmitted = () => {
    if (props.isSubmitted) {
      return (
        <div>
          {
            props.submissions.map((submission, index) => {
              return (
                <p key={index}>
                  {submission}
                </p>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ () => { props.revealPoem() } }/>
        </div>
      )
    }
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        <div>
          {showIfSubmitted()}
        </div>
      </section>
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
