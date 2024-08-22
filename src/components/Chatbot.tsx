"use client";

import React, { useState } from 'react';
import styles from './Chatbot.module.css'; // Import CSS Module

interface Message {
  text: string;
  type: 'user' | 'bot';
}

const predefinedResponses: { [key: string]: string } = {
  "What services do you offer?": "We offer a variety of services including web development, mobile app development, and UX/UI design.",
  "How can I contact support?": "You can contact support via email at sachinkrtiwari299@gmail.com or call us at (97) 940-54532.",
  // Add more predefined responses as needed
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, type: 'user' };
    setMessages([...messages, userMessage]);

    const botResponse = predefinedResponses[input.trim()] || "Sorry, I don't understand that.";
    const botMessage: Message = { text: botResponse, type: 'bot' };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className={styles.mobileFrame}>
      <div className={styles.statusBar}></div>
      <div className={styles.chatContainer}>
        <div className={styles.chatArea}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.inputField}
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className={styles.sendButton}
          >
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
