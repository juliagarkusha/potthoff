// External deps
import React, { FC } from 'react';
import cx from 'classnames';

// Internal deps
import NavList from "components/common/NavList";
import Logo from "components/common/Logo";

const Header: FC = () => {
    return (
        <header className="flex items-center justify-between p-10 flex-col md:flex-row gap-4">
            <Logo />
            <NavList />
        </header>
    );
};

export default Header;
