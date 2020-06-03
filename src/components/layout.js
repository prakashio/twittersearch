import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from './utils';
import Header from './header';

const Layout = ({ children, showHeader }) => (
  <>
    {showHeader && <Header />}
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
