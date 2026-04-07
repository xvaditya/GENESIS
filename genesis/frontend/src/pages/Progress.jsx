import { getHabitScore } from '../utils/helpers'

function RingCard({ score }) {
  const circumference = 2 * Math.PI * 70
  const dash = (score / 100) * circumference

  return (
    <article className="glass-card relative rounded-[2.4rem] px-7 py-7">
      <div className="pointer-events-none absolute right-5 top-5 rounded-full bg-[#cbab7a]/85 p-2">
        <span className="block h-8 w-8 rounded-full border-2 border-[#88a5d6] text-center text-sm leading-7 text-[#88a5d6]">
          ◔
        </span>
      </div>
      <div className="mx-auto flex max-w-[20rem] flex-col items-center text-center">
        <div className="relative h-60 w-60">
          <svg viewBox="0 0 180 180" className="h-full w-full">
            <circle cx="90" cy="90" r="70" className="metric-ring-track" />
            <circle
              cx="90"
              cy="90"
              r="70"
              className="metric-ring-value"
              stroke="#050505"
              strokeDasharray={`${dash} ${circumference}`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[4rem] font-extrabold leading-none text-[#2f2c2a]">{score}</span>
            <span className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-stone-400">
              Habit Score
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-stone-500">
          You&apos;re in the top <span className="font-bold text-[#b16b16]">12%</span> of Genesis users
          this week. Your morning focus sessions are driving this peak.
        </p>
      </div>
    </article>
  )
}

export default function Progress({ history }) {
  const score = history.length > 0 ? Math.max(52, getHabitScore(history)) : 75
  const weeklyTrend = [58, 61, 65, 66, 70, 72, 75]
  const statCards = [
    { title: 'Energy Stability', body: '94% consistent energy levels recorded this week.', icon: '⚡' },
    { title: 'Mental Clarity', body: 'Cognitive tests show a 15% increase in focus duration.', icon: '◎' },
    { title: 'Sleep Quality', body: 'Deep sleep phases have lengthened by 22 minutes on average.', icon: '◐' },
  ]

  return (
    <div className="space-y-8 pb-8">
      <section className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h1 className="page-title">
            Growth <span className="gradient-text">Trajectory</span>
          </h1>
          <p className="page-subtitle">Your intelligence patterns are evolving beautifully.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-full bg-[#e7dfd5] px-5 py-3 text-sm font-bold text-stone-600">This Month</button>
          <button className="rounded-full bg-gradient-to-r from-[#a45300] to-[#ff9100] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(180,92,0,0.24)]">
            Download Report
          </button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.35fr]">
        <RingCard score={score} />

        <article className="glass-card flex min-h-[26rem] items-center rounded-[2.4rem] px-8 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[1.6rem] bg-white shadow-[0_18px_30px_rgba(60,44,28,0.08)]">
              <span className="text-4xl text-[#e4b21c]">🏆</span>
            </div>
            <div className="max-w-[24rem]">
              <span className="page-kicker">Current Achievement</span>
              <h2 className="mt-5 text-[2.5rem] font-extrabold leading-tight tracking-[-0.05em] text-[#2f2c2a]">
                7-day streak of
                <br />
                morning focus!
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-500">
                Consistency is the catalyst of change. You&apos;ve maintained your nutritional targets
                for a full week.
              </p>
              <button className="mt-6 text-base font-bold text-[#9f5b10]">Keep going →</button>
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_0.75fr]">
        <article className="glass-card rounded-[2.4rem] px-6 py-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#2f2c2a]">Weekly Trend</h3>
            <div className="flex items-center gap-4 text-xs font-bold text-stone-400">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#8f5108]" />
                Habit Score
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                Average
              </span>
            </div>
          </div>

          <div className="mt-6 h-64 rounded-[2rem] bg-white/45 px-5 py-4">
            <div className="flex h-full items-end gap-3">
              {weeklyTrend.map((value, index) => (
                <div key={index} className="flex flex-1 flex-col items-center justify-end gap-3">
                  <div className="w-full rounded-t-[1rem] bg-gradient-to-t from-[#c47a1d] to-[#f0bf73]" style={{ height: `${value}%` }} />
                  <span className={`text-xs font-bold ${index === 2 ? 'text-[#2f2c2a]' : 'text-stone-400'}`}>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="glass-card rounded-[2.4rem] px-6 py-6">
          <h3 className="text-[1.8rem] font-extrabold tracking-[-0.04em] text-[#2f2c2a]">Habit Balance</h3>

          <div className="mt-8 space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm font-bold">
                <span className="text-[#1870c9]">Empowering Habits</span>
                <span className="text-stone-500">82%</span>
              </div>
              <div className="h-3 rounded-full bg-[#dde4ef]">
                <div className="h-full w-[82%] rounded-full bg-[#1870c9]" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm font-bold">
                <span className="text-[#a55a10]">Limiting Habits</span>
                <span className="text-stone-500">18%</span>
              </div>
              <div className="h-3 rounded-full bg-[#ece1d1]">
                <div className="h-full w-[18%] rounded-full bg-[#a55a10]" />
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm italic leading-7 text-stone-400">
            You are successfully replacing mindless snacking with hydration intervals.
          </p>
        </article>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {statCards.map((card) => (
          <article key={card.title} className="glass-card rounded-[1.9rem] px-5 py-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f6ecdb] text-sm text-[#ad6a10]">
              {card.icon}
            </div>
            <h3 className="mt-5 text-xl font-extrabold tracking-[-0.04em] text-[#2f2c2a]">{card.title}</h3>
            <p className="mt-2 text-sm leading-7 text-stone-500">{card.body}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
