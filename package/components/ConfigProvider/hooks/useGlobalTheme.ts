import { useLayoutEffect } from 'react';
import { setCssVariables } from '../../utils/setCssvariables';
type variables = Record<string, unknown>;

export function useGlobalTheme(variables: variables) {
  useLayoutEffect(() => {
    setCssVariables(variables);
  }, [variables]);
}
