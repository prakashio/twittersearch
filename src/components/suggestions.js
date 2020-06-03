import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #efefef;
  width: 100%;
  height: 200px;
  position: absolute;

  li {
    padding: 0;
    margin: 0;
    color: blue;
  }
`;

const Suggestions = props => {
  const { suggestions } = props;

  return (
    suggestions.length > 0 && (
      <List>
        {suggestions.map(user => (
          <li key={user.screenName}>{user.name}</li>
        ))}
      </List>
    )
  );
};

export default Suggestions;
