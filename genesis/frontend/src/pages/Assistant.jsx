import { useState, useRef, useEffect } from 'react'
import EmotionalBlob from '../components/EmotionalBlob'
import { askAssistant } from '../utils/api'

export default function Assistant({ history }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! I'm your Genesis AI Assistant. Ask me anything about your eating behaviour, habits, or get personalized recommendations.",
      emotion: 'happy'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEnd = useRef(null)

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: input,
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await askAssistant(input, {
        history: history.slice(0, 5),
        recentMoods: history.slice(0, 3).map(h => h.mood),
      })

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: response.answer,
        emotion: response.emotion || 'focused',
        recommendation: response.recommendation,
      }
      setMessages(prev => [...prev, botMessage])
    } catch (err) {
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: "Sorry, I couldn't process that. Try asking about your recent meals or mood patterns.",
        emotion: 'concerned',
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  const suggestions = [
    "Should I eat this snack now?",
    "What patterns do you see in my meals?",
    "How can I improve my evening eating?",
    "What's my most consistent habit?",
  ]

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight">
          Genesis Assistant
        </h1>
        <p className="text-on-surface-variant font-body max-w-2xl">
          Ask questions about your behaviour and get AI-powered insights
        </p>
      </div>

      <div className="glass-card rounded-xl shadow-[0px_12px_40px_rgba(140,74,0,0.06)] overflow-hidden flex flex-col h-[600px]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} gap-3`}
            >
              {message.type === 'bot' && (
                <div className="flex-shrink-0">
                  <EmotionalBlob emotion={message.emotion || 'focused'} size="sm" animated={false} />
                </div>
              )}
              
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary'
                    : 'bg-surface-container-low text-on-surface'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                {message.recommendation && (
                  <div className="mt-2 pt-2 border-t border-current border-opacity-20">
                    <p className="text-xs font-semibold">💡 {message.recommendation}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start gap-3">
              <div className="flex-shrink-0">
                <EmotionalBlob emotion="thinking" size="sm" animated />
              </div>
              <div className="bg-surface-container-low text-on-surface px-4 py-3 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-on-surface rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEnd} />
        </div>

        {/* Suggestions (if no conversation yet) */}
        {messages.length <= 1 && !loading && (
          <div className="px-6 py-4 border-t border-surface-variant">
            <p className="text-xs font-bold text-on-surface-variant uppercase mb-3">
              Try asking:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => setInput(suggestion)}
                  className="text-xs text-left p-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-surface-variant p-4 bg-surface-container-lowest">
          <form
            onSubmit={e => {
              e.preventDefault()
              handleSend()
            }}
            className="flex gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about your meals, moods, or habits..."
              className="flex-1 bg-background border-2 border-outline/20 rounded-lg px-4 py-2 text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-lg font-bold transition-all disabled:opacity-50 hover:shadow-lg"
            >
              {loading ? '...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
