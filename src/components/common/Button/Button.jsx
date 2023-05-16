import { ButtonStyled, ButtonLabel } from './Button.styled';

export const Button = ({ loadMore, children }) => {
  return (
    <ButtonStyled onClick={loadMore}>
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonStyled>
  );
};
