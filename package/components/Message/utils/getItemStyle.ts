import type { CSSProperties } from "react";

export function getItemStyle(): CSSProperties {
  const alignItems = "center";
  return {
    display: "flex",
    justifyContent: alignItems,
    marginBottom: "12px",
  };
}
