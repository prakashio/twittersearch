import React from 'react';
import styled from 'styled-components';

import { Input } from './utils';

const SearchWrapper = styled.div`
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
