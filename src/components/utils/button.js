import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 40px;
  margin: 10px;
  background-color: #0072ff;
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: #0055d4;
  }
`;

export default Button;
