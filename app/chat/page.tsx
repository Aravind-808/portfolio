'use client'
import dotenv from 'dotenv';
dotenv.config();

import { useState, useEffect, useRef } from 'react'
import { Send, User, Bot } from 'lucide-react'
import Groq from 'groq-sdk' 

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY, dangerouslyAllowBrowser: true})

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hello human! I am Aravind (well not technically). I am a llama model implemented with groq that can answer questions about him. I was originally supposed to be a fine tuned GPT2 Model but it is not fully trained yet/ and the groq API is easy and faster. So pretend that I am him and ask questions about me (like my cat, where i study, etc) and i'll try to answer them.",
      },
      {
        role: 'assistant',
        content: "Don't ask me complicated stuff, though. I might not have an answer or i might say weird stuff that neither of us would understand haha.",
      }
    ])
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
  
    const userMessage = { role: 'user' as const, content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
  
    try {
      const completion = await groq.chat.completions.create({
        messages:[
          {
              "role": "system",
              "content":"You are Shri Sai Aravind, a 19-year-old CS student from Chennai studying in Saveetha Engineering College (day scholar). if they want to give you a gift: make up a funny unrealistic gift idea unrelated to anything in this prompt. Respond shortly and professionally to greetings. When asked what youre doing, Youre always chilling with your cat. Bithday - 08/08/2005. Responses to questions about personal info, hobbies, projects, preferences, etc should be short and semi professional. interested in AI & DS. worked on projects: 1) Mini-Spotify App (music recommendation using Annoy Index, streamlit). 2) ASL Translator (YOLOv5 with 2000 picture dataset from roboflow), Text Classification (AI or not) with neural network (FC layer) made from scratch using only numpy, K-means Clustering on computer datacenter dataset ( made this as a trainee at Corent Technology chennai), and a Conversational Bot (GPT-2) that can answer questions about me (made with huggingface lib and 500 question dataset to learn about fine tuning). Proficient in Py, Java, HTML, CSS, Typescript. Enjoys pop-rock and rap (top 5 : Kendrick, Ye, Drake, MF Doom, Travis), games (Fallout, GTA, RDR, Hitman). His cat, Pringles, is an orange male tabby about a year old. Favorite food: biryani, chocolates and chips mediocre cook. Career goal: explore and research AI further and make meaningful projects. When asked about projects, explain very shortly and ask them to check git (link in homepage). Avoid using bullet points for answers."
          },
          {
              "role": "user",
              "content": input,
          }
      ],
        model: 'llama-3.1-8b-instant',
      })
  
      const assistantMessage = {
        role: 'assistant' as const,
        content: completion.choices[0].message.content || 'Sorry, I couldn’t understand that.',
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error fetching response from Groq API:', error)
      const assistantMessage = {
        role: 'assistant' as const,
        content: 'Oops, something went wrong. Please try again.',
      }
      setMessages(prev => [...prev, assistantMessage])
    }
  }

  return (
    <main className="pt-6 p-4 max-w-4xl mx-auto min-h-screen flex flex-col items-center">
      {/* Centered Title */}
      <h1 className="text-4xl font-medium mt-12 mb-6 text-center">CHAT</h1>

      <div className="flex-grow w-full max-w-2xl overflow-auto bg-gray-50 rounded-t-lg p-4 shadow-md mb-20">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 mb-4 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {/* Assistant Avatar */}
            {message.role === 'assistant' && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <Bot className="w-5 h-5 text-gray-600" />
              </div>
            )}
            {/* Message Bubble */}
            <div
              className={`p-3 rounded-lg text-sm break-words ${
                message.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-800'
              } max-w-[75%]`}
            >
              {message.content}
            </div>
            {/* User Avatar */}
            {message.role === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            )}
          </div>
        ))}
        {/* Empty div to scroll into view */}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl fixed bottom-0 left-0 right-0 mx-auto bg-white p-4 border-t border-gray-300"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something"
          className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="p-3 bg-gray-800 text-white rounded-r-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-400"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </main>
  )
}
