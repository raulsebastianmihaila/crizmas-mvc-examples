import React from 'react';
import {Link} from 'crizmas-router';

export default ({controller, children}) => <div>
  <h3>The parent route</h3>
  {!children && <div className="row">
    <Link to="/nested-routes/child-route">Go to child route</Link>
  </div>}
  <div className="row">
    The parent route renders the parent controller state. Because the controller is instantiated
    when entering the parent route, the state is lost when leaving this parent route.
    The state from the parent route is not affected when refreshing the child route.
  </div>
  <div className="row">Number: {controller.count}</div>
  <div className="row">
    <button onClick={() => controller.increment()}>Increment parent number</button>
  </div>
  <div className="row">{children}</div>
</div>;
