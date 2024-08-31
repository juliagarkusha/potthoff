// External deps
import React, { FC } from 'react';

export type TitleProps = {
    title: string,
}

const Title: FC<TitleProps> = (props) => {
    const {
        title,
    } = props;

    return (
        <h3 className="font-clash-display font-medium text-[20px] leading-[28px] md:text-[32px] md:leading-[40px] tracking-wide truncate text-[#030712]">
            {title}
        </h3>
    );
};

export default Title;
