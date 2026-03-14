import { useState, useRef, useEffect, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HeartPulse, Bot, Send, Globe } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { languages, type LangCode } from '../lib/translations'

interface Message {
  id: string
  sender: 'user' | 'bot'
  text: string
  timestamp: Date
}

const INITIAL_GREETING =
  "Namaste! 🙏 I'm Sehat-Saathi, your AI health assistant. How can I help you today? You can ask me about symptoms, diseases, prevention tips, or general health advice."

const SUGGESTIONS = [
  'What are symptoms of dengue?',
  'How to prevent malaria?',
  'Tips for managing diabetes',
  'When should I see a doctor for fever?',
  'How to boost immunity?',
]

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 max-w-[80%]">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <Bot className="w-4 h-4 text-primary" />
      </div>
      <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-2 h-2 rounded-full bg-slate-400"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function ChatPage() {
  const { language, setLanguage, t } = useLanguage()

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'greeting',
      sender: 'bot',
      text: INITIAL_GREETING,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasUserSent, setHasUserSent] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  async function sendMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isLoading) return

    setHasUserSent(true)
    setInput('')

    const userMsg: Message = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: trimmed,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, language }),
      })

      if (!res.ok) throw new Error('Request failed')

      const data = (await res.json()) as { reply: string; disclaimer: string }

      const botMsg: Message = {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: data.reply,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMsg])
    } catch {
      const errorMsg: Message = {
        id: crypto.randomUUID(),
        sender: 'bot',
        text: "I'm sorry, I couldn't process your request. Please try again.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    void sendMessage(input)
  }

  function formatTime(date: Date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="min-h-screen pt-20 pb-6 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-blue-50/30">
      <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-6rem)]">
        {/* Chat Card */}
        <div className="flex flex-col flex-1 min-h-0 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="flex-shrink-0 border-b border-slate-100 bg-white px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-800">
                    Sehat<span className="text-primary">-Saathi</span>
                  </h1>
                  <div className="flex items-center gap-1.5">
                    <span className="block w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-green-600 font-medium">Online</span>
                  </div>
                </div>
              </div>

              {/* Language selector */}
              <div className="flex items-center gap-1.5 text-slate-500">
                <Globe className="w-4 h-4" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as LangCode)}
                  className="appearance-none bg-transparent text-sm font-medium cursor-pointer pr-4 focus:outline-none text-slate-700"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-3 flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2">
              <span className="flex-shrink-0 text-sm leading-relaxed">⚠️</span>
              <p className="text-xs text-amber-800 leading-relaxed">
                {t.chat.disclaimer}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="flex items-end gap-2 max-w-[80%]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3">
                          <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                            {msg.text}
                          </p>
                        </div>
                        <span className="text-[10px] text-slate-400 mt-1 ml-1 block">
                          {formatTime(msg.timestamp)}
                        </span>
                      </div>
                    </div>
                  )}

                  {msg.sender === 'user' && (
                    <div className="max-w-[80%]">
                      <div className="bg-primary text-white rounded-2xl rounded-br-sm px-4 py-3">
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">
                          {msg.text}
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 mr-1 block text-right">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TypingIndicator />
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <AnimatePresence>
            {!hasUserSent && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex-shrink-0 border-t border-slate-100 px-4 sm:px-6 py-3 overflow-hidden"
              >
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((suggestion, i) => (
                    <motion.button
                      key={suggestion}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.25 }}
                      onClick={() => void sendMessage(suggestion)}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className="flex-shrink-0 border-t border-slate-200 bg-white px-4 sm:px-6 py-3"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                placeholder={t.chat.placeholder}
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
