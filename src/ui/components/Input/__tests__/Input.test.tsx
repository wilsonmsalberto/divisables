import { fireEvent, render, themesList } from 'utils/tests';

// Components
import Input from '../Input';

// Element without optional props
const getBasicRenderElement = ({ theme, ...props }: any) => render(
    <Input
        id="dummyInput"
        label="Dummy Label"
        onChange={ jest.fn() }
        { ...props }
    />
);

// Element without some default
const getRenderElement = ({ theme, ...props }: any) => render(
    <Input
        hint="Dummy Hint"
        id="dummyInput"
        label="Dummy Label"
        onChange={ jest.fn() }
        placeholder="Dummy Placeholder"
        { ...props }
    />
);

describe('<Input />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('input');

                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render basic input properly', () => {
            const { getByTestId } = getBasicRenderElement({});

            const component = getByTestId('input');

            expect(component).toBeVisible();
        });

        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('input');

            expect(component).toBeVisible();
        });

        it('should have default styles and theme', () => {
            const { getByPlaceholderText, getByText } = getRenderElement({});

            const inputComponent = getByPlaceholderText('Dummy Placeholder');
            const labelComponent = getByText('Dummy Label');
            const hintComponent = getByText('Dummy Hint');

            expect(inputComponent).toHaveStyleRule('border-bottom', '.1rem solid #00234B');
            expect(labelComponent).toHaveStyleRule('color', '#778CA3');
            expect(hintComponent).toHaveStyleRule('color', '#778CA3');
        });

        it('should have specific styles and theme when input is focused', () => {
            const { getByPlaceholderText, getByText } = getRenderElement({});

            const inputComponent = getByPlaceholderText('Dummy Placeholder');
            const labelComponent = getByText('Dummy Label');

            inputComponent.focus();

            expect(inputComponent).toHaveStyleRule('border-bottom', '.1rem solid #624DE3');
            expect(labelComponent).toHaveStyleRule('color', '#624DE3');
        });

        it('should have specific styles focused and other when out of focus', () => {
            const { getByPlaceholderText, getByText } = getRenderElement({});

            const inputComponent = getByPlaceholderText('Dummy Placeholder');
            const labelComponent = getByText('Dummy Label');

            expect(inputComponent).toHaveStyleRule('border-bottom', '.1rem solid #00234B');
            expect(labelComponent).toHaveStyleRule('color', '#778CA3');

            inputComponent.focus();

            expect(inputComponent).toHaveStyleRule('border-bottom', '.1rem solid #624DE3');
            expect(labelComponent).toHaveStyleRule('color', '#624DE3');

            inputComponent.blur();

            expect(inputComponent).toHaveStyleRule('border-bottom', '.1rem solid #00234B');
            expect(labelComponent).toHaveStyleRule('color', '#778CA3');
        });

        describe('Type: ', () => {
            it('should have specific provided input type', () => {
                const { getByPlaceholderText } = getRenderElement({ type: 'submit' });

                const inputComponent = getByPlaceholderText('Dummy Placeholder');

                expect(inputComponent).toHaveAttribute('type', 'submit');
            });

            it('should have default input type when none is provided', () => {
                const { getByPlaceholderText } = getRenderElement({ type: '' });

                const inputComponent = getByPlaceholderText('Dummy Placeholder');

                expect(inputComponent).toHaveAttribute('type', 'text');
            });
        });

        describe('Placeholder: ', () => {
            it('should have specific provided placeholder', () => {
                const { getByPlaceholderText } = getRenderElement({ placeholder: 'Test Placeholder' });

                const inputComponent = getByPlaceholderText('Test Placeholder');

                expect(inputComponent).toHaveAttribute('placeholder', 'Test Placeholder');
            });

            it('should have no placeholder when empty or not existant', () => {
                const { getByTestId } = getRenderElement({ placeholder: '' });

                const component = getByTestId('input');

                expect(component.querySelector('input')).toHaveAttribute('placeholder', '');
            });
        });

        describe('Hint: ', () => {
            it('should have no hint when none is provided', () => {
                const { getByTestId } = getRenderElement({ hint: '' });

                const component = getByTestId('input');

                expect(component.querySelector('span')).toBeFalsy();
            });

            it('should have a specific hint when provided', () => {
                const { getByText } = getRenderElement({ hint: 'Test Hint' });

                const component = getByText('Test Hint');

                expect(component).toBeVisible();
            });
        });

        describe('Value: ', () => {
            it('should have specific provided input value', () => {
                const { getByPlaceholderText } = getRenderElement({ value: 'potato' });

                const inputComponent = getByPlaceholderText('Dummy Placeholder');

                expect(inputComponent).toHaveAttribute('value', 'potato');
            });

            it('should have no value when none is provided to input', () => {
                const { getByPlaceholderText } = getRenderElement({ value: '' });

                const inputComponent = getByPlaceholderText('Dummy Placeholder');

                expect(inputComponent).toHaveAttribute('value', '');
            });
        });
    });

    describe('Basic Functionality: ', () => {
        it('should update value', () => {
            const mockOnChange = jest.fn();

            const { getByPlaceholderText } = getRenderElement({ onChange: mockOnChange });

            const inputComponent = getByPlaceholderText('Dummy Placeholder');

            fireEvent.change(inputComponent, { target: { value: 'potato' } });

            expect(mockOnChange).toHaveBeenCalledTimes(1);
        });
    });
});
