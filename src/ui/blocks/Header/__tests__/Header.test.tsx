import { render, themesList } from 'utils/tests';

// Components
import Header from '../Header';

const getRenderElement = (props: any) => render(
    <Header { ...props } />
);

describe('<Header />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('header');

                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('header');

            expect(component).toBeVisible();
        });
    });
});
