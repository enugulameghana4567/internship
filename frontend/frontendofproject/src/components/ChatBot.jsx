import { useState } from "react";
import "./ChatBot.css";

const qaData = {
  "what is an internship":
    "An internship is a short-term work experience where students gain practical industry exposure related to their field of study.",
  "why are internships important":
    "Internships help students apply theoretical knowledge, gain real-world skills, and improve employability.",
  "what is placement":
    "Placement is the process where students get jobs through colleges or companies.",
  "what is aptitude test":
    "An aptitude test measures logical reasoning, math, and verbal skills.",
  "what is hr interview":
    "HR interview evaluates personality, attitude, and communication skills.",
  default:
    "Sorry, I don’t have an answer for that yet. Please ask about internships, skills, or placements."
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    const key = question.toLowerCase().trim();
    setAnswer(qaData[key] || qaData.default);
  };

  return (
    <>
      {/* Floating chatbot image */}
      <img
        src="/OIP.jpg"
        alt="AI Chatbot"
        className="chatbot-icon"
        onClick={() => setOpen(!open)}
      />

      {/* Chat window */}
      {open && (
        <div className="chatbot-box">
          <h4>AI Chatbot</h4>

          <input
            type="text"
            placeholder="Ask a question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button onClick={handleAsk}>Ask</button>

          {answer && <p className="chat-answer">{answer}</p>}
        </div>
      )}
    </>
  );
}
