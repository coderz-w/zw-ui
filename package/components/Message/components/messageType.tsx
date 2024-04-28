import React from "react";

type MessageType = "info" | "success" | "warning" | "error" | "loading";

interface MessageProps {
  type?: MessageType;
  content: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MessageType: React.FC<MessageProps> = ({
  type = "info",
  content,
  onMouseEnter,
  onMouseLeave,
}) => {
  const colorAndBgMap: Record<
    MessageType,
    { colorVar: string; bgColorVar: string }
  > = {
    info: { colorVar: "--brand-color", bgColorVar: "--brand-color-1" },
    success: { colorVar: "--success-color", bgColorVar: "--success-color-1" },
    warning: { colorVar: "--warning-color", bgColorVar: "--warning-color-1" },
    error: { colorVar: "--error-color", bgColorVar: "--error-color-1" },
    loading: {
      colorVar: "--text-color-secondary",
      bgColorVar: "--bg-color-container-hover",
    },
  };

  const { colorVar, bgColorVar } = colorAndBgMap[type] || colorAndBgMap.info;

  const messageStyle: React.CSSProperties = {
    display: "flex",
    padding: "10px 20px",
    borderRadius: "4px",
    backgroundColor: `var(${bgColorVar})`,
    color: `var(${colorVar})`,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 500,
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={messageStyle}
    >
      {content}
    </div>
  );
};

export default MessageType;
