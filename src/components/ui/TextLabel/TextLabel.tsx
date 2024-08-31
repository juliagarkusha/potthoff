// External deps
import React, { FC } from 'react';

export type TextLabelProps = {
    classes?: string,
    text: string,
}

const TextLabel: FC<TextLabelProps> = (props) => {
    const {
        classes,
        text,
    } = props;

    return (
        <div
            className={`h-10 rounded-[32px] bg-white leading-6 font-medium flex justify-center items-center min-w-[105px] ${classes}`}
        >
            {text}
        </div>
    );
};

export default TextLabel;
