import styled from '@emotion/styled';

import { GlobalStyles } from '@ui/theme';

export const StyledHeader = styled.header`
  width: 100%;
  height: 8rem;
  padding: 2rem;
  transition: 1s color linear, 1s background-color linear;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;

export const InnerWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  ${GlobalStyles.PageWrapper}
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-left: 3rem;
`;

export default StyledHeader;
