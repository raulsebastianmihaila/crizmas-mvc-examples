import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'crizmas-components';

const DancingPreferences = ({
  controller: {
    stepController: {form}
  }
}) => {
  return <form onSubmit={(e) => submit(form, e)}>
    <h3>Dancing preferences</h3>
    <h4>Give a mark from 1 to 5 for each dancing type.</h4>
    <div className="row">
      <label>Bachata:</label>
      <Input {...form.get('bachata')} type="integer" />
    </div>
    <div className="row">
      <label>Salsa:</label>
      <Input {...form.get('salsa')} type="integer" />
    </div>
    <div className="row">
      <label>Kizomba:</label>
      <Input {...form.get('kizomba')} type="integer" />
    </div>
    <div className="row">
      <button>next</button>
    </div>
  </form>;
};

DancingPreferences.propTypes = {
  controller: PropTypes.object.isRequired
};

export default DancingPreferences;

const submit = (form, e) => {
  e.preventDefault();
  form.submit();
};
