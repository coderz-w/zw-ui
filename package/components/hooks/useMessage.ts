import { useContext } from "react";
import { ConfigContext } from "../ConfigProvider";
// type
import type { MessageRef } from "../Message";

export function useMessage(): MessageRef {
  const { messageRef } = useContext(ConfigContext);

  return messageRef!.current!;
}
