import { useEffect, useRef, useState } from "react";
import ConversationsCard from "./ConversationsCard";
import axios from "axios";
// import ConversationCard from "./ConversationCard";

const convo = [
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
  // {
  //   who: "Bot",
  //   content: {
  //     text: {
  //       text: "Hello, I am Batman, how can I help you",
  //     },
  //   },
  // },
];

const ChatApp = () => {
  const [userText, setUserText] = useState("");
  const [conversations, setConversations] = useState(convo);
  const [isTyping, setIsTyping] = useState(false); // State for typing indicator

  const resetTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "40px";
      textarea.style.overflowY = "hidden";
    }
  };

  const handleAPICall = async (inputText) => {
    let conversation = {
      who: "user",
      content: {
        text: {
          text: inputText,
        },
      },
    };
    // // conversations.push(conversation);
    setConversations((prevConversations) => [
      ...prevConversations,
      conversation,
    ]);
    setIsTyping(true); // Show typing indicator
    // const textQueryVariable = {
    //   text: userText,
    // };
    try {
      const response = await axios.post(
        // `https://gaffis.in/gaffis-chatbot/api/dialogflow/textQuery`,
        // "http://localhost:5000/api/dialogflow/textquery",
        // textQueryVariable
        "http://localhost:3000/api/ai/process",
        {
          input: inputText,
        }
      );

      // const content = response.data.fulfillmentMessages[0];
      let res = response.data;
      let content = {
        text: res,
      };
      conversation = {
        who: "Bot",
        content,
      };
      //   conversations.push(conversation);
      setConversations((prevConversations) => [
        ...prevConversations,
        conversation,
      ]);
    } catch (error) {
      conversation = {
        who: "Bot",
        content: {
          text: {
            text: "Error Occured , please check the problem",
          },
        },
      };
      //   conversations.push(conversation);
      setConversations((prevConversations) => [
        ...prevConversations,
        conversation,
      ]);
    }
    setIsTyping(false); // Show typing indicator
  };

  const handleMessageSend = async (e) => {
    e.preventDefault();
    if (userText) {
      const inputText = userText;
      setUserText("");
      resetTextareaHeight();
      await handleAPICall(inputText);
    } else {
      alert("Type something first");
    }
  };

  const textareaRef = useRef(null);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, 200);
      textarea.style.height = `${newHeight}px`;

      // If content exceeds 500px, add overflow-y: auto
      if (textarea.scrollHeight > 200) {
        textarea.style.overflowY = "auto";
      } else {
        textarea.style.overflowY = "hidden";
      }
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", autoResize);
      // Initial resize to account for default content
      autoResize();
      // Cleanup event listener on component unmount
      return () => {
        textarea.removeEventListener("input", autoResize);
      };
    }
  }, []);

  return (
    <div className="content-box m-3  border bg-white p-3">
      <div className="user-input-container d-flex justify-content-end flex-column">
        {conversations?.length <= 0 ? (
          // <div className="container">
          //   <div className="row g-4">
          //     <div className="col-md-6 card p-4">A</div>
          //     <div className="col-md-6 card p-4">B</div>
          //     <div className="col-md-6 card p-4">C</div>
          //     <div className="col-md-6 card p-4">D</div>
          //   </div>
          // </div>
          // <div className="container text-center">
          //   <div className="row gy-5 mt-0 mb-4">
          //     <div className="col-6 mt-4">
          //       <div className="p-3 border">Custom column padding Custom column padding</div>
          //     </div>
          //     <div className="col-6 mt-4">
          //       <div className="p-3 border">Custom column padding</div>
          //     </div>
          //     <div className="col-6 mt-4">
          //       <div className="p-3 border">Custom column padding</div>
          //     </div>
          //     <div className="col-6 mt-4">
          //       <div className="p-3 border">Custom column padding</div>
          //     </div>
          //   </div>
          // </div>
          <div className="container initial-layout text-center">
            <div className="row gy-5 mt-0 mb-5">
              <div className="col-6 mt-4 d-flex align-items-stretch">
                <div className="p-3 border custom-box flex-fill d-flex flex-column justify-content-center">
                  <p className="box-title">
                    <strong>Welcome to Our AI Chat!</strong>
                  </p>
                  <p className="box-content">
                    Not sure where to start? How about saying hello?
                  </p>
                </div>
              </div>
              <div className="col-6 mt-4 d-flex align-items-stretch">
                <div className="p-3 border custom-box flex-fill d-flex flex-column justify-content-center">
                  <p className="box-title">
                    <strong>Ask Us Anything!</strong>
                  </p>
                  <p className="box-content">
                    Have a question? We're here to help. Just type and send!
                  </p>
                </div>
              </div>
              <div className="col-6 mt-4 d-flex align-items-stretch">
                <div className="p-3 border custom-box flex-fill d-flex flex-column justify-content-center">
                  <p className="box-title">
                    <strong>Need Suggestions?</strong>
                  </p>
                  <p className="box-content">
                    We can provide tips or recommendations. Just let us know
                    what you need.
                  </p>
                </div>
              </div>
              <div className="col-6 mt-4 d-flex align-items-stretch">
                <div className="p-3 border custom-box flex-fill d-flex flex-column justify-content-center">
                  <p className="box-title">
                    <strong>Start Your Conversation</strong>
                  </p>
                  <p className="box-content">
                    Feel free to ask anything or simply say hi to begin!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ConversationsCard
            conversations={conversations}
            isTyping={isTyping}
          />
        )}
        {/* Pass isTyping prop */}
        {/* Display TypingIndicator if isTyping is true */}
        <form className="mt-1">
          <div className="d-flex gap-2 p-2 rounded border border-secondary">
            <textarea
              ref={textareaRef}
              className="auto-resizing"
              placeholder="Type a Message"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
            />
            <button className="h-50 mt-auto" onClick={handleMessageSend}>
              <ArrowUpIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatApp;

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}
