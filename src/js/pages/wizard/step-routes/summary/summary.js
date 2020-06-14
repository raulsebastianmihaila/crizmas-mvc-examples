import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({
  controller: {
    wizardController
  }
}) => {
  const {personalInformation, dancingPreferences} = wizardController.form.getResult();

  return <div>
      <h3>Summary</h3>
      <h4>Personal information</h4>
      <div className="row">
        <label>First name:</label> {personalInformation.firstName}
      </div>
      <div className="row">
        <label>Last name:</label> {personalInformation.lastName}
      </div>
      <div className="row">
        <label>Email:</label> {personalInformation.email}
      </div>
      <div className="row">
        <label>Phone:</label> {personalInformation.phone}
      </div>
      <h4>Dancing preferences marks</h4>
      <div className="row">
        <label>Bachata:</label> {dancingPreferences.bachata}
      </div>
      <div className="row">
        <label>Salsa:</label> {dancingPreferences.salsa}
      </div>
      <div className="row">
        <label>Kizomba:</label> {dancingPreferences.kizomba}
      </div>
      <div className="row">
        <button onClick={wizardController.goToPreviousStep}>previous</button>
        <button onClick={wizardController.submit}>submit</button>
      </div>
    </div>;
};

Summary.propTypes = {
  controller: PropTypes.object.isRequired
};

export default Summary;
