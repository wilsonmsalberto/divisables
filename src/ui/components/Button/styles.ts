import styled from '@emotion/styled';
import { rgba } from 'polished';

import { ButtonProps } from './Button';

type EmotionProps = {
  theme: Theme;
  variant?: string;
};

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  width: 18rem;
  height: 4.5rem;
  padding: 0;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.9rem;
  border-radius: 5rem;
  appearance: none;
  outline: none;
  transition: 0.2s transform linear, 0.2s opacity linear;

  ${({ theme, variant }: EmotionProps) => {
        if (variant === 'secondary') {
            return `
              color: ${theme.buttonBgColor};
              background-color: ${theme.white};
              border: .2rem solid ${rgba(theme.buttonBgColor, 0.3)};
            `;
        }

        return `
          color: ${theme.buttonTextColor};
          background-color: ${theme.buttonBgColor};
          border: .2rem solid ${rgba(theme.buttonBgColor, 0.3)};
          box-shadow: 0 .6rem 1.2rem ${rgba(theme.buttonBgColor, 0.3)};
        `;
    }}
    

  &:hover {
    transform: translateY(0.2rem);
    opacity: 0.85;
  }
`;
