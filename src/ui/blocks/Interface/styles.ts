import styled from '@emotion/styled';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Error = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.highlight};
  margin: 2rem 0;
`;

export const Success = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  margin: 2rem 0;
  font-size: 2rem;
`;

export const AlertSelector = styled.div`
  margin-top: 4rem;
`;
