import React, { useContext } from 'react';

// Theming
import { Global, ThemeProvider, css } from '@emotion/react';
import { GlobalStyles } from '@ui/theme';

// Context
import { AppThemeContext, AppThemeProvider } from '@context/AppTheme';

// Components
import Header from '@blocks/Header';
import Interface from '@blocks/Interface';

// Styles
import { InnerWrapper, Main } from '@ui/theme/Global.styles';

const App = (): React.ReactElement => {
    const { theme } = useContext(AppThemeContext);

    return (
        <ThemeProvider theme={ theme }>
            <Header />

            <Main>
                <InnerWrapper>
                    <Interface />
                </InnerWrapper>
            </Main>

            <Global styles={ css(GlobalStyles.Globals) } />
        </ThemeProvider>
    );
};

const withThemeApp = (props: any): React.ReactElement => (
    <AppThemeProvider>
        <App { ...props } />
    </AppThemeProvider>
);

export default withThemeApp;
