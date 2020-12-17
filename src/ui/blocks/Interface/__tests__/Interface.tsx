import { render, themesList } from '@utils/tests';

// Components
import Interface from '../Interface';

const getRenderElement = (props: any) => render(
    <Interface { ...props } />
);

describe('<Header />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('interface');

                expect(component).toMatchSnapshot();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('interface');

            expect(component).toBeVisible();
        });
    });
});
