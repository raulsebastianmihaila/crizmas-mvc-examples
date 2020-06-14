// we want the wizard state to get lost once we leave the wizard completely. because of this
// we will use function controllers. however the form state and other state associated with
// each step must not be lost as we walk through the wizard. therefore the forms and the
// the controllers that hold the state for the steps are created in the parent route controller,
// not in the child route controllers. we also want to have a reusable wizard mechanism
// that can be used for multiple wizards, therefore we will use a wizard controller
// and wizard route controllers.

import Mvc from 'crizmas-mvc';
import Form from 'crizmas-form';

import WizardController from '../../../controllers/wizard/wizard';
import DancingPreferencesController
  from '../step-routes/dancing-preferences/dancing-preferences-controller';
import PersonalInformationController
  from '../step-routes/personal-information/personal-information-controller';

export const stepsIds = {
  dancingPreferences: 'dancingPreferences',
  prediction: 'prediction',
  personalInformation: 'personalInformation',
  summary: 'summary'
};

export default Mvc.controller(function DancingRegistrationRouteController() {
  const ctrl = {
    wizardController: null,
    formResult: null
  };

  ctrl.onEnter = ({router}) => {
    init(router);
  };

  const init = (router) => {
    const form = new Form({
      actions: {
        submit: () => {
          ctrl.formResult = JSON.stringify(form.getResult(), null, 2);

          init(router);
          router.transitionTo('/dancing-registration');
        }
      }
    });

    const wizardController = new WizardController({form, router});

    ctrl.wizardController = wizardController;

    const dancingPreferencesController = new DancingPreferencesController(wizardController);
    const personalInformationController = new PersonalInformationController(wizardController);

    form.addChild(dancingPreferencesController.form);
    form.addChild(personalInformationController.form);

    wizardController.registerSteps([
      {
        stepId: stepsIds.dancingPreferences,
        path: '/dancing-registration/dancing-preferences',
        controller: dancingPreferencesController
      },
      {
        stepId: stepsIds.prediction,
        path: '/dancing-registration/prediction',
        controller: null
      },
      {
        stepId: stepsIds.personalInformation,
        path: '/dancing-registration/personal-information',
        controller: personalInformationController
      },
      {
        stepId: stepsIds.summary,
        path: '/dancing-registration/summary',
        controller: null
      }
    ]);
  };

  return ctrl;
});
