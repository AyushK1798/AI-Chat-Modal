import { useRef } from "react";
import { useEffect } from "react";
import Markdown from "react-markdown";
import BotIcon from "../assets/BotIcon";
import UserIcon from "../assets/UserIcon";
import TypingIndicator from "./TypingIndicator";
import remarkGfm from 'remark-gfm'

const ConversationsCard = ({ conversations, isTyping }) => {
  // const containerRef = useRef(null); // Reference for the container
  // const conversationEndRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const endElement = conversationEndRef.current;
  //   if (container && endElement) {
  //     endElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [conversations, isTyping]);

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

// import { useRef } from "react";
// import { useEffect, useState } from "react";
// import Markdown from "react-markdown";
// import BotIcon from "../assets/BotIcon";
// import UserIcon from "../assets/UserIcon";
// import TypingIndicator from "./TypingIndicator";

// const ConversationsCard = ({ conversations }) => {
//   //   const [conversations, setConversations] = useState([]);
//   const conversationEndRef = useRef(null);
//   useEffect(() => {
//     //   const localData = localStorage.getItem("conversations");
//     //   const conversations = JSON.parse(localData);
//     //   setConversations(conversations);
//     conversationEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [conversations]);

//   // console.log(conversations);
//   return (
//     <div className="overflow-auto conversation-card">
//       {conversations?.map((convo, index) => (
//         // <div
//         //   key={index}
//         //   className={convo.who === "user" ? "m-2 text-end" : "m-2 text-start"}
//         // >
//         //   {/* <span className="text-secondary rounded bg-light p-1">{convo?.who}</span> */}
//         //   <p
//         // className={
//         //   convo.who === "user"
//         //     ? "chat-item bg-light p-2 rounded"
//         //     : "chat-item bg-dark text-light p-2 rounded"
//         // }
//         //   >
//         //     {convo?.content.text.text}
//         //   </p>
//         // </div>
//         <div
//           key={index}
//           // className={convo.who === "user" ? "m-2 text-end" : "m-2 text-start"}
//           className={`convo d-flex gap-2 mb-2 ${
//             convo.who === "user" ? "flex-row-reverse" : ""
//           }`}
//         >
//           {/* <span
//             className={`rounded p-1 ${
//               convo.who === "user" ? "bg-light" : "bg-dark text-white"
//             }`}
//           >
//             {convo.who}
//           </span> */}
//           {convo.who === "user" ? <UserIcon /> : <BotIcon />}
//           <Markdown
//             className={
//               convo.who === "user"
//                 ? "chat-item bg-dark text-white p-2 rounded"
//                 : "chat-item bg-light text-dark p-2 rounded"
//             }
//           >
//             {convo.content.text.text}
//           </Markdown>
//         </div>
//       ))}
//       <div ref={conversationEndRef} />
//     </div>
//   );
// };

// export default ConversationsCard;
