import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from './utils';

const Layout = ({ children, showHeader }) => (
  <>
    {showHeader && (
      <header>
        <h2>Twitter search</h2>
      </header>
    )}
    <main>{children}</main>
    <GlobalStyle />
  </>
);

Layout.defaultProps = {
  showHeader: true,
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  showHeader: PropTypes.bool,
};

export default Layout;
