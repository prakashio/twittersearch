import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
          <Link to={`/tweets?username=${user.screenName}`}>
            <li key={user.screenName}>{user.name}</li>
          </Link>
        ))}
      </List>
    )
  );
};

export default Suggestions;
