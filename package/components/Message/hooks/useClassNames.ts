import { cs } from "../../utils/classnames";
import { useMemo } from "react";
import { ConfigProviderProps } from "../../ConfigProvider";
import { MessageProps } from "../interface";

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps["getPrefixCls"];
  position: MessageProps["position"];
}

export function useClassNames(props: getClassNamesProps) {
  const { getPrefixCls, position } = props;
  const prefixCls = getPrefixCls!("message");

  return useMemo(
    () => ({
      wrapperClassNames: cs(
        `${prefixCls}-wrapper`,
        `${prefixCls}-wrapper-${position}`
      ),
    }),
    [prefixCls, position]
  );
}
