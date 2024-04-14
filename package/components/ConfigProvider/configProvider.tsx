import React, { PropsWithChildren, createContext, useCallback, useMemo } from 'react';
import { omit } from '../utils/omit';
import { useGlobalTheme } from './hooks/useGlobalTheme';
import { defaultProps } from './context';
// types
import type { ConfigProviderProps } from './interface';

export const ConfigContext = createContext<ConfigProviderProps>({
  ...defaultProps
});

export function ZwConfigProvider(baseProps: PropsWithChildren<ConfigProviderProps>) {
  const props = useMemo(() => ({ ...defaultProps, ...baseProps }), [baseProps]);
  const { prefixCls, globalCssVariables, children } = props;
  const getPrefixCls = useCallback(
    (componentName: string, customPrefix?: string) =>
      `${customPrefix || prefixCls || defaultProps.prefixCls}-${componentName}`,
    [prefixCls]
  );

  const config: PropsWithChildren<ConfigProviderProps> = useMemo(
    () => ({
      ...omit(props, ['children']),
      getPrefixCls
    }),
    [getPrefixCls, props]
  );

  useGlobalTheme(globalCssVariables!);

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}

ZwConfigProvider.displayName = 'ZwConfigProvider';
