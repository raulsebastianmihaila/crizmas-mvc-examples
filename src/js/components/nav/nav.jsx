import React from 'react';
import {Link} from 'crizmas-router';

export default () => <div className="nav">
  <div className="home-link">
    <Link to="/">home</Link>
  </div>
  <div>
    <Link to="/mvc">mvc</Link>
  </div>
  <div>
    <Link to="/pending-state">pending state</Link>
  </div>
  <div>
    <Link to="/simple-form">simple form</Link>
  </div>
  <div>
    <Link to="/form-with-model">form with model</Link>
  </div>
  <div>
    <Link to="/async-validation">async validation</Link>
  </div>
  <div>
    <Link to="/nested-routes">nested routes</Link>
  </div>
  <div>
    <Link to="/dancing-registration">wizard</Link>
  </div>
  <div>
    <Link to="/scroll-virtualization">scroll virtualization</Link>
  </div>
</div>;
