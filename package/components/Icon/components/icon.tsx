import React, { forwardRef } from 'react';
import type { IconProps } from '../interface';
import { useMergeProps } from '../../hooks/useMergeProps';
import { cs } from '../../utils/classnames';
import { getSize } from '../utils';

const defaultProps: Partial<IconProps> = {};

const Icon = (baseProps: IconProps, ref: React.Ref<SVGSVGElement>) => {
  const props = useMergeProps(baseProps, defaultProps, {});
  const { style, className, spin, size = '1em', children, ...rest } = props;

  const [width, height] = getSize(size);
  const cn = cs(
    'zwicon',
    {
      'zwicon-spin': spin
    },
    className
  );

  return (
    <svg
      ref={ref}
      style={style}
      width={width}
      height={height}
      className={cn}
      fill="currentColor"
      {...rest}
    >
      {children}
    </svg>
  );
};
const ForwardRefIcon = forwardRef(Icon);

const IconComponent = ForwardRefIcon as typeof ForwardRefIcon;

IconComponent.displayName = 'Icon';

export { IconComponent as Icon };
