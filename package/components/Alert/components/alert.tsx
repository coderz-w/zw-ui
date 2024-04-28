import React, { forwardRef, useContext, useState } from "react";
import { useMergeProps } from "../../hooks";
import { ConfigContext } from "../../ConfigProvider";
import { useClassNames } from "../hooks";
// type
import type { AlertProps } from "../interface";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IAlertProps = AlertProps & { _onClose?: (...args: any) => void };

const defaultProps = {
  type: "info" as const,
  showIcon: true,
  content: "Alert",
};

function Alert(
  baseProps: IAlertProps,
  ref: React.LegacyRef<HTMLDivElement> | undefined
) {
  // props
  const { getPrefixCls } = useContext(ConfigContext);
  const props = useMergeProps<IAlertProps>(baseProps, defaultProps, {});
  const {
    icon,
    type,
    style,
    title,
    content,
    closable,
    showIcon,
    className,
    onClose,
    _onClose = () => {
      setShow(false);
    },
  } = props;

  // state
  const [isShow, setShow] = useState(true);

  // classnames
  const {
    leftClassName,
    rightClassName,
    titleClassName,
    contentClassName,
    closeBtnClassName,
    itemClassNames,
  } = useClassNames({ getPrefixCls, type, closable, className });

  return (
    <>
      {isShow && (
        <div
          className={itemClassNames}
          style={{ ...style }}
          role="alert"
          ref={ref}
        >
          {showIcon && <div className={leftClassName}>{icon || ""}</div>}
          <div className={rightClassName}>
            {title && <div className={titleClassName}>{title}</div>}
            <div className={contentClassName}>{content}</div>
          </div>
          {closable && (
            <div
              className={closeBtnClassName}
              onClick={() => {
                _onClose?.();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClose?.(null as any);
              }}
            >
              {"x"}
            </div>
          )}
        </div>
      )}
    </>
  );
}

const AlertComponent = forwardRef(Alert);
AlertComponent.displayName = "NotificationCardComponent";

export { AlertComponent as Alert };
