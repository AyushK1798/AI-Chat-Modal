import { useRef } from "react";
import { useEffect } from "react";
import Markdown from "react-markdown";
import BotIcon from "../assets/BotIcon";
import UserIcon from "../assets/UserIcon";
import TypingIndicator from "./TypingIndicator";
import remarkGfm from 'remark-gfm'

const ConversationsCard = ({ conversations, isTyping }) => {

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [conversations, isTyping]);
  

  return (
    <div 
    ref={containerRef} 
    className=" overflow-auto conversation-card">
      {conversations?.map((convo, index) => (
        <div
          key={index}
          className={`convo d-flex gap-2 mb-2 ${
            convo.who === "user" ? "flex-row-reverse" : ""
          }`}
        >
          {convo.who === "user" ? <UserIcon /> : <BotIcon />}

          <Markdown
            className={
              convo.who === "user"
                ? "chat-item bg-dark text-white p-2 rounded"
                : "chat-item bg-light text-dark p-2 rounded"
            }
            remarkPlugins={[remarkGfm]}
          >
            {convo.content.text.text}
          </Markdown>
        </div>
      ))}
      {isTyping && (
        <div className="convo d-flex gap-2 mb-2">
          <BotIcon />
          <TypingIndicator className="text-start" />
        </div>
      )}
    </div>
  );
};

export default ConversationsCard;