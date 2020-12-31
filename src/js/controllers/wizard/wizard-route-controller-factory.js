import {controller} from 'crizmas-mvc';

export default function WizardRouteControllerFactory(stepId) {
  return controller(function WizardRouteController() {
    const ctrl = {
      stepController: null,
      wizardController: null
    };

    ctrl.onEnter = ({routeFragment, router}) => {
      const {wizardController} = routeFragment.parent.controllerObject;

      ctrl.stepController = wizardController.getStepController(stepId);
      ctrl.wizardController = wizardController;

      if (!wizardController.enter(stepId)) {
        return false;
      }

      if (ctrl.stepController && ctrl.stepController.onEnter) {
        return ctrl.stepController.onEnter({routeFragment, router});
      }
    };

    ctrl.onLeave = (...args) => {
      if (ctrl.stepController && ctrl.stepController.onLeave) {
        return ctrl.stepController.onLeave(...args);
      }
    };

    return ctrl;
  });
};
