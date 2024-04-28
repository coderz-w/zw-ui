/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, ReactNode } from "react";

export type Position = "top" | "bottom";

export interface MessageProps {
  style?: CSSProperties;
  className?: string | string[];
  content: ReactNode;
  duration?: number;
  id?: number;
  onClose?: (...args: any) => void;
  position?: Position;
  type?: "info" | "success" | "warning" | "error" | "loading";
}
export interface MessageRef {
  add: (messageProps: MessageProps) => number;
  remove: (id: number) => void;
  update: (id: number, messageProps: MessageProps) => void;
  clearAll: () => void;
}
export interface MessageSingleDirectionProps {
  messageList: Partial<MessageProps>[];
  position: Position;
  getPrefixCls: (...args: any) => string;
  remove: (id: number) => void;
  props: any;
}
