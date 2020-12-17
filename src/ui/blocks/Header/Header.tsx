import React from 'react';

// Components
import ThemeSwitcher from '@blocks/ThemeSwitcher';

// Styles
import { InnerWrapper, StyledHeader, Title } from './styles';

const Header = (): React.ReactElement => (
    <StyledHeader data-testid="header">
        <InnerWrapper>
            <ThemeSwitcher />

            <Title>The divisible counter</Title>
        </InnerWrapper>
    </StyledHeader>
);

export default Header;
