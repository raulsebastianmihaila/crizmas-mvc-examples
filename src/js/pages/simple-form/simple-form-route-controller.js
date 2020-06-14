import Mvc from 'crizmas-mvc';
import Form, {validation} from 'crizmas-form';

export default Mvc.controller(function SimpleFormRouteController() {
  const form = new Form({
    children: [
      {
        name: 'name',
        validate: validation(
          validation.required(),
          validation.minLength(3),
          lettersAndSpacesValidation)
      },
      {
        name: 'age',
        validate: validation(validation.required(), validation.min(15), validation.max(200))
      },
      {
        name: 'hobbies',
        children: [],
        validate: ({event, input}) => (event === 'submit' || event !== 'init' && form.isSubmitted)
          && !input.children.length
            ? 'Must have hobbies'
            : null
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
      validate: validation(validation.required(), lettersAndSpacesValidation)
    });
  };

  return ctrl;
});

const lettersAndSpacesValidation = ({input}) => {
  const value = input.getValue();

  if (value && !value.match(/^[a-zA-Z ]*$/)) {
    return 'Must contain only letters'
  }
};
