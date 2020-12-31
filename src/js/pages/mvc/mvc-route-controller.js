import {controller} from 'crizmas-mvc';

import model from './model';

export default controller(class MvcRouteController {
  constructor() {
    this.count = 0;
    this.model = model;
  }

  increment() {
    this.count += 1;
  }

  incrementModelCount() {
    this.model.increment();
  }
});
