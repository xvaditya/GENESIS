import { formatTime } from '../utils/helpers'

const defaultEntries = [
  {
    id: 'fallback-1',
    timestamp: '2023-10-24T23:45:00.000Z',
    food: 'Pizza & Soda',
    mood: 'tired',
    analysis: { insight: 'Late-night craving triggered by high stress.' },
  },
  {
    id: 'fallback-2',
    timestamp: '2023-10-24T13:15:00.000Z',
    food: 'Quinoa Salad',
    mood: 'energetic',
    analysis: { insight: 'Balanced protein led to stable afternoon energy.' },
  },
  {
    id: 'fallback-3',
    timestamp: '2023-10-23T08:30:00.000Z',
    food: 'Oatmeal & Coffee',
    mood: 'focused',
    analysis: { insight: 'Routine breakfast maintained clarity for 4 hours.' },
  },
]

const moodStyles = {
  tired: {
    label: 'Tired',
    chip: 'bg-[#fff2ef] text-[#7f5950]',
    marker: 'bg-[#f2a36d]',
    insight: 'border-[#b24122] bg-[#fbe0cf] text-[#915946]',
  },
  energetic: {
    label: 'Energetic',
    chip: 'bg-[#fff7d7] text-[#9e7e00]',
    marker: 'bg-[#f1d05c]',
    insight: 'border-[#1174c4] bg-[#eef3f9] text-[#51718b]',
  },
  focused: {
    label: 'Focused',
    chip: 'bg-[#edf4ff] text-[#2067b7]',
    marker: 'bg-[#4ca8ff]',
    insight: 'border-[#b8c1ca] bg-[#ece7df] text-[#7d766e]',
  },
  lazy: {
    label: 'Neutral',
    chip: 'bg-[#ece6df] text-stone-500',
    marker: 'bg-stone-300',
    insight: 'border-[#b8c1ca] bg-[#ece7df] text-[#7d766e]',
  },
}

function splitTime(value) {
  const parts = formatTime(value).split(', ')
  return {
    date: parts[0] || '',
    time: parts[1] || '',
  }
}

export default function History({ history }) {
  const entries = history.length > 0 ? history.slice(0, 6) : defaultEntries
  const averageMood = history.length > 0 ? '7.2 / 10' : '6.8 / 10'
  const peakTime = history.length > 0 ? '8:45 PM' : '1:00 PM'

  return (
    <div className="relative overflow-hidden rounded-[2.8rem] bg-gradient-to-br from-[#ffad1f] via-[#ffb92f] to-[#ffd35a] px-6 py-6 md:px-8 md:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[14%] bg-white/18" />

      <section className="relative ml-auto w-full max-w-[61rem] space-y-8">
        <div className="space-y-3">
          <h1 className="page-title">Behavioural History</h1>
          <p className="max-w-3xl text-base leading-7 text-[#7a4e11]">
            Reflect on your metabolic patterns and identify triggers in your nutritional journey
            through solar intelligence.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_16rem] xl:items-start">
          <article className="overflow-hidden rounded-[2.2rem] bg-[#fde9be] shadow-[0_22px_44px_rgba(150,88,0,0.14)]">
            <div className="overflow-x-auto">
              <div className="min-w-[52rem]">
                <div className="grid grid-cols-[1.05fr_1.3fr_1fr_1.4fr_auto] border-b border-[#efcf99] px-5 py-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#958578]">
                  <span>Date/Time</span>
                  <span>Meal Logged</span>
                  <span>Mood</span>
                  <span>Key Insight</span>
                  <span className="text-right">Actions</span>
                </div>

                <div className="divide-y divide-[#f1d8ab]">
                  {entries.map((entry) => {
                    const mood = moodStyles[entry.mood] || moodStyles.lazy
                    const timestamp = splitTime(entry.timestamp)

                    return (
                      <div
                        key={entry.id}
                        className="grid grid-cols-[1.05fr_1.3fr_1fr_1.4fr_auto] gap-4 px-5 py-6 text-sm"
                      >
                        <div className="space-y-1">
                          <p className="text-[1.05rem] font-extrabold leading-6 text-[#3a312b]">{timestamp.date}</p>
                          <p className="text-sm text-[#9b7f60]">{timestamp.time}</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className={`mt-0.5 h-8 w-8 rounded-full ${mood.marker}`} />
                          <div>
                            <p className="text-[1.05rem] font-bold leading-6 text-[#3a312b]">{entry.food}</p>
                          </div>
                        </div>

                        <div>
                          <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${mood.chip}`}>
                            {mood.label}
                          </span>
                        </div>

                        <div className={`rounded-[1.3rem] border-l-[4px] px-4 py-3 text-sm leading-7 ${mood.insight}`}>
                          {(entry.analysis?.insight || entry.analysis?.habitDescription || 'Analysed behaviour snapshot.').slice(0, 82)}
                        </div>

                        <button className="justify-self-end text-2xl font-bold leading-none text-stone-500">⋮</button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <article className="rounded-[2.2rem] bg-[#f6e9b9] px-5 py-5 shadow-[0_18px_30px_rgba(120,73,0,0.12)]">
              <h3 className="text-[1.7rem] font-extrabold tracking-[-0.04em] text-[#3a312b]">Quick Stats</h3>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] bg-[#f8f4ea] px-4 py-4">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#9d958d]">Avg. Mood</p>
                  <p className="mt-2 text-[2rem] font-extrabold leading-none text-[#a56314]">{averageMood}</p>
                </div>
                <div className="rounded-[1.5rem] bg-[#f8f4ea] px-4 py-4">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#9d958d]">Energy Peaks</p>
                  <p className="mt-2 text-[2rem] font-extrabold leading-none text-[#1c73cc]">{peakTime}</p>
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#a35200] to-[#d67b0b] px-5 py-5 text-white shadow-[0_20px_34px_rgba(118,58,0,0.2)]">
              <h3 className="text-[1.8rem] font-extrabold tracking-[-0.04em]">Solar Tip</h3>
              <p className="mt-4 text-sm leading-7 text-white/90">
                Based on your history, high-sugar meals after 10 PM directly correlate with tired
                morning entries. Try shifting snacks 2 hours earlier.
              </p>
              <button className="mt-5 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#9b5208]">
                View Details
              </button>
              <div className="pointer-events-none absolute bottom-3 right-3 h-14 w-14 rounded-full bg-[#f59d1a]/70" />
            </article>

            <div className="pt-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#d88a20] text-xl font-bold text-white shadow-[0_16px_28px_rgba(124,72,0,0.18)]">
                *
              </div>
              <p className="mt-4 text-lg font-extrabold text-[#6e4d16]">The Observer</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#9c7d4f]">
                &quot;I see a pattern forming in your stress cycles.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
