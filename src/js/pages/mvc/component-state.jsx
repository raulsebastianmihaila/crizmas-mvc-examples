import React, {useState} from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return <div>
    <div className="row">
      This tab renders a component that holds internal state. The state is lost once a different
      tab is activated.
    </div>
    <div className="row">Number: {count}</div>
    <div className="row"><button onClick={setCount.bind(null, count + 1)}>Increment</button></div>
  </div>
};
