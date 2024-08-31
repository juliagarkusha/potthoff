// External deps
import React, {FC, useState} from 'react';
import cx from 'classnames';
import Image, { ImageProps } from 'next/image';

// Local deps
import CardBg from "components/ui/CardBg";
import IconButton from "components/ui/IconButton";
import Title from "components/ui/Title";
import SubTitle from "components/ui/SubTitle";
import TextLabel from "components/ui/TextLabel";

export type CardProps = {
    classes?: string;
    id?: string;
    title?: string;
    type?: string;
    subTitle?: string;
    imgPath?: ImageProps['src'];
}

const Card: FC<CardProps> = (props) => {
    const {
        classes,
        id = "",
        title,
        type,
        subTitle,
        imgPath,
    } = props;

    return (
        <article className={cx(classes)} id={id}>
            <CardBg classes="h-[240px] lg:h-[400px] 2xl:h-[675px]" >
                <TextLabel text={type} classes="absolute top-[12px] sm:top-8 right-[12px] sm:right-8" />
                <IconButton icon="arrow-right" classes="absolute bottom-[12px] sm:bottom-8 right-[12px] sm:right-8" />
                <Image
                    src={imgPath}
                    alt={title}
                    className="flex w-full h-full object-cover rounded-2xl"
                />
            </CardBg>
            <div className="pt-6 pb-1">
                <Title title={title} />
                <SubTitle subTitle={subTitle} />
            </div>
        </article>
    );
};

export default Card;
