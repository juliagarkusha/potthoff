// External deps
import React, { FC } from 'react';
import classNames from 'classnames';

// Local deps
import styles from './Icon.module.scss';
import icons from 'media/images/icons.png';

export type IconProps = {
  icon: string,
  type?: string,
  title?: string,
  className?: string,
  viewBox?: string,
  width?: number | string,
  height?: number | string,
  fill?: string,
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
}

const Icon: FC<IconProps> = (props) => {
  const {
    viewBox,
    width = 24,
    height = 24,
    icon,
    type,
    className = '',
    title = '',
    onClick,
    ...otherProps
  } = props;

  const pathArray = icons.src.split('/');
  pathArray[pathArray.length - 1] = 'icons.svg';
  const path = pathArray.join('/');

  return (
    <svg
      className={classNames(
        styles.Icon,
        styles[`Icon--${icon}`],
        styles[`Icon--${type}`],
        className,
      )}
      viewBox={viewBox}
      aria-label={title}
      width={width}
      height={height}
      onClick={onClick}
      {...otherProps}
    >
      <use
        xlinkHref={`${path}#${icon}`}
        href={`${path}#${icon}`}
      />
      <defs>
        <rect fill="#ffffff" fillOpacity="0" width="100%" height="100%" rx="3"/>
      </defs>
    </svg>
  );
};

export default Icon;
