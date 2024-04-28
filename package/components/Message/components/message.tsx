/* eslint-disable @typescript-eslint/no-explicit-any */
import useStore from "../store";
import { forwardRef, useContext } from "react";
import { MessageSingleDirection } from "./messageSingleDirection";
import { MessageProps } from "..";
import { ConfigContext } from "../../ConfigProvider";
import { useMergeProps } from "../../hooks";
import { Portal } from "../../Portal";
const defaultProps: Partial<MessageProps> = {
  content: "",
  duration: 2000,
  onClose: () => {},
  position: "top",
};
function MessageProvider(baseProps: Partial<MessageProps>, ref: any) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Message
  );

  const { messageList, add, update, remove, clearAll } = useStore("top");
  const stateKeys = Object.keys(messageList) as Array<keyof typeof messageList>;

  const render = stateKeys.map((position, index) => (
    <MessageSingleDirection
      key={index}
      messageList={messageList as unknown as Partial<MessageProps>[]}
      position={position}
      getPrefixCls={getPrefixCls as any}
      props={props}
      remove={remove}
    />
  ));
  if (!ref.current)
    ref.current = {
      add,
      remove,
      clearAll,
      update,
    };
  return <Portal attach={document.body}>{render}</Portal>;
}
const ForwardRefMessageProvider = forwardRef(MessageProvider);

const MessageProviderComponent =
  ForwardRefMessageProvider as typeof ForwardRefMessageProvider;

MessageProviderComponent.displayName = "MessageProvider";
export { MessageProviderComponent as MessageProvider };
