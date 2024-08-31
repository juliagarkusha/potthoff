// External deps
import React, { FC } from 'react';

export type SubTitleProps = {
    subTitle: string,
}

const SubTitle: FC<SubTitleProps> = (props) => {
    const {
        subTitle,
    } = props;

    return (
        <p className="font-clash-grotesk font-normal text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#1F2937]">
            {subTitle}
        </p>
    );
};

export default SubTitle;
