import React, { useEffect, useState } from 'react';

type InputTypes = {
    hint?: string;
    id: string;
    label: string;
    placeholder?: string;
    pattern?: string;
    type?: string;
    value?: string;
    onChange: (arg1: string) => void;
}

// Styles
import {
    InputWrapper,
    StyledInput,
    StyledLabel,
    StyledSpan,
} from './styles';

const Input = ({
    hint = '',
    id,
    label,
    onChange,
    placeholder = '',
    type = 'text',
    value = '',
}: InputTypes): React.ReactElement => {
    const [ inputValue, setValue ] = useState(value);
    const [ isFocused, setActive ] = useState(false);

    useEffect(() => {
        if (value) {
            setValue(value);
        }
    }, [ value, setValue ]);

    return (
        <InputWrapper data-testid="input" { ...{ isFocused } }>
            <StyledLabel htmlFor={ id } { ...{ isFocused } }>
                { label }
            </StyledLabel>

            <StyledInput
                onChange={ handleChange }
                value={ inputValue }
                onFocus={ (): void => setActive(true) }
                onBlur={ (): void => setActive(false) }
                type={ type || 'text' }
                { ...{
                    id,
                    placeholder,
                    isFocused,
                } }
            />
            { hint && <StyledSpan>{ hint }</StyledSpan> }
        </InputWrapper>
    );

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setValue(event.target.value);
        onChange(event.target.value);
    }
};

export default Input;
