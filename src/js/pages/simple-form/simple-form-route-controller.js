import {controller} from 'crizmas-mvc';
import Form, {validation, required, minLength, min, max, validate} from 'crizmas-form';

export default controller(function SimpleFormRouteController() {
  const form = new Form({
    children: [
      {
        name: 'name',
        validate: validation(
          required(),
          minLength(3),
          lettersAndSpacesValidation())
      },
      {
        name: 'age',
        validate: validation(required(), min(15), max(200))
      },
      {
        name: 'hobbies',
        children: [],
        validate: ({input}) =>
          input.root.isSubmitted && !input.children.length ? 'Must have hobbies' : null
      }
    ],

    actions: {
      submit() {
        ctrl.formResult = JSON.stringify(form.getResult(), null, 2);
      }
    }
  });

  const ctrl = {
    form,
    formResult: null
  };

  ctrl.addHobbyRow = () => {
    form.get('hobbies').add({
      validate: validation(required(), lettersAndSpacesValidation())
    });
  };

  return ctrl;
});

const lettersAndSpacesValidation = () => {
  return validate(({input}) => {
    const value = input.getValue();

    if (value && !value.match(/^[a-zA-Z ]*$/)) {
      return 'Must contain only letters'
    }
  });
};
