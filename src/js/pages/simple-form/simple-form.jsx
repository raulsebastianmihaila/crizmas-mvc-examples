import React from 'react';
import {Input} from 'crizmas-components';

export default ({controller, controller: {form, formResult}}) => {
  const submit = (e) => {
    e.preventDefault();
    form.submit();
  };

  const hobbiesInput = form.get('hobbies');

  return <div>
    <form onSubmit={submit}>
      <div className="row">
        <label>Name:</label>
        <Input {...form.get('name')} />
      </div>

      <div className="row">
        <label>Age:</label>
        <Input {...form.get('age')} type="number" />
      </div>

      <div className="row">
        <label>Hobbies:</label>
        <button type="button" onClick={controller.addHobbyRow}>+</button>

        {hobbiesInput.hasErrors && !hobbiesInput.children.length
          && <span className="error">Must have hobbies</span>}

        {hobbiesInput.children.map((hobbyInput, i) => <div key={i} className="row">
          <Input {...hobbyInput} />
          <button type="button" onClick={hobbyInput.remove}>-</button>
        </div>)}
      </div>

      <div className="row">
        <button disabled={form.isSubmitted && form.isBlocked}>submit</button>
      </div>
      {formResult && <div className="row">
        Result:
        <pre>{formResult}</pre>
      </div>}
    </form>
  </div>;
};
