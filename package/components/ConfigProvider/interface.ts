import type { ButtonProps } from '../Button';
// 全局定制组件props
export interface ComponentConfig {
  Button?: Partial<ButtonProps>;
}

/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps {
  componentConfig?: ComponentConfig;
  /**
   * 全局组件库主题色
   */
  globalCssVariables?: Record<string, unknown>;
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   * @defaultValue zw
   */
  prefixCls?: string;
  /**
   * @zh 获取组件类名前缀的方法
   * @en Global ClassName prefix
   * @defaultValue zw-组件名
   */
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  /**
   * @zh 全局弹出框挂载的父级节点。
   * @en The parent node of the global popup.
   * @defaultValue () => document.body
   */
  container?: HTMLElement;

  /**
   * @zh 全局配置组件内的空组件。
   * @en Empty component in component.
   */
}
