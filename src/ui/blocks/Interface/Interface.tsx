import React, { useEffect, useState } from 'react';

// Components
import Button from '@components/Button';
import Input from '@components/Input';

// Utils
import { optimalCount } from '@utils/divisible';

// Styles
import { AlertSelector, Error, Success, Wrapper } from './styles';

const Header = (): React.ReactElement => {
    const [ startNumber, setStartNumber ] = useState(null);
    const [ endNumber, setEndNumber ] = useState(null);
    const [ divisibleNumber, setDivisibleNumber ] = useState(null);
    const [ divisibleCount, setDivisibleCount ] = useState(null);

    const [ error, setInterfaceError ] = useState(null);
    const [ useAlert, setUseAlert ] = useState(null);

    const isNumber = (val) => Number.isInteger(val);
    const isStartNumberValid = isNumber(startNumber);
    const isEndNumberValid = isNumber(endNumber);
    const isDivisibleNumberValid = isNumber(divisibleNumber);
    const isCountValid = divisibleCount >= 0 && Number.isInteger(divisibleCount) && isStartNumberValid && isEndNumberValid && isDivisibleNumberValid;

    useEffect(() => {
        setDivisibleCount(null);

        if (!startNumber || !endNumber || !divisibleNumber) {
            return;
        }

        const isEndNumberBigger = endNumber > startNumber;
        const isDivisibleSmaller = divisibleNumber < endNumber;

        if (!isStartNumberValid || !isEndNumberValid || !isDivisibleNumberValid) {
            return setInterfaceError('Please, use integers only for the inputs.');
        }

        if (!isEndNumberBigger) {
            return setInterfaceError('The second number must be bigger than the first');
        }

        if (!isDivisibleSmaller) {
            return setInterfaceError('The divisible must be smaller than the second number');
        }

        setInterfaceError(null);
    }, [ divisibleNumber, endNumber, isDivisibleNumberValid, isEndNumberValid, isStartNumberValid, startNumber ]);

    useEffect(() => {
        if (useAlert && isCountValid) {
            // eslint-disable-next-line no-alert
            alert(divisibleCount);
        }
    }, [ divisibleCount, useAlert, isCountValid ]);

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
                id="startNumber"
                label="First Number"
                type="number"
                pattern="[0-9]"
                onChange={ value => setStartNumber(Number(value)) }
            />

            <Input
                id="endNumber"
                label="Second Number"
                type="number"
                pattern="[0-9]"
                onChange={ value => setEndNumber(Number(value)) }
            />

            {
                error &&
                <Error>{ error }</Error>
            }

            {
                isCountValid && !error && !useAlert &&
                <Success>{ `There are ${divisibleCount} numbers, divisible by ${divisibleNumber} between ${startNumber} and ${endNumber}` }</Success>
            }

            <Button onClick={ handleProcess } disabled={ !!error }>Process</Button>

            <AlertSelector>
                <Input
                    id="alert"
                    label="Use Alert"
                    type="checkbox"
                    onChange={ () => setUseAlert(prev => !prev) }
                />
            </AlertSelector>
        </Wrapper>
    );

    function handleProcess() {
        const count = optimalCount({
            divisible: divisibleNumber,
            end      : endNumber,
            start    : startNumber,
        });

        setDivisibleCount(count);
    }
};

export default Header;
