import {controller} from 'crizmas-mvc';
import Form, {validation, required, validate} from 'crizmas-form';

export default controller(function DancingPreferencesController(wizardController) {
  const ctrl = {
    form: new Form({
      name: 'dancingPreferences',
      children: [
        {
          name: 'bachata',
          validate: validation(
            required(),
            markValidationFunc())
        },
        {
          name: 'salsa',
          validate: validation(
            required(),
            markValidationFunc())
        },
        {
          name: 'kizomba',
          validate: validation(
            required(),
            markValidationFunc())
        }
      ],
      actions: {
        submit: () => {
          wizardController.goToNextStep();
        }
      }
    })
  };

  return ctrl;
});

const markValidationFunc = () => {
  return validate(({input}) => {
    const value = input.getValue();

    return value < 1 || value > 5 ? 'Mark must be between 1 and 5' : null;
  });
};
