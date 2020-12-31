import {controller} from 'crizmas-mvc';
import Form, {validation, required, minLength, maxLength, validate} from 'crizmas-form';

const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default controller(function PersonalInformationController(wizardController) {
  const ctrl = {
    form: new Form({
      name: 'personalInformation',
      children: [
        {
          name: 'firstName',
          validate: validation(
            required(),
            minLength(3),
            maxLength(50))
        },
        {
          name: 'lastName',
          validate: validation(
            required(),
            minLength(3),
            maxLength(50))
        },
        {
          name: 'email',
          validate: validation(
            required(),
            maxLength(50),
            validate(({input}) => {
              const value = input.getValue();

              return value && !emailRegExp.test(value) && 'Invalid email';
            }))
        },
        {
          name: 'phone',
          validate: validation(
            required(),
            validate(({input}) => {
              const value = input.getValue();

              return value && !/^\d{6,20}$/.test(value) && 'Invalid phone';
            }))
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
