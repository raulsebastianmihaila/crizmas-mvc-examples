import React from 'react';
import {Input} from 'crizmas-components';

export default ({controller: {form, formResult, takenUsernames}}) => {
  const submit = (e) => {
    e.preventDefault();
    form.submit();
  };

  return <div>
    <div className="row">
      The following usernames are taken: {takenUsernames.join(', ')}. Pick an already
      taken username to see the async validation in action.
    </div>
    <form onSubmit={submit}>
      <div className="row">
        <label>Username:</label>
        <Input {...form.get('username')} /> {form.get('username').isPending && 'validating...'}
      </div>

      <div className="row">
        <label>Password:</label>
        <Input {...form.get('password')} type="password" />
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
