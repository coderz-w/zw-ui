import { PREFIX_CLS } from './constants';
import { lightTheme } from '../Style/lightTheme';
// type

import type { ConfigProviderProps } from './interface';

export const defaultProps: ConfigProviderProps = {
  prefixCls: PREFIX_CLS,
  globalCssVariables: lightTheme,
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || defaultProps.prefixCls}-${componentName}`
};
