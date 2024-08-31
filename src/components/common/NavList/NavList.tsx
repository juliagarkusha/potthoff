// External deps
import React, { FC } from 'react';

// Internal deps
import NavLink from "components/ui/NavLink";

type NavLinkType = {
    name: string;
    path: string;
};

const NavList: FC = () => {
    const navLinks: NavLinkType[] = [
        {
            name: 'Start',
            path: '/',
        },
        {
            name: '',
            path: '/unternehmen',
        },
        {
            name: 'Kompetenzen',
            path: '/kompetenzen',
        },
        {
            name: 'Projekte',
            path: '/projekte',
        },
        {
            name: 'Karriere',
            path: '/karriere',
        },
        {
            name: 'News',
            path: '/news',
        },
        {
            name: 'Partner',
            path: '/partner',
        },
        {
            name: 'Kontakt',
            path: '/kontakt',
        },
    ];

    return (
        <ul className="flex gap-1 sm:gap-4 flex-wrap sm:flex-nowrap">
            {navLinks.map((link) => (
                <NavLink key={link.path} path={link.path} name={link.name} />
            ))}
        </ul>
    );
};

export default NavList;
