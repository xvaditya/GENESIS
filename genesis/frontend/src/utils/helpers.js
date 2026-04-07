/**
 * Utility functions for Genesis App
 */

export const getTimeContext = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'morning'
  if (hour < 17) return 'afternoon'
  return 'night'
}

export const getMoodEmoji = (mood) => {
  const moodMap = {
    energetic: '😄',
    tired: '😴',
    lazy: '😐',
    focused: '🤓',
  }
  return moodMap[mood] || '😐'
}

export const getEmotionFromInsight = (insight) => {
  const text = insight.toLowerCase()
  if (text.includes('good habit') || text.includes('excellent') || text.includes('positive')) {
    return 'happy'
  }
  if (text.includes('bad habit') || text.includes('concern') || text.includes('warning')) {
    return 'concerned'
  }
  return 'neutral'
}

export const formatTime = (date) => {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const getHabitScore = (entries) => {
  if (entries.length === 0) return 0
  
  let score = 50 // baseline
  
  entries.forEach(entry => {
    if (entry.analysis?.includes('Recommendation')) score += 5
    if (entry.mood === 'focused') score += 3
    if (!entry.analysis?.includes('warning')) score += 2
  })
  
  return Math.min(100, score)
}

export const analyzeBehavior = (insights) => {
  return {
    hasPositiveHabits: insights.includes('good'),
    hasWarnings: insights.includes('warning') || insights.includes('concern'),
    consistencyScore: Math.random() * 30 + 70,
  }
}
