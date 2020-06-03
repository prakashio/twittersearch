import React from 'react';
import { SearchInput, Layout } from '../components';

const App = () => (
  <Layout showHeader={false}>
    <h1>Twitter Search</h1>
    <SearchInput />
  </Layout>
);

export default App;
