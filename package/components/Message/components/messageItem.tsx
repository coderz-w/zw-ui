import { useMemo } from "react";
import { MessageProps } from "..";
import { useTimer } from "../hooks";
import { applyAnimate, getItemStyle } from "../utils";
import { motion } from "framer-motion";
import MessageType from "./messageType";
export default function MessageItem(props: MessageProps) {
  const { onClose, id, duration, position } = props;
  const { onMouseEnter, onMouseLeave } = useTimer({
    id: id!,
    duration: duration,
    remove: onClose!,
  });
  const messageStyle = useMemo(() => getItemStyle(), []);

  return (
    <motion.div
      layout
      variants={applyAnimate}
      custom={{ position }}
      animate="animate"
      exit="exit"
      initial="initial"
      key={id}
      style={messageStyle}
    >
      <MessageType
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      ></MessageType>
    </motion.div>
  );
}
