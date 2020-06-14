import React from 'react';

import Tabs from '../../components/tabs/tabs';
import ComponentState from './component-state';
import ControllerState from './controller-state';
import ModelState from './model-state';

export default ({controller}) => {
  return <div>
    <Tabs tabs={[
      {
        header: 'Component state',
        render: () => <ComponentState />
      },
      {
        header: 'Controller state',
        render: () => <ControllerState controller={controller} />
      },
      {
        header: 'Model state',
        render: () => <ModelState controller={controller} />
      }
    ]} />
  </div>
};
