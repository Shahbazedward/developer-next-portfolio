"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Bot,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";

import { motion } from "motion/react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What technologies do you use?",
  "Tell me about your projects.",
  "What services do you offer?",
  "Can you build a full-stack application?",
];

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hi. I’m the portfolio AI assistant. Ask me about the developer’s projects, technologies, services or development process.",
};

export default function PortfolioAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    initialMessage,
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesContainerRef =
    useRef<HTMLDivElement>(null);

  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    const container =
      messagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const cleanText = text.trim();

    if (!cleanText || loading) return;

    const userMessage: Message = {
      role: "user",
      content: cleanText,
    };

    const conversation = [
      ...messages,
      userMessage,
    ];

    setMessages(conversation);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: conversation,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Request failed",
        );
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I couldn't connect to the AI service right now. Please try again shortly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    void sendMessage(input);
  }

  return (
    <div className="ai-assistant">
      <div className="ai-assistant__topbar">
        <div className="ai-assistant__identity">
          <div className="ai-assistant__avatar">
            <Bot size={20} />
          </div>

          <div>
            <strong>Portfolio AI</strong>

            <span>
              <i />
              ONLINE
            </span>
          </div>
        </div>

        <div className="ai-assistant__powered">
          <Sparkles size={13} />
          AI ASSISTANT
        </div>
      </div>

      <div
        ref={messagesContainerRef}
        className="ai-assistant__messages"
        aria-live="polite"
      >
        {messages.map((message, index) => (
          <motion.div
            key={`${message.role}-${index}`}
            className={`ai-message ai-message--${message.role}`}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <div className="ai-message__icon">
              {message.role === "assistant" ? (
                <Bot size={15} />
              ) : (
                <UserRound size={15} />
              )}
            </div>

            <div className="ai-message__bubble">
              {message.content}
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div
            className="ai-message ai-message--assistant"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <div className="ai-message__icon">
              <Bot size={15} />
            </div>

            <div className="ai-message__bubble ai-message__typing">
              <span />
              <span />
              <span />
            </div>
          </motion.div>
        )}
      </div>

      {messages.length === 1 && (
        <div className="ai-assistant__suggestions">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() =>
                void sendMessage(suggestion)
              }
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <form
        className="ai-assistant__form"
        onSubmit={handleSubmit}
      >
        <input
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          placeholder="Ask about projects, skills or services..."
          maxLength={500}
          aria-label="Ask the portfolio AI assistant"
          autoComplete="off"
        />

        <button
          type="submit"
          disabled={
            loading ||
            input.trim().length === 0
          }
          aria-label="Send message"
        >
          <Send size={17} />
        </button>
      </form>
    </div>
  );
}