import React, {useState} from 'react';
import classnames from 'classnames';

export default ({tabs}) => {
  const [currentTabIndex, setTabIndex] = useState(0);

  return <div>
    <div className="tabs__headers">
      {tabs.map((tab, i) => <div
        className={classnames('tabs__header', {'tabs__header--active': i === currentTabIndex})}
        key={i}
        onClick={setTabIndex.bind(null, i)}>
          {tab.header}
        </div>)}
    </div>
    <div className="tabs__content">
      {tabs[currentTabIndex].render()}
    </div>
  </div>
};
