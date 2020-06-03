import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Overlay } from './utils';

const List = styled.ul`
  list-style: none;
  z-index: 9999;
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
  const { suggestions, setSuggestions } = props;

  return (
    suggestions.length > 0 && (
      <>
        <Overlay onClick={() => setSuggestions([])}></Overlay>
        <List>
          {suggestions.map(user => (
            <Link to={`/tweets?username=${user.screenName}`}>
              <li key={user.screenName}>{user.name}</li>
            </Link>
          ))}
        </List>
      </>
    )
  );
};

export default Suggestions;
