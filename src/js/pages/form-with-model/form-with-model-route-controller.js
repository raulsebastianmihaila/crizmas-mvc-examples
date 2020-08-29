import Mvc from 'crizmas-mvc';
import Form, {validation} from 'crizmas-form';

import {Schedule, Course} from './model';

export default Mvc.controller(function FormWithModelRouteController() {
  const schedule = new Schedule();
  const ctrl = {
    form: null,
    formResult: null
  };

  const init = () => {
    ctrl.form = new Form({
      children: [
        {
          name: 'courses',
          children: schedule.courses.map(getCourseInput),
          validate: ({event, input}) =>
            (event === 'submit' || event !== 'init' && ctrl.form.isSubmitted)
              && !input.children.length
                ? 'Must add course'
                : null
        }
      ],

      actions: {
        submit: () => {
          ctrl.formResult = JSON.stringify(schedule, null, 2);
        }
      }
    });
  };

  const getCourseInput = (course) => ({
    children: [
      {
        name: 'course',
        getValue: () => course.name,
        setValue: (name) => course.setName(name),
        validate: validation(
          validation.required(),
          () => schedule.hasDuplicates(course.name) ? 'Duplicate' : null,
          validateOnBlur(({input}) => Course.validateName(input.getValue())))
      },
      {
        name: 'startTime',
        getValue: () => course.startTime,
        setValue: (time) => course.setStartTime(time),
        validate: validation(
          validation.required(),
          validateOnBlur(() => course.validateStartTime()),
          ({input, target, event}) =>
            event === 'submit' || event === 'init'
              || event === 'blur' && target === input.parent.get('endTime')
                ? course.validateChronology()
                : null)
      },
      {
        name: 'endTime',
        getValue: () => course.endTime,
        setValue: (time) => course.setEndTime(time),
        validate: validation(
          validation.required(),
          validateOnBlur(() => course.validateEndTime()),
          ({input, target, event}) =>
            event === 'submit' || event === 'init'
              || event === 'blur' && target === input.parent.get('startTime')
                ? course.validateChronology()
                : null)
      }
    ]
  });

  ctrl.addCourseRow = () => {
    const course = schedule.addCourse();

    ctrl.form.get('courses').add(getCourseInput(course));
  };

  ctrl.removeCourseRow = (index) => {
    schedule.removeCourse(index);
    ctrl.form.get('courses').children[index].remove();
  };

  init();

  return ctrl;
});

const validateOnBlur = (validationFunc) => {
  let error;

  return ({input, event, target}) => {
    const validationResult = validationFunc({input, target});

    if (!validationResult) {
      error = null;
    } else if (event === 'submit' || event === 'init' || target === input && event === 'blur') {
      error = validationResult;
    }

    return error;
  };
};