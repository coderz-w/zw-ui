import { CSSProperties, ReactNode } from "react";

export interface AlertProps {
  style?: CSSProperties;
  className?: string | string[];
  closable?: boolean;
  onClose?: (e: React.MouseEventHandler) => void;
  type?: "info" | "success" | "warning" | "error" | "loading";
  title?: ReactNode;
  content?: ReactNode;
  icon?: ReactNode;
  showIcon?: boolean;
}
