import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Twitter } from '../assets';
import { SearchInput, Layout } from '../components';
import { Button } from '../components/utils';

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15%;
  width: 100vw;
  height: 100vh;
`;

const App = props => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    props.history.push(`/tweets?q=${value}`);
  };

  return (
    <Layout showHeader={false}>
      <MainWrapper>
        <h1>
          Twitter <Image src={Twitter} alt="logo" /> Search
        </h1>
        <SearchInput
          value={value}
          setValue={setValue}
          handleSearch={handleSearch}
        />
        <Button onClick={handleSearch}>Search</Button>
      </MainWrapper>
    </Layout>
  );
};

export default withRouter(App);
