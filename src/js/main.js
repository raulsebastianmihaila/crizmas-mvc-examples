import Mvc from 'crizmas-mvc';

import Layout from './pages/layout/layout';
import router from './router';

new Mvc({
  router,
  component: Layout,
  domElement: document.querySelector('#app')
});
