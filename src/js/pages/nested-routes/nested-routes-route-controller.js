import Mvc from 'crizmas-mvc';

export default Mvc.controller(class NestedRoutesRouteController {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }
});
