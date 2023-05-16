import styled from '@emotion/styled';

export const Bar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  // z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: block;
  max-width: 50 px;
  margin-top: 10px;
  padding: 10px;

  border: none;
  border-radius: 5px;
  display: block;
  box-shadow: inset 0px 0px 8px 0px #33333347;
`;
