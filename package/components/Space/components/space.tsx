import React, { ReactNode, useContext } from 'react';
import { SizeType, SpaceProps } from '..';
import { useMergeProps } from '../../hooks';
import { ConfigContext } from '../../ConfigProvider';
import { spaceSize } from '../constants';
import { useClassNames } from '../../Space/hooks/index';
const defaultProps: Partial<SpaceProps> = {
  direction: 'horizontal',
  align: 'center',
  wrap: true
};
function getNumberSize(size: SizeType) {
  return typeof size === 'string' ? spaceSize[size] : spaceSize.middle;
}

const Space = (baseProps: SpaceProps) => {
  const { className, direction, align, wrap, style, size, split, ...otherProps } = baseProps;
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const { wrapperCls } = useClassNames({
    direction,
    align,
    wrap,
    getPrefixCls,
    className
  });
  const props = useMergeProps<SpaceProps>(baseProps, defaultProps, componentConfig?.Space);
  //   自定义间距
  const otherStyles: React.CSSProperties = {};

  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map((item) =>
        getNumberSize(item)
      ),
    [size]
  );
  //   split的间距设置
  function getMarginStyle(length: number, index: number) {
    const isLastOne = length === index + 1;
    return !isLastOne
      ? {
          [direction === 'vertical' ? 'marginBottom' : 'marginRight']: size
        }
      : {};
  }

  otherStyles.columnGap = horizontalSize;
  otherStyles.rowGap = verticalSize;
  const childNodes = React.Children.toArray(props.children);

  const nodes = childNodes.map((child: ReactNode | null, i) => {
    let key = `space-item-${i}`;
    if (React.isValidElement(child)) {
      key = child.key || key;
    }

    return (
      <div className="space-item" key={key}>
        {child}
        {i < childNodes.length && split && (
          <span className={`zw-spaceItem-split-item`} style={getMarginStyle(childNodes.length, i)}>
            {split}
          </span>
        )}
      </div>
    );
  });
  return (
    <div className={wrapperCls} style={{ ...style, ...otherStyles }} {...otherProps}>
      {nodes}
    </div>
  );
};

export default Space;
