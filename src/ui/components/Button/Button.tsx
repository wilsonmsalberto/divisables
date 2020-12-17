import React from 'react';

// Theme
import { StyledButton } from './styles';

export type ButtonProps = {
  children: React.ReactElement | string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
    children,
    className,
    disabled = false,
    type = 'button',
    variant = 'primary',
    ...otherProps
}: ButtonProps): React.ReactElement => {
    const types = [ 'button', 'submit', 'reset' ];

    return (
        <StyledButton
            data-testid="button"
            type={ types.includes(type) ? type : 'button' }
            { ...{
                className,
                variant,
                disabled,
                ...otherProps,
            } }
        >
            { children }
        </StyledButton>
    );
};

export default Button;
