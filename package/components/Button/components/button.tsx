import React, { useContext, forwardRef, ReactNode, MouseEventHandler } from 'react';
import { useMergeProps } from '../../hooks/';
import { ConfigContext } from '../../ConfigProvider';
import { useClassNames } from '../hooks';
import { useStyles } from '../../hooks';
// type
import type { ButtonProps } from '../interface';

const defaultProps: Partial<ButtonProps> = {
  htmlType: 'button',
  type: 'brand'
};

function Button(baseProps: ButtonProps, ref: React.LegacyRef<HTMLButtonElement> | undefined) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Button);
  const {
    style,
    className,
    children,
    htmlType,
    type,
    status,
    disabled,
    loading,
    icon,
    iconOnly,
    onClick,
    long,
    themeStyle,
    ...rest
  } = props;

  const iconNode = loading ? 'loading' : icon;
  const { wrapperCls } = useClassNames({
    long,
    status,
    loading,
    children,
    iconOnly,
    disabled,
    className,
    iconNode,
    type,
    getPrefixCls
  });

  // style
  const { wrapperStyle } = useStyles<ButtonProps>({ style, themeStyle });

  const handleClick: MouseEventHandler = (event): void => {
    if (loading || disabled) {
      event?.preventDefault?.();
      return;
    }
    onClick?.(event);
  };

  const InnerContent: ReactNode = (
    <>
      {iconNode}
      {React.Children.map(children, (child) =>
        typeof child === 'string' ? <span>{child}</span> : child
      )}
    </>
  );

  const render = function () {
    // if (href) {
    //   return (
    //     <BtnAnchor
    //       classNames={wrapperCls}
    //       InnerContent={InnerContent}
    //       handleClick={handleClick}
    //       ref={ref}
    //       rest={rest}
    //       anchorProps={anchorProps}
    //       href={href}
    //       disabled={disabled}
    //       style={wrapperStyle}
    //     />
    //   );
    // }

    return (
      <button
        {...rest}
        ref={ref}
        style={wrapperStyle}
        className={wrapperCls}
        type={htmlType}
        disabled={disabled}
        onClick={handleClick}
      >
        {InnerContent}
      </button>
    );
  };

  return render();
}

const ForwardRefButton = forwardRef(Button);

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton;

ButtonComponent.displayName = 'Button';

export { ButtonComponent as Button };
