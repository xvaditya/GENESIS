import EmotionalBlob from '../components/EmotionalBlob'
import { getHabitScore } from '../utils/helpers'

export default function Progress({ history }) {
  const habitScore = getHabitScore(history)
  
  const getProgressEmotion = () => {
    if (habitScore > 80) return 'happy'
    if (habitScore > 60) return 'focused'
    if (habitScore > 40) return 'neutral'
    return 'concerned'
  }

  const getScoreCategory = (score) => {
    if (score > 75) return { label: 'Excellent', color: 'from-green-400 to-green-500' }
    if (score > 50) return { label: 'Good', color: 'from-yellow-400 to-yellow-500' }
    return { label: 'Needs Work', color: 'from-red-400 to-red-500' }
  }

  const category = getScoreCategory(habitScore)

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight">
          Your Progress
        </h1>
        <p className="text-on-surface-variant font-body max-w-2xl">
          Track your behavioral evolution and habit improvements
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Progress Card */}
        <div className="lg:col-span-2 space-y-6">
          {/* Score Card */}
          <div className={`bg-gradient-to-br ${category.color} text-white rounded-xl p-12 shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider opacity-90 mb-4">
                  Overall Habit Score
                </h2>
                <div className="text-6xl font-black mb-2">{habitScore}</div>
                <p className="text-xl font-semibold opacity-90">{category.label} Progress</p>
              </div>
              <div className="floating-blob">
                <EmotionalBlob emotion={getProgressEmotion()} size="xl" animated />
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-lg font-bold text-on-surface mb-6">Behavior Metrics</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-on-surface">Consistency</span>
                  <span className="text-sm font-bold text-primary">85%</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-primary-container h-full rounded-full" style={{ width: '85%' }} />
                </div>
                <p className="text-xs text-on-surface-variant mt-2">You're logging meals regularly</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-on-surface">Mood Stability</span>
                  <span className="text-sm font-bold text-tertiary">72%</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-tertiary to-tertiary-fixed h-full rounded-full" style={{ width: '72%' }} />
                </div>
                <p className="text-xs text-on-surface-variant mt-2">Your moods are becoming more balanced</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-on-surface">Good Habits</span>
                  <span className="text-sm font-bold text-secondary">68%</span>
                </div>
                <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-secondary to-secondary-fixed h-full rounded-full" style={{ width: '68%' }} />
                </div>
                <p className="text-xs text-on-surface-variant mt-2">Positive eating patterns increasing</p>
              </div>
            </div>
          </div>

          {/* Trend Chart */}
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-lg font-bold text-on-surface mb-6">Habit Score Trend</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[45, 48, 52, 55, 58, 62, 65, 68, 72, 75].map((value, i) => (
                <div key={i} className="flex flex-col items-center flex-1 gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-primary to-primary-container rounded-t-lg hover:from-primary-container hover:to-primary transition-all"
                    style={{ height: `${(value / 100) * 100}%` }}
                  />
                  <span className="text-xs text-on-surface-variant">W{i + 1}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-on-surface-variant mt-4 text-center">
              📈 Consistent improvement week-over-week
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-lg font-bold text-on-surface mb-4">Milestones</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">First Entry</p>
                  <p className="text-xs text-on-surface-variant">Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Consistency Streak</p>
                  <p className="text-xs text-on-surface-variant">{history.length} entries</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low opacity-40">
                <span className="text-2xl">👑</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Perfect Week</p>
                  <p className="text-xs text-on-surface-variant">In progress...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-br from-tertiary-container to-tertiary-fixed/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-on-surface mb-4">Next Focus</h4>
            <div className="space-y-2 text-sm">
              <p className="text-on-surface-variant">
                ✨ You're making great progress! Focus on:
              </p>
              <ul className="list-disc list-inside text-on-surface-variant space-y-1">
                <li>Evening snack timing</li>
                <li>Mood correlation tracking</li>
                <li>Hydration consistency</li>
              </ul>
            </div>
          </div>

          {/* Companion Message */}
          <div className="relative py-8">
            <div className="w-28 h-28 bg-primary/20 rounded-full blur-2xl absolute top-0 left-1/2 -translate-x-1/2 animate-pulse" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <EmotionalBlob emotion="focused" size="lg" animated />
              <span className="text-sm font-bold text-on-surface mt-3">The Guide</span>
              <span className="text-xs text-on-surface-variant mt-1">
                "Your growth is inspiring! Keep going."
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
