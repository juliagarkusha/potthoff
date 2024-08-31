// External deps
import React, { FC } from 'react';

// Internal deps
import Icon from "components/ui/Icon";

export type IconButtonProps = {
    classes?: string,
    icon: string,
}

const IconButton: FC<IconButtonProps> = (props) => {
    const {
        classes,
        icon,
    } = props;

    return (
        <button className={`w-[40px] h-[40px] rounded-[8px] bg-white flex justify-center items-center ${classes}`}>
            <Icon icon={icon} />
        </button>
    );
};

export default IconButton;
