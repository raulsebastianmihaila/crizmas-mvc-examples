import React from 'react';
import {Input} from 'crizmas-components';

export default ({controller, controller: {form, formResult}}) => {
  const submit = (e) => {
    e.preventDefault();
    form.submit();
  };

  const courses = form.get('courses');

  return <div>
    <form onSubmit={submit}>
      <div className="row">
        <label>Courses:</label>
        <button type="button" onClick={controller.addCourseRow}>+</button>

        {courses.hasErrors && !courses.children.length
          && <span className="error">Must have courses</span>}

        {courses.children.map((courseInput, i) => <div key={i}>
          <div className="row">
            <label>Course name:</label>
            <Input {...courseInput.get('course')} value={courseInput.get('course').getValue()} />
            <button type="button" onClick={() => controller.removeCourseRow(i)}>-</button>
          </div>

          <div className="row">
            <label>Start time:</label>
            <Input
              type="number"
              {...courseInput.get('startTime')}
              value={courseInput.get('startTime').getValue()} />
          </div>

          <div className="row">
            <label>End time:</label>
            <Input
              type="number"
              {...courseInput.get('endTime')}
              value={courseInput.get('endTime').getValue()} />
          </div>
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
