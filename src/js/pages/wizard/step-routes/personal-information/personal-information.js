import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'crizmas-components';

const PersonalInformation = ({
  controller: {
    stepController: {form},
    wizardController
  }
}) => {
  return <form onSubmit={(e) => submit(form, e)}>
    <h3>Personal information</h3>
    <div className="row">
      <label>First name:</label>
      <Input {...form.get('firstName')} />
    </div>
    <div className="row">
      <label>Last name:</label>
      <Input {...form.get('lastName')} />
    </div>
    <div className="row">
      <label>Email:</label>
      <Input {...form.get('email')} />
    </div>
    <div className="row">
      <label>Phone:</label>
      <Input {...form.get('phone')} />
    </div>
    <div className="row">
      <button type="button" onClick={wizardController.goToPreviousStep}>previous</button>
      <button>next</button>
    </div>
  </form>;
};

PersonalInformation.propTypes = {
  controller: PropTypes.object.isRequired
};

export default PersonalInformation;

const submit = (form, e) => {
  e.preventDefault();
  form.submit();
};
