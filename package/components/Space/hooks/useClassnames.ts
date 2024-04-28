import { useMemo } from "react";
import { cs } from "../../utils/classnames";
import { ConfigProviderProps } from "../../ConfigProvider";
import type { SpaceProps } from "../interface";

interface getClassNamesProps {
  getPrefixCls: ConfigProviderProps["getPrefixCls"];
  className: SpaceProps["className"];
  direction: SpaceProps["direction"];
  align: SpaceProps["align"];
  wrap: SpaceProps["wrap"];
}

export function useClassNames(props: getClassNamesProps) {
  const { direction, align, wrap, getPrefixCls, className } = props;
  const prefixCls = getPrefixCls!("space");

  return useMemo(
    () => ({
      prefixCls,
      wrapperCls: cs(
        prefixCls,
        {
          [`${prefixCls}-${direction}`]: direction,
          [`${prefixCls}-align-${align}`]: align,
          [`${prefixCls}-warp`]: wrap,
        },
        className
      ),
    }),
    [align, wrap, prefixCls, className, direction]
  );
}
