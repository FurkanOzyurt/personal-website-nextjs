import React, { FC } from "react";
import { Robot, User } from "phosphor-react";
import type { ChatMessage } from "src/types/chat";

interface Props {
  message: ChatMessage;
  isStreaming: boolean;
}

const AiAgentChatMessage: FC<Props> = ({ message, isStreaming }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 mb-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser ? "bg-primary" : "bg-light-bg"
        }`}
      >
        {isUser ? (
          <User size={16} weight="bold" className="text-light-white" />
        ) : (
          <Robot size={16} weight="bold" className="text-light-text" />
        )}
      </div>
      <div
        className={`max-w-[80%] rounded-[10px] px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-light-white"
            : "bg-light-bg text-light-text"
        }`}
      >
        {message.content ? (
          <span style={{ whiteSpace: "pre-wrap" }}>{message.content}</span>
        ) : isStreaming ? (
          <span className="ai-agent-typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default AiAgentChatMessage;
