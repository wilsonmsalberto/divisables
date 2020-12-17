import styled from '@emotion/styled';

export const ThemeSwitcherButton = styled.button`
  display: flex;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  appearance: none;
  color: ${({ theme }) => theme.buttonBgColor};
  background-color: transparent;

  svg {
    position: relative;
    top: 0.1rem;
    transition: 0.2s transform linear, 0.2s opacity linear;
  }

  &:hover {
    svg {
      transform: scale(1.1);
      opacity: 0.85;
    }
  }
`;
