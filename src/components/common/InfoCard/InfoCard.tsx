// External deps
import React, {FC, ReactNode} from 'react';
import cx from 'classnames';

// Internal deps
import CardBg from "components/ui/CardBg";

export type InfoCardProps = {
    classes?: string;
    bg?: string;
    children?: ReactNode;
}

const InfoCard: FC<InfoCardProps> = (props) => {
    const {
        classes,
        bg = "",
        children,
    } = props;

    return (
        <article className={cx(classes)}>
            <CardBg bg={bg}>
                {children}
            </CardBg>
        </article>
    );
};

export default InfoCard;
