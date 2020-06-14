import React from 'react';

export default ({controller}) => <div>
  <div className="row">Note that the controller for this page is a singleton and so when we change
  the route the state is preserved. You can see this if you initiate the long running cancellable
  operation, go to a different route and then come back.</div>

  <div className="row">
    <button onClick={() => controller.firstOperation()}
      disabled={controller.isPending}>first operation</button>
    <button onClick={() => controller.secondOperation()}
      disabled={controller.isPending}>second operation</button>
    <button onClick={() => controller.child.firstChildOperation()}
      disabled={controller.isPending}>child operation</button>
  </div>
  <div className="row">
    <button onClick={() => controller.cancellableOperation()}
      disabled={controller.isPending}>cancellable operation</button>
    <button onClick={() => controller.cancelCancellableOperation()}>
      cancel the cancellable operation</button>
    <button onClick={controller.firstOperation}
      disabled={controller.isPending}>wrong operation call</button>
  </div>

  {controller.isPending && <div>An operation is pending.</div>}

  {controller.pending.has('secondOperation') && <div>The second operation is pending.
    (We can check if a specific operation is pending.)</div>}

  {controller.child.isPending && <div>Child is pending.</div>}

  <div className="row">
    <button onClick={() => controller.child.firstChildOperation()}>first child operation</button>
    <button onClick={() => controller.child.secondChildOperation()}>second child operation</button>
    <button onClick={() => controller.child.bothChildOperations()}>both child operations</button>
  </div>
  {controller.child.pending.has('firstChildOperation')
    && <div className="row">The first child operation is pending.</div>}
  {controller.child.pending.has('secondChildOperation')
    && <div className="row">The second child operation is pending.</div>}
</div>;
