import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatApp from "./components/ChatApp";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="chat-app">
      <header className="py-3 px-4 bg-dark text-white sticky-top">
        <h3 className="f-heading ">
          <span className="text-purple">AI Chat</span> Modal
        </h3>
      </header>
      <ChatApp />
      <footer className="py-3 px-5 bg-dark text-white d-flex align-items-center justify-content-between flex-wrap">
        <div>
          <p>
            Designed and Developed By{" "}
            <span className="text-purple">
              <strong>Ayush Khobragade</strong>
            </span>
          </p>
          <p className="d-flex align-items-center">
            <MdEmail className="fs-4 me-2 text-purple" />
            <a
              href="mailto:ayushkhobragade17@gmail.com"
              className="text-white text-decoration-none"
            >
              ayushkhobragade17@gmail.com
            </a>
          </p>
        </div>
        <ul className="socials list-unstyled d-flex gap-3">
          <li className="fs-4">
            <a
              href="https://www.linkedin.com/in/ayush-khobragade-a5525b128/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="fs-4">
            <a
              href="https://github.com/AyushK1798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
