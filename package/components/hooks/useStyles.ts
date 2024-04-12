import { useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface getStyleProps<T extends Record<string, any>> {
  style: T['style'];
  themeStyle: T['themeStyle'];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useStyles<T extends Record<string, any>>(props: getStyleProps<T>) {
  const { style, themeStyle } = props;

  return useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      wrapperStyle: { ...style, ...themeStyle } as Record<string, any>
    }),
    [style, themeStyle]
  );
}
