import styled from '@emotion/styled';

type EmotionProps = {
  theme: Theme;
  isFocused: boolean;
};

export const InputWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  color: ${({ isFocused, theme }: EmotionProps) => isFocused ? theme.highlight : theme.secondary};
  text-align: center;
  margin-bottom: 2rem;

  transition: 0.3s color linear;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  outline: 0;
  font-size: 2rem;
  line-height: 2.4rem;
  padding: 0.8rem 1rem;
  background: transparent;
  border: 0;
  border: .1rem solid ${({ isFocused, theme }: EmotionProps) => isFocused ? theme.highlight : theme.textColor};
  appearance: none;
  text-align: center;

  transition: 0.3s border linear;

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const StyledSpan = styled.span`
  display: block;
  margin-top: 0.8rem;
  width: 100%;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.secondary};
  transition: 0.3s color linear;
`;
