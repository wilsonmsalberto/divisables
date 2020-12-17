import { render, themesList } from 'utils/tests';

// Components
import Button from '../Button';

// Mocks
const availableTypes = [ 'button', 'submit', 'reset' ];

const getRenderElement = ({ theme, ...props }: any) => render(
    <Button { ...props }>Dummy Button</Button>
);

describe('<Button />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('button');

                expect(component).toMatchSnapshot();
            }
        );

        it('should have default styles and theme when the provided variant does not exist', () => {
            const { getByTestId } = getRenderElement({ variant: 'potato' });

            const component = getByTestId('button');

            expect(component).toHaveStyleRule('color', '#F9FAFF');
            expect(component).toHaveStyleRule('background-color', '#624DE3');
            expect(component).toHaveStyleRule('border', '.2rem solid rgba(98,77,227,0.3)');
        });

        it('should have secondary styles', () => {
            const { getByTestId } = getRenderElement({ variant: 'secondary' });

            const component = getByTestId('button');

            expect(component).toHaveStyleRule('color', '#624DE3');
            expect(component).toHaveStyleRule('background-color', '#FFFFFF');
            expect(component).toHaveStyleRule('border', '.2rem solid rgba(98,77,227,0.3)');
        });
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('button');

            expect(component).toBeVisible();
        });

        it('should default to button type when an invalid type is passed', () => {
            const { getByTestId } = getRenderElement({ type: 'input' });

            const component = getByTestId('button');

            expect(component).toHaveAttribute('type', 'button');
        });

        test.each(availableTypes)('should have the type: %p',
            (type) => {
                const { getByTestId } = getRenderElement({ type });

                const component = getByTestId('button');

                expect(component).toBeVisible();
                expect(component).toHaveAttribute('type', type);
            }
        );

        it('should have a provided class', () => {
            const { getByTestId } = getRenderElement({ className: 'potato' });

            const component = getByTestId('button');

            expect(component.classList.contains('potato')).toBe(true);
        });

        it('should have a default text', () => {
            const { getByText } = getRenderElement({ className: 'potato' });

            const component = getByText('Dummy Button');

            expect(component).toBeVisible();
        });
    });
});
