import React from 'react';
import styled from 'styled-components';
import { SearchInput, Layout } from '../components';
import { Button } from '../components/utils';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <Layout showHeader={false}>
    <MainWrapper>
      <h1>Twitter Search</h1>
      <SearchInput />
      <Button>Search</Button>
    </MainWrapper>
  </Layout>
);

export default App;
