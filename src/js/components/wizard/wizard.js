import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'crizmas-router';

const Wizard = ({wizardController, children}) => {
  return <React.Fragment>
    {wizardController.steps.map((step, i) =>
      i > wizardController.lastVisitedStepIndex || i === wizardController.currentStepIndex
        ? <span key={i} className="wizard-step">{i + 1}</span>
        : <Link key={i} to={step.path} className="wizard-step">{i + 1}</Link>)}
    {children}
  </React.Fragment>;
};

Wizard.propTypes = {
  wizardController: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Wizard;
