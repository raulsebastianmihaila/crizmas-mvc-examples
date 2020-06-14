import Mvc from 'crizmas-mvc';
import Form, {validation} from 'crizmas-form';

export const takenUsernames = ['John', 'Sarah'];

export default Mvc.controller(function AsyncValidationRouteController() {
  const form = new Form({
    children: [
      {
        name: 'username',
        validate: validation(
          validation.required(),
          validation.async((value) =>
            mockServerCall(
              1000,
              () => takenUsernames.includes(value)
                ? 'Username is taken'
                : null)))
      },
      {
        name: 'password',
        validate: validation(
          validation.required(),
          validation.validate(
            value => value && value.length < 6 ? 'The password is too short' : null,
            {events: ['blur']}))
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
