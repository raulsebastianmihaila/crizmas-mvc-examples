import React from 'react';

export default ({controller}) => <div>
  <div className="row">
    This tab renders the model state. The state is preserved when other tabs are activated,
    as well as when the route is changed.
  </div>
  <div className="row">
    A model can however be instantiated, for instance, in the context of a route controller,
    and get lost when the route is changed.
  </div>
  <div className="row">Number: {controller.model.count}</div>
  <div className="row">
    <button onClick={() => controller.incrementModelCount()}>Increment</button>
  </div>
</div>;
