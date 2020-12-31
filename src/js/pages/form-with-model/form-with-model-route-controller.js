import {controller} from 'crizmas-mvc';
import Form, {validation, required, validate} from 'crizmas-form';

import {Schedule, Course} from './model';

export default controller(function FormWithModelRouteController() {
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
          validate: ({input}) =>
            input.root.isSubmitted && !input.children.length ? 'Must add course' : null
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
          required(),
          () => schedule.hasDuplicates(course.name) ? 'Duplicate' : null,
          validateWithInit(({input}) => Course.validateName(input.getValue())))
      },
      {
        name: 'startTime',
        getValue: () => course.startTime,
        setValue: (time) => course.setStartTime(time),
        validate: validation(
          required(),
          validateWithInit(() => course.validateStartTime()),
          validateWithInitAndRelated(() => course.validateChronology(), 'endTime'))
      },
      {
        name: 'endTime',
        getValue: () => course.endTime,
        setValue: (time) => course.setEndTime(time),
        validate: validation(
          required(),
          validateWithInit(() => course.validateEndTime()),
          validateWithInitAndRelated(() => course.validateChronology(), 'startTime'))
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

const validateWithInit = (validationFunc) => {
  return validate(
    validationFunc,
    {
      events: ['init', 'blur'],
      target: ({input, event}) => event === 'init' ? input.root : input
    })
};

const validateWithInitAndRelated = (validationFunc, relatedSiblingKey) => {
  return validate(
    validationFunc,
    {
      events: ['init', 'blur'],
      target: ({input, event}) =>
        event === 'init' ? input.root : input.parent.get(relatedSiblingKey)
    });
};
