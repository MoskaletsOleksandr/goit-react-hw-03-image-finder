import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  min-width: 100px;
  width: 150px;
  height: 32px;

  border: none;
  border-radius: 4px;

  transition: background-color 500ms, transform 500ms;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #33cc33;
    transform: scale(1.1);
  }
`;

export const ButtonLabel = styled.span`
`;
