import React, { FC, useRef, useEffect, FormEvent, useState } from "react";
import { PaperPlaneRight, Trash } from "phosphor-react";
import { useTranslation } from "next-i18next";
import { useChat } from "src/hooks/useChat";
import AiAgentChatMessage from "./AiAgentChatMessage";

const AiAgent: FC = () => {
  const { t } = useTranslation("common");
  const { messages, isLoading, sendMessage, clearMessages } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    sendMessage(trimmed);
  };

  return (
    <section className="ai-agent mt-7">
      <h3 className="section-title">
        {t("aiAgent")}
        <span data-number="02" className="divider"></span>
      </h3>

      <div className="card-style ai-agent-card">
        <div className="ai-agent-messages">
          {messages.length === 0 && (
            <p className="text-sm opacity-50 text-center py-10">
              {t("aiAgentPlaceholder")}
            </p>
          )}
          {messages.map((msg, i) => (
            <AiAgentChatMessage
              key={i}
              message={msg}
              isStreaming={
                isLoading &&
                i === messages.length - 1 &&
                msg.role === "assistant"
              }
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="ai-agent-input-area">
          <input
            type="text"
            className="ai-agent-input"
            placeholder={t("aiAgentInputPlaceholder")}
            value={input}
            maxLength={500}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="fo-button-rounded"
            disabled={isLoading || !input.trim()}
          >
            <PaperPlaneRight size={18} weight="bold" />
          </button>
          {messages.length > 0 && (
            <button
              type="button"
              className="fo-button-rounded"
              onClick={clearMessages}
              title={t("aiAgentClear")}
            >
              <Trash size={18} weight="bold" />
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default AiAgent;
