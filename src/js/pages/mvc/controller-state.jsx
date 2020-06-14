import React from 'react';

export default ({controller}) => <div>
  <div className="row">
    This tab renders the controller state. The state is preserved when other tabs are activated,
    but it's lost once the route is changed.
  </div>
  <div className="row">
    A controller state can however outlive a certain route, depending on how and where
    the controller is defined.
  </div>
  <div className="row">Number: {controller.count}</div>
  <div className="row"><button onClick={() => controller.increment()}>Increment</button></div>
</div>;
