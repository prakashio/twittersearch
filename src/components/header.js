import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
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

const Header = props => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    props.history.push(`/tweets?q=${value}`);
  };
  return (
    <HeaderWrapper>
      <Title />
      <SearchInput
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
      />
      <Button>Search</Button>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
