import React from "react";
import { AnimatePresence } from "framer-motion";
import { useClassNames } from "../hooks";
import Messageitem from "./messageItem";
import type { MessageSingleDirectionProps, MessageProps } from "..";

export function MessageSingleDirection({
  messageList,
  position,
  getPrefixCls,
  props,
  remove,
}: MessageSingleDirectionProps) {
  const messages = messageList[position as unknown as number];
  // classnames
  const { wrapperClassNames } = useClassNames({ getPrefixCls, position });

  return (
    <div
      role="region"
      aria-live="polite"
      key={position}
      className={wrapperClassNames}
    >
      <AnimatePresence initial={false}>
        {(messages as unknown as Array<Partial<MessageProps>>).map((item) => (
          <Messageitem
            key={item.id}
            position={position}
            {...props}
            content={item.id}
            {...item}
            onClose={remove}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
