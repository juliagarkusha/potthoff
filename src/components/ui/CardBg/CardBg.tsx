// External deps
import React, { FC, ReactNode } from 'react';

// Internal deps
import Icon from "components/ui/Icon";
import cx from "classnames";

export type CardBgProps = {
    children?: ReactNode,
    classes?: string;
    bg?: string;
}

const CardBg: FC<CardBgProps> = (props) => {
    const {
        children,
        bg = "",
        classes = "",
    } = props;

    return (
        <div
            className={cx(`relative rounded-2xl ${classes} ${bg} flex items-center justify-center`)}
        >
            <Icon
                icon="img-bg-2xl"
                width={128}
                height={128}
                className="absolute top-0 left-0 w-[70px] h-[70px] lg:w-[128px] lg:h-[128px]"
            />
            {children}
        </div>
    );
};

export default CardBg;
