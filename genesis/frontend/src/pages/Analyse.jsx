import { useState } from 'react'
import EmotionalBlob from '../components/EmotionalBlob'
import { analyzeFood } from '../utils/api'
import { getEmotionFromInsight, getTimeContext } from '../utils/helpers'

const moodOptions = [
  { id: 'energetic', label: 'Energetic', face: ':)' },
  { id: 'tired', label: 'Tired', face: 'zZ' },
  { id: 'lazy', label: 'Lazy', face: ':|' },
  { id: 'focused', label: 'Focused', face: 'o/' },
]

function InsightCard({ label, title, body, accent, icon }) {
  return (
    <article className={`glass-card rounded-[2rem] border-l-[3px] px-5 py-5 ${accent}`}>
      <div className="flex items-start justify-between gap-4">
        <span className="w-fit rounded-full px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.18em]">
          {label}
        </span>
        <span className="text-lg font-bold">{icon}</span>
      </div>
      <h3 className="mt-4 text-[1.65rem] font-extrabold leading-tight tracking-[-0.04em] text-[#2f2c2a]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-stone-500">{body}</p>
    </article>
  )
}

export default function Analyse({ addToHistory }) {
  const [food, setFood] = useState('')
  const [mood, setMood] = useState('focused')
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState(null)
  const [emotion, setEmotion] = useState('neutral')
  const [error, setError] = useState('')

  const timeContext = getTimeContext()

  const handleAnalyse = async (event) => {
    event.preventDefault()

    if (!food.trim()) {
      setError('Please enter what you ate')
      return
    }

    setLoading(true)
    setEmotion('thinking')
    setError('')

    try {
      const result = await analyzeFood(food, mood, timeContext)
      setAnalysis(result)
      setEmotion(getEmotionFromInsight(result.insight || ''))

      addToHistory({
        id: Date.now(),
        food,
        mood,
        timeContext,
        analysis: result,
        timestamp: new Date().toISOString(),
      })

      setFood('')
    } catch (err) {
      setError('Failed to analyze. Please try again.')
      setEmotion('concerned')
    } finally {
      setLoading(false)
    }
  }

  const displayCards = analysis
    ? [
        analysis.habitDetected && {
          label: 'Habit Detected',
          title: analysis.habitTitle || 'Screen-Bound Satiety',
          body: analysis.habitDescription || 'A recurring meal-context pattern was detected in your latest entry.',
          accent: 'border-[#a15a0f] [&>div>span:first-child]:bg-[#f8e4cd] [&>div>span:first-child]:text-[#9a5b13]',
          icon: '↺',
        },
        analysis.insight && {
          label: 'Smart Insight',
          title: 'The "Focused" Paradox',
          body: analysis.insight,
          accent: 'border-[#1a6ac6] [&>div>span:first-child]:bg-[#e8f2ff] [&>div>span:first-child]:text-[#1b67be]',
          icon: '•',
        },
        analysis.recommendation && {
          label: 'Recommendation',
          title: 'The Pre-Movie Buffer',
          body: analysis.recommendation,
          accent: 'border-[#8d6c00] [&>div>span:first-child]:bg-[#f3ecd7] [&>div>span:first-child]:text-[#866600]',
          icon: '✓',
        },
      ].filter(Boolean)
    : [
        {
          label: 'Habit Detected',
          title: 'Screen-Bound Satiety',
          body: 'You tend to consume high-density caloric meals during evening entertainment sessions.',
          accent: 'border-[#a15a0f] [&>div>span:first-child]:bg-[#f8e4cd] [&>div>span:first-child]:text-[#9a5b13]',
          icon: '↺',
        },
        {
          label: 'Smart Insight',
          title: 'The "Focused" Paradox',
          body: 'Your focused mood often leads to delayed cortisol spikes and late-night cravings for high-sodium foods.',
          accent: 'border-[#1a6ac6] [&>div>span:first-child]:bg-[#e8f2ff] [&>div>span:first-child]:text-[#1b67be]',
          icon: '•',
        },
        {
          label: 'Recommendation',
          title: 'The Pre-Movie Buffer',
          body: 'Incorporate a high-protein snack 45 minutes before screen time to stabilize appetite signals.',
          accent: 'border-[#8d6c00] [&>div>span:first-child]:bg-[#f3ecd7] [&>div>span:first-child]:text-[#866600]',
          icon: '✓',
        },
      ]

  return (
    <div className="space-y-8 pb-8">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="page-kicker">
            <span className="text-[0.6rem]">◔</span>
            {timeContext}
          </span>
          <span className="text-sm font-semibold text-stone-400">Session Context Auto-detected</span>
        </div>
        <h1 className="page-title">
          Behavioural<span className="gradient-text">Intelligence</span>
        </h1>
      </section>

      <section className="grid gap-7 xl:grid-cols-[minmax(0,1.45fr)_21rem] xl:items-start">
        <article className="glass-card rounded-[2.4rem] px-6 py-6 md:px-8 md:py-7">
          <form onSubmit={handleAnalyse}>
            <label className="text-xl font-extrabold tracking-[-0.04em] text-[#2f2c2a]">What did you eat?</label>
            <div className="mt-6 rounded-[1.8rem] bg-[#f2ece4] p-4">
              <textarea
                value={food}
                onChange={(event) => setFood(event.target.value)}
                placeholder="e.g., A double cheeseburger while watching a movie..."
                className="h-36 w-full resize-none rounded-[1.3rem] border-none bg-transparent px-2 py-2 text-lg leading-8 text-[#5b5752] outline-none placeholder:text-stone-300"
              />
            </div>

            <div className="mt-8">
              <p className="text-[0.76rem] font-bold uppercase tracking-[0.18em] text-stone-400">Current Mood</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {moodOptions.map((option) => {
                  const selected = option.id === mood

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setMood(option.id)}
                      className={`rounded-full px-5 py-3 text-sm font-bold transition-all ${
                        selected
                          ? 'bg-gradient-to-r from-[#ff8f00] to-[#ffb000] text-[#4f2500] shadow-[0_16px_28px_rgba(255,146,0,0.22)]'
                          : 'bg-[#ece6df] text-stone-600'
                      }`}
                    >
                      {option.label} <span className="ml-1 text-xs">{option.face}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {error && (
              <div className="mt-6 rounded-[1.3rem] bg-[#fff0eb] px-4 py-3 text-sm font-semibold text-[#b14a21]">
                {error}
              </div>
            )}

            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-gradient-to-r from-[#a34c00] to-[#ff8d00] px-9 py-4 text-lg font-bold text-white shadow-[0_18px_32px_rgba(185,99,0,0.24)] transition-all hover:translate-y-[-1px] disabled:opacity-50"
              >
                {loading ? 'Analysing Behaviour...' : 'Analyse Behaviour ✦'}
              </button>
            </div>
          </form>
        </article>

        <div className="space-y-5">
          <article className="glass-card flex items-center gap-4 rounded-[2rem] px-5 py-5">
            <div className="rounded-[1.3rem] bg-white p-2 shadow-[0_10px_20px_rgba(60,44,28,0.08)]">
              <EmotionalBlob emotion={loading ? 'thinking' : emotion} size="md" animated={loading} />
            </div>
            <div>
              <p className="text-xl font-extrabold tracking-[-0.04em] text-[#2f2c2a]">
                {loading ? 'Synthesis in progress...' : 'Cross-pattern synthesis'}
              </p>
              <p className="mt-1 text-sm leading-6 text-stone-500">
                {loading
                  ? 'Cross-referencing circadian rhythm and dietary patterns.'
                  : `Reviewing ${timeContext} cues, emotion, and meal density for hidden patterns.`}
              </p>
            </div>
          </article>

          {displayCards.map((card) => (
            <InsightCard key={card.label} {...card} />
          ))}
        </div>
      </section>
    </div>
  )
}
