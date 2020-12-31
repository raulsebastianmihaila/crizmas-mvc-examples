import {controller} from 'crizmas-mvc';

export default controller(function WizardController({form, router}) {
  const ctrl = {
    form,
    steps: null,
    lastVisitedStepIndex: null,
    currentStepIndex: null
  };

  ctrl.registerSteps = (steps) => {
    ctrl.steps = steps;
  };

  ctrl.getStepController = (stepId) => ctrl.steps.find((step) => step.stepId === stepId).controller;

  ctrl.enter = (stepId) => {
    const stepIndex = ctrl.steps.findIndex((step) => step.stepId === stepId);

    if (ctrl.lastVisitedStepIndex === null && stepIndex
      || stepIndex > ctrl.lastVisitedStepIndex + 1) {
      goToStep(ctrl.lastVisitedStepIndex || 0);

      return false;
    }

    if (ctrl.lastVisitedStepIndex !== null && stepIndex === ctrl.lastVisitedStepIndex + 1) {
      const prevStep = ctrl.steps[ctrl.lastVisitedStepIndex];

      if (prevStep?.controller?.form.isSubmitted === false) {
        goToStep(ctrl.lastVisitedStepIndex);

        return false;
      }

      ctrl.lastVisitedStepIndex = stepIndex;
    } else if (ctrl.lastVisitedStepIndex === null) {
      ctrl.lastVisitedStepIndex = stepIndex;
    }

    ctrl.currentStepIndex = stepIndex;

    return true;
  };

  ctrl.goToNextStep = () => goToStep(ctrl.currentStepIndex + 1);

  const goToStep = (stepIndex) => {
    router.transitionTo(ctrl.steps[stepIndex].path);
  };

  ctrl.goToPreviousStep = () => goToStep(ctrl.currentStepIndex - 1);

  ctrl.submit = () => {
    form.submit();

    if (form.hasErrors) {
      for (const step of ctrl.steps) {
        if (step.controller?.form?.hasErrors) {
          return void router.transitionTo(step.path);
        }
      }
    }
  };

  return ctrl;
});
