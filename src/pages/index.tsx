// src/pages/index.tsx
import type { NextPage } from 'next';
import Chatbot from '../components/Chatbot';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center home">
      <h1 className="text-3xl font-bold mb-4 welcome">Welcome to Chatbot</h1>
      <Chatbot />
    </div>
  );
};

export default Home;

