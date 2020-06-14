import React from 'react';
import PropTypes from 'prop-types';

const Prediction = ({
  controller: {
    wizardController
  }
}) => {
  return <div>
    <h3>AI prediction</h3>
    <div className="row">Based on your dancing preferences we predict you will be
    a great dancer.</div>
    <div className="row">
      <button onClick={wizardController.goToPreviousStep}>previous</button>
      <button onClick={wizardController.goToNextStep}>next</button>
    </div>
  </div>;
};

Prediction.propTypes = {
  controller: PropTypes.object.isRequired
};

export default Prediction;
