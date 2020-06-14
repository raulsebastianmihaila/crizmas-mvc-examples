import React from 'react';
import Wizard from '../../../components/wizard/wizard';

export default ({controller, children}) => {
  return <div>
    <Wizard wizardController={controller.wizardController}>
      {children}
    </Wizard>
    {controller.formResult && <div className="row">
      Result:
      <pre>{controller.formResult}</pre>
    </div>}
    <div className="row">
      This is a wizard in which each step is a route. In order to get to the
      next step by using the next button you have to complete the current step.

      If a step contains a form, in order to be completed, the form needs to be submitted
      successfully. If a step doesn't contain a form, the step is completed by simply being visited.

      You can not jump to a step, by using the step number links, without completing the previous
      steps, unless the step you're jumping to has already been visited. This allows us to complete
      a step with a form, visit the next step, go back to the previous step that contains the form,
      make a change such that the form becomes invalid and jump to the next step
      without fixing the form.

      However, on the last page when we hit submit, if there are any steps that have an invalid
      form we jump to the first one in that category.

      If we try to access a certain step by transitioning programatically to that step,
      if that step hasn't been visited before, we're redirected automatically to the first step
      that has never been completed.

      The step number links at the top of the wizard are active only for the steps that have been
      visited. All the step forms are composed into one single form with which we gather all the
      data when submitting the wizard data on the last step.

      As we navigate through the wizard we don't want the state to be lost, therefore the controller
      for each step is created in the parent route controller. However, once we leave the wizard
      altogether, we want its state to be lost, therefore the parent route controller will be a function controller as well, such that it's instantiated each time it's entered.

      We also want this wizard mechanism to be reusable in other contexts of the application, therefore we use a wizard controller and wizard route controllers to handle this mechanism
      and be able to focus only on implementing each step of the wizard and on putting the pieces
      together in the parent route controller.</div>
  </div>;
};
