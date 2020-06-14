import React from 'react';
import {Link} from 'crizmas-router';

export default ({controller}) => <div>
  <h3>The child route</h3>
  <div className="row">
    <Link to="/nested-routes">Go to parent route</Link>
  </div>
  <div className="row">
    The child route renders the child controller state. Because the controller is instantiated
    when entering the child route, the state is lost when refreshing/leaving this child route.
    The state from the parent route is not affected when refreshing the child route.
  </div>
  <div className="row">Number: {controller.count}</div>
  <div className="row">
    <button onClick={() => controller.increment()}>Increment child number</button>
  </div>
  <div className="row">
    <button onClick={() => controller.refresh()}>Refresh child route</button>
  </div>
</div>;
