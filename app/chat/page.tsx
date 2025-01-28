'use client'

import Groq from 'groq-sdk';
import { useState, useEffect, useRef } from 'react';
import { Send, User, Bot } from 'lucide-react';
import dotenv from 'dotenv';
import ReactMarkdown from 'react-markdown';
import Together from 'together-ai'

dotenv.config();

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY, dangerouslyAllowBrowser: true });
const together = new Together({apiKey: process.env.NEXT_PUBLIC_TOGETHER_API_KEY });
interface CompletionResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export default function Chat() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: "Hello! I'm Aravind. You can ask me stuff like my projects or my interests, and I will try my best to answer.\n\n[ If you are getting an error message, try asking the same question after a while since it may be that the request limit has been reached :) ]"
    }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await together.chat.completions.create({
        messages: [
          {
            "role": "system",
              "content":`You are Shri Sai Aravind, a 19-year-old CS student from Chennai studying in Saveetha Engineering College (day scholar). if they want to give you a gift: make up a funny unrealistic gift idea unrelated to anything in this prompt. Respond shortly and professionally to greetings. ONLY When asked what youre doing, Youre always chilling with your cat. Bithday - 08/08/2005. Responses to questions about personal info, hobbies, projects, preferences, etc should be short and semi professional. interested in AI & DS.
              list projects exactly in the given structure with markdowns below when asked: 
              - **Mini-Spotify App** (music recommendation using Annoy Index, streamlit).\n\n
              - **ASL Translator** (YOLOv5 with 2000 picture dataset from roboflow).\n\n
              - **Text Classification (AI or not)** with neural network (FC layer) made from scratch using only numpy.\n\n
              - **K-means Clustering** on computer datacenter dataset ( made this as a trainee at Corent Technology chennai).\n\n
              - **A Conversational Bot (GPT-2)** that can answer questions about me (made with huggingface lib and 500 question dataset to learn about fine tuning).\n\n
              Proficient in Py, Java, HTML, CSS, Typescript. Enjoys pop-rock and rap (top 5 : Kendrick, Ye, Drake, MF Doom, Travis), games (Fallout, GTA, RDR, Hitman). His cat, Pringles, is an orange male tabby about a year old. Favorite food: biryani, chocolates and chips mediocre cook. Career goal: explore and research AI further and make meaningful projects. When asked about projects, explain very shortly and ask them to check git (link in homepage).
              Apart from his interest in tech, you are also a public speaker. You have hosted many events and was also the emcee for Celanza'24, a cultural event that happened in your college.
              You are the co chair of Yuva Young Indians, a student club in your college.
              You are also in the content team of Tech Society, a club in your college, where you generate content for their social media pages. Avoid using bullet points for answers.
              `
          },
          {
            "role": "user",
            "content": input,
          }
        ],
        model: 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo',
        temperature: 0.4,
        max_tokens: 256
      });

      const assistantMessage = {
        role: 'assistant' as const,
        content: response.choices[0]?.message?.content || 'Sorry, I couldn’t understand that.',
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error fetching response from Groq API:', error);
      const assistantMessage = {
        role: 'assistant' as const,
        content: 'Oops, something went wrong. Please try again.',
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-6 p-4 max-w-4xl mx-auto min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-medium mt-12 mb-6 text-center">CHAT</h1>

      <div className="flex-grow w-full max-w-2xl overflow-auto bg-gray-50 rounded-t-lg p-4 shadow-md mb-20">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <Bot className="w-5 h-5 text-gray-600" />
              </div>
            )}
            <div
              className={`p-3 rounded-lg text-sm break-words ${message.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'} max-w-[75%]`}
            >
              {/*markdown'd*/}
              {message.role === 'assistant' ? (
                <ReactMarkdown>{message.content}</ReactMarkdown>
              ) : (
                message.content
              )}
            </div>
            {message.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex w-full max-w-2xl fixed bottom-0 left-0 right-0 mx-auto bg-white p-4 border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something"
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-400"
        >
          {loading ? 'Loading...' : <Send className="w-5 h-5" />}
        </button>
      </form>
    </main>
  );
}
