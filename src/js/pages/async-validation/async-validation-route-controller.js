import {controller} from 'crizmas-mvc';
import Form, {validation, required, async, validate} from 'crizmas-form';

export const takenUsernames = ['John', 'Sarah'];

export default controller(function AsyncValidationRouteController() {
  const form = new Form({
    children: [
      {
        name: 'username',
        validate: validation(
          required(),
          async((value) => value
            && mockServerCall(
              1000,
              () => takenUsernames.includes(value)
                ? 'Username is taken'
                : null)))
      },
      {
        name: 'password',
        validate: validation(
          required(),
          validate(({input}) => {
            const value = input.getValue();

            return value && value.length < 6 ? 'The password is too short' : null
          }))
      }
    ],

    actions: {
      submit: () => {
        ctrl.formResult = JSON.stringify(form.getResult(), null, 2)
      }
    }
  });

  const ctrl = {
    form,
    takenUsernames,
    formResult: null
  };

  return ctrl;
});

const mockServerCall = (delay, getResult) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getResult()), delay);
  });
};
