import React, { useContext } from 'react';
import { Global, useTheme } from '@emotion/react';

// Context
import { AppThemeContext } from '@context/AppTheme';

// Components
import { ContrastIcon } from '@components/Icons';

// Styles
import { ThemeSwitcherButton } from './styles';

const ThemeSwitcher = (): React.ReactElement => {
    const { switchTheme } = useContext(AppThemeContext);
    const { background, textColor } = useTheme();

    return (
        <>
            <Global
                styles={ {
                    body: {
                        color          : textColor,
                        backgroundColor: background,
                    },
                } }
            />

            <ThemeSwitcherButton data-testid="themeswitcher" onClick={ switchTheme } >
                <ContrastIcon />
            </ThemeSwitcherButton>
        </>
    );
};

export default ThemeSwitcher;
