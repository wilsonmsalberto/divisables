import {
    fireEvent,
    render,
    themesList,
    waitFor,
} from 'utils/tests';

// Components
import ThemeSwitcher from '../ThemeSwitcher';

const getRenderElement = ({ theme, ...props }: any) => render(
    <ThemeSwitcher { ...props }/>
);

describe('<ThemeSwitcher />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('themeswitcher');

                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('themeswitcher');

            expect(component).toBeVisible();
        });
    });

    describe('Basic behavior: ', () => {
        it('should toggle theme on click', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('themeswitcher');

            const bodyComponent = document.getElementsByTagName('body')[0];

            fireEvent.click(component);

            expect(bodyComponent).toHaveStyle('color: rgb(0, 35, 75)');
            expect(bodyComponent).toHaveStyle('background-color: rgb(244, 247, 252)');

            fireEvent.click(component);

            expect(bodyComponent).toHaveStyle('color: rgb(0, 35, 75)');
            expect(bodyComponent).toHaveStyle('background-color: rgb(244, 247, 252)');
        });
    });
});
