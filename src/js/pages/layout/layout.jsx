import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../../components/nav/nav';

const Layout = ({children}) => <div>
  <div className="layout__header">
    <h1 className="layout__title">
      <a
        href="http://raulsebastianmihaila.github.io/crizmas-mvc-docs"
        target="_blank"
        rel="noopener"
        className="logo"><span className="logo__text">crizmas-mvc</span></a> examples
    </h1>
    <h3 className="layout__subtitle">
      <a
        href="https://github.com/raulsebastianmihaila/crizmas-mvc-examples"
        target="_blank"
        rel="noopener">Repo</a>
    </h3>
    <div>More examples:</div>
    <div><a href="https://raulsebastianmihaila.github.io/crizmas-mvc-realworld-site/"
      rel="noopener" target="_blank">Real world example</a> <a target="_blank" rel="noopener"
      href="https://github.com/raulsebastianmihaila/crizmas-mvc-realworld">(repo)</a></div>
    <div><a href="https://raulsebastianmihaila.github.io/chess/"
      rel="noopener" target="_blank">Chess game</a> <a target="_blank" rel="noopener"
      href="https://github.com/raulsebastianmihaila/chess-src">(repo)</a></div>
  </div>
  <div className="layout__body">
    <Nav />
    <div>{children}</div>
  </div>
</div>;

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
