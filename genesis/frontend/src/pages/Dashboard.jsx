import EmotionalBlob from '../components/EmotionalBlob'
import { getHabitScore } from '../utils/helpers'

function ScoreRing({ score }) {
  const circumference = 2 * Math.PI * 58
  const dash = (score / 100) * circumference

  return (
    <div className="relative flex h-52 w-52 items-center justify-center">
      <svg viewBox="0 0 160 160" className="h-full w-full">
        <circle className="metric-ring-track" cx="80" cy="80" r="58" />
        <circle
          className="metric-ring-value"
          cx="80"
          cy="80"
          r="58"
          stroke="url(#dashboardScore)"
          strokeDasharray={`${dash} ${circumference}`}
        />
        <defs>
          <linearGradient id="dashboardScore" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a95a00" />
            <stop offset="100%" stopColor="#f18a00" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[3.4rem] font-extrabold leading-none text-[#2f2c2a]">{score}</span>
        <span className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-stone-400">
          Sound Progress
        </span>
      </div>
    </div>
  )
}

export default function Dashboard({ history }) {
  const rawScore = getHabitScore(history)
  const habitScore = history.length > 0 ? Math.max(48, rawScore) : 75
  const recentEntry = history[0]

  const companionEmotion = habitScore >= 75 ? 'happy' : habitScore >= 55 ? 'focused' : 'thinking'

  const todayHabits = [
    {
      title: 'Hydration Target Met',
      description: '3.2L consumed today',
      emotion: 'happy',
      tone: 'bg-white',
      accent: 'text-emerald-500',
      state: 'ok',
    },
    {
      title: 'Mindful Morning Walk',
      description: '24 mins recorded',
      emotion: 'focused',
      tone: 'bg-white',
      accent: 'text-emerald-500',
      state: 'ok',
    },
    {
      title: recentEntry ? `Latest meal: ${recentEntry.food}` : 'Late Night Snack',
      description: recentEntry ? 'Most recent behaviour logged' : 'Consumed at 11:15 PM',
      emotion: recentEntry ? 'thinking' : 'concerned',
      tone: 'bg-[#fff2f1]',
      accent: 'text-rose-500',
      state: 'alert',
    },
  ]

  const energyBars = [42, 54, 66, 72, 48, 36, 58, 70, 64, 50]

  return (
    <div className="space-y-8 pb-8">
      <section className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="space-y-3">
          <h1 className="page-title">
            Good Evening, <span className="gradient-text">Aditya.</span>
          </h1>
          <p className="page-subtitle">
            Ready to decode your nutritional psychology with a calmer, better aligned dashboard.
          </p>
        </div>

        <div className="flex items-center gap-5 self-start">
          <div className="floating-blob">
            <EmotionalBlob emotion={companionEmotion} size="lg" animated />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_0.72fr_0.92fr] xl:items-start">
        <article className="glass-card relative min-h-[18rem] overflow-hidden rounded-[2.2rem] px-7 py-6">
          <div className="relative z-10 flex h-full max-w-[24rem] flex-col">
            <span className="page-kicker w-fit">Focus State: High Energy</span>
            <h2 className="mt-5 text-[2.1rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-[#2f2c2a]">
              Your metabolic
              <br />
              window is peaking.
            </h2>
            <p className="mt-4 text-[0.98rem] leading-7 text-stone-500">
              Based on your morning activity and hydration, your cognitive focus will be at its highest
              for the next 90 minutes.
            </p>
            <button className="mt-7 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-[#a85400] to-[#ff9400] px-6 py-3 text-sm font-bold text-white shadow-[0_16px_30px_rgba(223,132,0,0.28)]">
              View Recommendations
            </button>
          </div>

          <div className="pointer-events-none absolute right-6 top-9 h-36 w-36 rounded-[2rem] bg-[#8ba0b8]/70" />
          <div className="pointer-events-none absolute right-14 top-16 h-16 w-16 rounded-full bg-[#f6d55f]" />
          <div className="pointer-events-none absolute right-8 top-28 h-24 w-24 rounded-full bg-[#ff9b5e]/80" />
          <div className="pointer-events-none absolute right-24 top-28 h-24 w-24 rounded-full bg-[#f8c14d]/90" />
        </article>

        <article className="min-h-[18rem] rounded-[2.2rem] bg-gradient-to-b from-[#0f67b5] to-[#0c5fa7] px-6 py-6 text-white shadow-[0_24px_44px_rgba(13,96,172,0.26)]">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/65">Behavior Sync</p>
          <div className="mt-4 flex items-start justify-between gap-4">
            <h3 className="text-[2rem] font-extrabold leading-[1.05] tracking-[-0.05em]">
              Consistency
              <br />
              Audit
            </h3>
            <div className="mt-1 rounded-full bg-white/15 p-1.5">
              <EmotionalBlob emotion="tired" size="sm" animated={false} />
            </div>
          </div>
          <p className="mt-5 text-[1rem] leading-7 text-white/80">
            Your consistency in evening logging has decreased by 12%.
          </p>
          <p className="mt-6 max-w-[10rem] text-sm font-semibold leading-6 text-[#ffd56d]">
            Action needed to maintain streak
          </p>
        </article>

        <div className="space-y-5">
          <article className="glass-card rounded-[2.2rem] px-7 py-6 text-center">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-stone-400">Current Habit Score</p>
            <div className="mt-4 flex justify-center">
              <ScoreRing score={habitScore} />
            </div>
            <div className="mt-3 space-y-2 text-left">
              <div className="flex items-center justify-between text-xs font-bold text-stone-500">
                <span>Sleep Impact</span>
                <span className="text-[#4b7734]">+8%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white">
                <div className="h-full w-[64%] rounded-full bg-gradient-to-r from-[#75b653] to-[#5dbe7b]" />
              </div>
            </div>
          </article>

          <article className="soft-panel rounded-[2rem] px-5 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-[#6aa8ff] p-2">
                <EmotionalBlob emotion="thinking" size="sm" animated={false} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1b5fa0]">Optimization Tip</p>
                <p className="mt-1 text-sm leading-6 text-stone-500">
                  Increasing your magnesium intake could improve your sleep latency tonight.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <article className="glass-card rounded-[2.2rem] px-5 py-5">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[#2f2c2a]">Today&apos;s Habits</h3>
            <button className="text-xl font-bold text-stone-400">...</button>
          </div>
          <div className="space-y-4">
            {todayHabits.map((habit) => (
              <div key={habit.title} className={`flex items-center gap-4 rounded-[1.8rem] px-4 py-4 ${habit.tone}`}>
                <EmotionalBlob emotion={habit.emotion} size="sm" animated={false} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold leading-5 text-[#2f2c2a]">{habit.title}</p>
                  <p className="mt-1 text-xs text-stone-400">{habit.description}</p>
                </div>
                <span className={`text-lg font-bold ${habit.accent}`}>{habit.state === 'ok' ? '●' : '▲'}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card rounded-[2.2rem] px-6 py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[#2f2c2a]">Energy Trend</h3>
              <p className="mt-1 text-sm text-stone-400">Biometric feedback from wearable</p>
            </div>
            <span className="w-fit rounded-full bg-[#f4efff] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#6660db]">
              Rest Recommended
            </span>
          </div>

          <div className="mt-7 flex h-52 items-end gap-2">
            {energyBars.map((bar, index) => (
              <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                <div
                  className={`w-full rounded-t-[1rem] ${index === 4 ? 'bg-[#f1bf62]' : 'bg-[#f4d8ae]'}`}
                  style={{ height: `${bar}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.12em] text-stone-400">
            <span>8 AM</span>
            <span>12 PM</span>
            <span>4 PM</span>
            <span>8 PM</span>
            <span>Midnight</span>
          </div>
        </article>
      </section>

      <button className="fixed bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#b55b00] to-[#ff9300] text-3xl text-white shadow-[0_20px_35px_rgba(181,91,0,0.28)]">
        +
      </button>
    </div>
  )
}
