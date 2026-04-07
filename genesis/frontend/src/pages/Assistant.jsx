import { useEffect, useRef, useState } from 'react'
import EmotionalBlob from '../components/EmotionalBlob'
import { askAssistant } from '../utils/api'

export default function Assistant({ history }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! I'm your Genesis AI Assistant. Ask me anything about your eating behaviour, habits, or personalized recommendations.",
      emotion: 'happy',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEnd = useRef(null)

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await askAssistant(input, {
        history: history.slice(0, 5),
        recentMoods: history.slice(0, 3).map((entry) => entry.mood),
      })

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'bot',
          text: response.answer,
          emotion: response.emotion || 'focused',
          recommendation: response.recommendation,
        },
      ])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: 'bot',
          text: "Sorry, I couldn't process that. Try asking about your recent meals or mood patterns.",
          emotion: 'concerned',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const suggestions = [
    'Should I eat this snack now?',
    'What patterns do you see in my meals?',
    'How can I improve my evening eating?',
    "What's my most consistent habit?",
  ]

  return (
    <div className="space-y-8 pb-8">
      <section className="space-y-3">
        <h1 className="page-title">
          Genesis <span className="gradient-text">Assistant</span>
        </h1>
        <p className="page-subtitle">
          Ask questions about your behaviour and get a cleaner, better structured conversational view.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_0.82fr] xl:items-start">
        <article className="glass-card flex h-[42rem] flex-col overflow-hidden rounded-[2.4rem]">
          <div className="border-b border-white/70 px-6 py-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-stone-400">Conversation Stream</p>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'bot' && <EmotionalBlob emotion={message.emotion || 'focused'} size="sm" animated={false} />}

                <div
                  className={`max-w-[28rem] rounded-[1.6rem] px-4 py-4 text-sm leading-7 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-[#a75300] to-[#ff9200] text-white'
                      : 'bg-white/80 text-[#2f2c2a]'
                  }`}
                >
                  <p>{message.text}</p>
                  {message.recommendation && (
                    <p className="mt-3 border-t border-current/15 pt-3 text-xs font-semibold uppercase tracking-[0.12em]">
                      Insight: {message.recommendation}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-3">
                <EmotionalBlob emotion="thinking" size="sm" animated />
                <div className="rounded-[1.6rem] bg-white/80 px-4 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-stone-500" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-stone-500" style={{ animationDelay: '0.15s' }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-stone-500" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEnd} />
          </div>

          <div className="border-t border-white/70 bg-white/40 px-5 py-4">
            <form
              onSubmit={(event) => {
                event.preventDefault()
                handleSend()
              }}
              className="flex gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about your meals, moods, or habits..."
                disabled={loading}
                className="flex-1 rounded-full border border-white/70 bg-white/90 px-5 py-3 text-sm text-[#2f2c2a] outline-none placeholder:text-stone-400"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-full bg-gradient-to-r from-[#a34c00] to-[#ff9000] px-6 py-3 text-sm font-bold text-white disabled:opacity-50"
              >
                {loading ? '...' : 'Send'}
              </button>
            </form>
          </div>
        </article>

        <div className="space-y-5">
          <article className="glass-card rounded-[2rem] px-5 py-5">
            <h2 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#2f2c2a]">Suggested Prompts</h2>
            <div className="mt-5 space-y-3">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="block w-full rounded-[1.4rem] bg-white/75 px-4 py-4 text-left text-sm font-semibold leading-6 text-stone-600 transition-all hover:bg-white"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-[2rem] px-5 py-5">
            <span className="page-kicker">Memory Snapshot</span>
            <p className="mt-5 text-[2rem] font-extrabold leading-tight tracking-[-0.04em] text-[#2f2c2a]">
              {history.length} tracked behaviour entries
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-500">
              The assistant uses your recent food logs and mood shifts to tailor each reply.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
