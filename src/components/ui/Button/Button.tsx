// External deps
import React, { FC } from 'react';
import Icon from "components/ui/Icon";

export type ButtonProps = {
    classes?: string,
    text: string,
    size?: 'small' | 'medium' | 'large';
    viewType?: 'primary' | 'secondary';
    type?: 'custom' | 'default';
}

const Button: FC<ButtonProps> = (props) => {
    const {
        classes,
        text,
        size = 'medium',
        viewType = 'primary',
        type = 'default',
    } = props;

    const sizeClasses = {
        small: 'h-[48px]',
        medium: 'h-[56px]',
        large: 'h-[56px]',
    };

    const sizeLgClasses = {
        small: 'lg:h-[48px]',
        medium: 'lg:h-[80px]',
        large: 'lg:h-[80px]',
    };

    const viewTypeClasses = {
        primary: 'bg-[#005CFF] text-[#FFFFFF]',
        secondary: 'bg-[#F3F4F6] text-[#6B7280]',
    };

    return (
        <button
            className={`${sizeClasses[size]} ${sizeLgClasses[size]} ${viewTypeClasses[viewType]} relative px-2 font-medium text-[18px] leading-[28px] ${classes} rounded-[16px]`}
        >
            {type === 'custom' && (
                <>
                    {text}
                    <>
                        <Icon icon="button-bg" className="absolute left-0 top-0 w-[24px] w:md-[26px] h-[24px] h:md-[26px]" />
                        <Icon icon="button-bg" className="absolute right-0 bottom-0 transform rotate-180 w-[24px] w:md-[26px] h-[24px] h:md-[26px]" />
                    </>
                </>
            )}
        </button>
    );
};

export default Button;
