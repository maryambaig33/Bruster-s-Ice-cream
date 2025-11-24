import React, { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { getFlavorRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

const ScoopAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hey there! I'm your AI Scoop Master. Tell me what you're in the mood for—salty, sweet, fruity, or chocolaty—and I'll pick the perfect flavor!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getFlavorRecommendation(userMsg);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-brusterRed p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <Sparkles className="h-6 w-6 text-brusterGold" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white">Scoop Master AI</h2>
              <p className="text-red-100 text-sm">Find your perfect flavor match</p>
            </div>
          </div>
        </div>

        <div className="h-80 bg-gray-50 p-6 overflow-y-auto flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm md:text-base ${
                  msg.role === 'user'
                    ? 'bg-brusterRed text-white rounded-br-none'
                    : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white px-5 py-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin text-brusterRed" />
                <span className="text-gray-500 text-sm">Scooping up an idea...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSend} className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="E.g., I want something with lots of chocolate..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brusterRed focus:border-transparent transition-shadow"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-brusterRed text-white p-3 rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScoopAssistant;