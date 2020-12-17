import React from 'react';

declare global {
    interface ThemeContextInterface {
        activeThemeName: string;
        setActiveThemeName: React.Dispatch<React.SetStateAction<string>>;
        switchTheme: () => void;
        theme: Theme;
    }
}