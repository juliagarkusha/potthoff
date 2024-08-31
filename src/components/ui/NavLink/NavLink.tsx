'use client'

// External deps
import React, { FC } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export type NavLinkProps = {
    path: string,
    name: string,
}

const NavLink: FC<NavLinkProps> = (props) => {
    const {
        path,
        name,
    } = props;

    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <Link
            href={path}
            className="font-medium"
            style={{
                color: isActive ? '#030712' : '#6B7280'
            }}
        >
            {name}
        </Link>
    );
};

export default NavLink;
