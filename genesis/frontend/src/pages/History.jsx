import EmotionalBlob from '../components/EmotionalBlob'
import { formatTime } from '../utils/helpers'

const getMoodEmoji = (mood) => {
  const map = {
    energetic: '😄',
    tired: '😴',
    lazy: '😐',
    focused: '🤓',
  }
  return map[mood] || '😐'
}

const getMoodEmotion = (mood) => {
  const map = {
    energetic: 'happy',
    tired: 'tired',
    lazy: 'neutral',
    focused: 'focused',
  }
  return map[mood] || 'neutral'
}

export default function History({ history }) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight">
          Your Food Journey
        </h1>
        <p className="text-on-surface-variant font-body max-w-2xl">
          Reflect on patterns and track your progress over time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main History Log */}
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl p-1 shadow-[0px_12px_40px_rgba(140,74,0,0.06)] overflow-hidden">
            {history.length === 0 ? (
              <div className="p-12 text-center">
                <div className="flex justify-center mb-4">
                  <EmotionalBlob emotion="thinking" size="lg" />
                </div>
                <p className="text-on-surface-variant text-lg font-semibold">
                  No entries yet. Start by analyzing a meal!
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/50">
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-outline">
                        Date/Time
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-outline">
                        Meal
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-outline">
                        Mood
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-outline">
                        Key Insight
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-outline text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {history.map(entry => (
                      <tr key={entry.id} className="hover:bg-surface-container-lowest/40 transition-colors">
                        <td className="px-6 py-6 align-top text-sm text-on-surface-variant">
                          {formatTime(entry.timestamp)}
                        </td>
                        <td className="px-6 py-6 align-top text-sm font-semibold text-on-surface max-w-xs truncate">
                          {entry.food}
                        </td>
                        <td className="px-6 py-6 align-top">
                          <div className="flex items-center gap-2">
                            <EmotionalBlob emotion={getMoodEmotion(entry.mood)} size="sm" animated={false} />
                            <span className="text-sm font-semibold capitalize">
                              {entry.mood}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-6 align-top text-sm text-on-surface-variant max-w-xs">
                          <div className="line-clamp-2">
                            {entry.analysis?.insight || entry.analysis?.habitTitle || 'Analyzed'}
                          </div>
                        </td>
                        <td className="px-6 py-6 align-top text-right">
                          <button className="text-primary hover:text-primary-container font-bold text-xs uppercase tracking-wider transition-colors">
                            View →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <div className="glass-card rounded-xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/20 rounded-full blur-2xl" />
            <h3 className="text-lg font-bold text-on-surface mb-4 relative">Quick Stats</h3>
            <div className="space-y-4 relative">
              <div className="p-4 rounded-lg bg-surface-container-low">
                <span className="text-xs font-bold uppercase text-outline">Entries Tracked</span>
                <p className="text-3xl font-extrabold text-primary mt-1">{history.length}</p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low">
                <span className="text-xs font-bold uppercase text-outline">Most Common Mood</span>
                <p className="text-lg font-bold text-on-surface mt-1">
                  {history.length > 0
                    ? getMoodEmoji(
                        history.reduce((acc, e) => {
                          acc[e.mood] = (acc[e.mood] || 0) + 1
                          return acc
                        }, {})[
                          Object.entries(
                            history.reduce((acc, e) => {
                              acc[e.mood] = (acc[e.mood] || 0) + 1
                              return acc
                            }, {})
                          ).sort((a, b) => b[1] - a[1])[0][0]
                        ] || '🤔'
                      )
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-6 text-on-primary shadow-lg relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 opacity-20 text-9xl">💡</div>
            <h3 className="text-lg font-bold mb-2 relative">Pattern Alert</h3>
            <p className="text-sm leading-relaxed opacity-90 relative">
              You've logged {history.length} meals. Keep going to unlock deeper insights!
            </p>
            <button className="mt-4 px-4 py-2 bg-on-primary text-primary text-xs font-bold rounded-full hover:bg-white transition-colors">
              View Details
            </button>
          </div>

          <div className="relative py-10">
            <div className="w-32 h-32 bg-secondary-fixed/40 rounded-full blur-3xl absolute top-0 left-1/2 -translate-x-1/2 animate-pulse" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center border-4 border-white mb-4">
                <span className="text-4xl">🧠</span>
              </div>
              <span className="text-sm font-bold text-on-surface">The Observer</span>
              <span className="text-xs text-on-surface-variant mt-1">
                "I see a pattern forming in your eating."
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
