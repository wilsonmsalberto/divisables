import React, { useEffect, useState } from 'react';

// Components
import Button from '@components/Button';
import Input from '@components/Input';

// Styles
import { Error, Wrapper } from './styles';

const Header = (): React.ReactElement => {
    const [ firstNumber, setFirstNumber ] = useState(null);
    const [ secondNumber, setSecondNumber ] = useState(null);
    const [ divisibleNumber, setDivisibleNumber ] = useState(null);

    const [ error, setInterfaceError ] = useState(null);

    useEffect(() => {
        if (!firstNumber || !secondNumber || !divisibleNumber) {
            return;
        }

        const isNumber = (val) => Number.isInteger(val);

        const isFirstNumberValid = isNumber(firstNumber);
        const isSecondNumberValid = isNumber(secondNumber);
        const isDivisibleNumberValid = isNumber(divisibleNumber);

        const isSecondNumberBigger = secondNumber > firstNumber;
        const isDivisibleSmaller = divisibleNumber < secondNumber;

        if (!isFirstNumberValid || !isSecondNumberValid || !isDivisibleNumberValid) {
            return setInterfaceError('Please, use integers only for the inputs.');
        }

        if (!isSecondNumberBigger) {
            return setInterfaceError('The second number must be bigger than the first');
        }

        if (!isDivisibleSmaller) {
            return setInterfaceError('The divisible must be smaller than the second number');
        }

        setInterfaceError(null);
    }, [ firstNumber, secondNumber, divisibleNumber ]);

    return (
        <Wrapper data-testid="interface">
            <Input
                id="divisible"
                label="Number to Divide by"
                type="number"
                pattern="[0-9]"
                onChange={ value => setDivisibleNumber(Number(value)) }
            />

            <Input
                id="firstNumber"
                label="First Number"
                type="number"
                pattern="[0-9]"
                onChange={ value => setFirstNumber(Number(value)) }
            />

            <Input
                id="secondNumber"
                label="Second Number"
                type="number"
                pattern="[0-9]"
                onChange={ value => setSecondNumber(Number(value)) }
            />

            {
                error &&
                <Error>{ error }</Error>
            }

            <Button disabled={ !!error }>Process</Button>
        </Wrapper>
    );
};

export default Header;
