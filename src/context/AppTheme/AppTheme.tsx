import React, {
    createContext, useCallback, useEffect, useMemo, useState,
} from 'react';

// Theme
import { Dark, Light } from '@ui/theme';

export const AppThemeContext = createContext<ThemeContextInterface | undefined>(undefined);
const { Provider } = AppThemeContext;

export const AppThemeProvider = ({
    children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
    const themes: Record<string, any> = useMemo(() => ({
        dark : Dark,
        light: Light,
    }), []);

    const [ activeThemeName, setActiveThemeName ] = useState<string>('light');
    const [ theme, setTheme ] = useState<Theme>(themes.light);

    const switchTheme = useCallback((): void => {
        if (activeThemeName === 'light') {
            setActiveThemeName('dark');
        }

        if (activeThemeName === 'dark') {
            setActiveThemeName('light');
        }
    }, [ activeThemeName, setActiveThemeName ]);

    useEffect(() => {
        const pickedTheme = localStorage.getItem('themeName');

        if (pickedTheme) {
            setActiveThemeName(pickedTheme);
        }
    }, [ setActiveThemeName ]);

    useEffect(() => {
        setTheme(themes[activeThemeName]);
        localStorage.setItem('themeName', activeThemeName);
    }, [ activeThemeName, themes ]);

    return (
        <Provider
            value={ {
                activeThemeName,
                setActiveThemeName,
                switchTheme,
                theme,
            } }
        >
            { children }
        </Provider>
    );
};
