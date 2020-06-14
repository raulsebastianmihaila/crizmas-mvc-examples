import Mvc from 'crizmas-mvc';

export default Mvc.controller(class ChildRouteController {
  constructor() {
    this.count = 0;
    this.routeFragment = null;
  }

  onEnter({routeFragment}) {
    alert('Entering child route');

    this.routeFragment = routeFragment;
  }

  onLeave() {
    alert('Leaving child route')
  }

  increment() {
    this.count += 1;
  }

  refresh() {
    this.routeFragment.refresh();
  }
});
