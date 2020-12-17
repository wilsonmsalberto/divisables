import { render } from 'utils/tests';

// Components
import * as Icons from '..';

const iconsList = Object.keys(Icons);

const getRenderElement = ({ Icon, ...props }: any) => render(
    <div data-testid="iconTest">
        <Icon { ...props } />
    </div>
);

describe('<Icons />', () => {
    describe('Basic rendering: ', () => {
        test.each(iconsList)('should have the type: %p',
            (icon) => {
                const { getByTestId } = getRenderElement({ Icon: Icons[icon] });

                const component = getByTestId('iconTest');

                expect(component).toBeVisible();
            }
        );
    });
});
