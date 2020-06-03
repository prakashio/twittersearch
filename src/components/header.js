import React from 'react';
import styled from 'styled-components';
import SearchInput from './searchInput';
import Title from './title';
import { Button } from './utils';

const HeaderWrapper = styled.header`
  border-bottom: 1px solid #efefef;
  display: flex;
  position: absolute;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

const Header = () => (
  <HeaderWrapper>
    <Title />
    <SearchInput />
    <Button>Search</Button>
  </HeaderWrapper>
);

export default Header;
