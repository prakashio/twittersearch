import React, { useState } from 'react';
import styled from 'styled-components';
import Suggestions from './suggestions';
import { Input } from './utils';

const SearchWrapper = styled.div`
  position: relative;
  margin: 0;
`;

const SearchInput = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [timer, setTimer] = useState(null);

  const handleChange = ({ target }) => {
    const username = target.value;

    if (timer !== null) {
      setTimer(null);
      clearTimeout(timer);
    }

    if (username) {
      const timerValue = setTimeout(() => {
        setSuggestions([
          {
            screenName: 'Paras',
            name: 'paras',
          },
          {
            screenName: 'Paras',
            name: 'paras',
          },
          {
            screenName: 'Paras',
            name: 'paras',
          },
        ]);
      }, 500);
      setTimer(timerValue);
    } else {
      setSuggestions([]);
    }

    setTimer(timer);
    setValue(target.value);
  };

  return (
    <SearchWrapper>
      <Input value={value} onChange={handleChange} />
      <Suggestions suggestions={suggestions} />
    </SearchWrapper>
  );
};

export default SearchInput;
