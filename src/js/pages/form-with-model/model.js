export function Schedule() {
  const schedule = {
    courses: [
      new Course({name: 'chemistry', startTime: 13, endTime: 9})
    ]
  };

  schedule.addCourse = () => {
    const course = new Course();

    schedule.courses.push(course);

    return course;
  };

  schedule.removeCourse = (index) => {
    schedule.courses.splice(index, 1);
  };

  schedule.hasDuplicates = (courseName) =>
    !!courseName && schedule.courses.filter((course) => course.name === courseName).length > 1;

  return schedule;
}

export function Course({
  name = null,
  availableInterval = null,
  startTime = null,
  endTime = null
} = {}) {
  const course = {
    name,
    availableInterval,
    startTime,
    endTime
  };

  course.setName = (name) => {
    course.name = name;
    course.availableInterval = availableIntervals.get(name);
  };

  course.setStartTime = (startTime) => {
    course.startTime = startTime;
  };

  course.validateStartTime = () => validateTime(course.startTime, 'Start time');

  const validateTime = (time, timeLabel) => {
    if (time && course.availableInterval
      && (time < course.availableInterval[0] || time > course.availableInterval[1])) {
      return `${timeLabel} must be inside the interval ${
        course.availableInterval[0]} - ${course.availableInterval[1]}`;
    }
  };

  course.setEndTime = (endTime) => {
    course.endTime = endTime;
  };

  course.validateEndTime = () => validateTime(course.endTime, 'End time');

  course.validateChronology = () => course.startTime && course.endTime
    && course.startTime >= course.endTime
      ? 'Start time must be before end time'
      : null;

  return course;
}

Course.validateName = (name) => availableIntervals.has(name)
  ? null
  : 'Course name must be math, history or philosophy';

const availableIntervals = new Map([
  ["math", [8, 12]],
  ["history", [12, 18]],
  ["philosophy", [10, 15]]
]);
