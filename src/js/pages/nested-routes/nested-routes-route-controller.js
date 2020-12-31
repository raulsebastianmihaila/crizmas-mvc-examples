import {controller} from 'crizmas-mvc';

export default controller(class NestedRoutesRouteController {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }
});
