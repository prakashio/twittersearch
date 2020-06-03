import React from 'react';
import styled from 'styled-components';

import { Input } from './utils';

const SearchWrapper = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
`;

const SearchInput = () => {
  return (
    <SearchWrapper>
      <Input />
    </SearchWrapper>
  );
};

export default SearchInput;
