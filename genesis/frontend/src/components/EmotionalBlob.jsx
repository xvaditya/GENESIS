import { useEffect, useState } from 'react'

/**
 * EmotionalBlob - The core emotional UI component
 * Shows emoji-style or blob character with expressions
 * States: happy, tired, neutral, focused, concerned, thinking
 */
export default function EmotionalBlob({ 
  emotion = 'neutral', 
  size = 'md',
  animated = true,
  showLabel = false 
}) {
  const [displayEmotion, setDisplayEmotion] = useState(emotion)

  useEffect(() => {
    setDisplayEmotion(emotion)
  }, [emotion])

  const sizeClasses = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-16 h-16 text-3xl',
    lg: 'w-24 h-24 text-5xl',
    xl: 'w-32 h-32 text-6xl'
  }

  const emotionEmojis = {
    happy: '😄',
    energetic: '😄',
    tired: '😴',
    sleepy: '😴',
    neutral: '😐',
    lazy: '😐',
    focused: '🤓',
    thinking: '🤔',
    concerned: '😟',
    warning: '😟',
  }

  const emotionBlobs = {
    happy: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="url(#happyGradient)" />
        <defs>
          <linearGradient id="happyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdd34d" />
            <stop offset="100%" stopColor="#ffed4e" />
          </linearGradient>
        </defs>
        {/* Eyes */}
        <circle cx="35" cy="40" r="5" fill="#000" />
        <circle cx="65" cy="40" r="5" fill="#000" />
        {/* Smile */}
        <path d="M 35 55 Q 50 65 65 55" stroke="#000" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    ),
    tired: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="url(#tiredGradient)" />
        <defs>
          <linearGradient id="tiredGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#70b5ff" />
            <stop offset="100%" stopColor="#5ca3ff" />
          </linearGradient>
        </defs>
        {/* Sleepy eyes */}
        <ellipse cx="35" cy="40" rx="6" ry="3" fill="#000" />
        <ellipse cx="65" cy="40" rx="6" ry="3" fill="#000" />
        {/* Tired mouth */}
        <path d="M 35 60 Q 50 55 65 60" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    ),
    neutral: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="url(#neutralGradient)" />
        <defs>
          <linearGradient id="neutralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2dcd6" />
            <stop offset="100%" stopColor="#d9d3cd" />
          </linearGradient>
        </defs>
        {/* Neutral eyes */}
        <circle cx="35" cy="40" r="4" fill="#000" />
        <circle cx="65" cy="40" r="4" fill="#000" />
        {/* Neutral mouth */}
        <line x1="35" y1="60" x2="65" y2="60" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    focused: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="url(#focusedGradient)" />
        <defs>
          <linearGradient id="focusedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fd8b00" />
            <stop offset="100%" stopColor="#ff9100" />
          </linearGradient>
        </defs>
        {/* Determined eyes */}
        <circle cx="35" cy="40" r="5" fill="#000" />
        <circle cx="65" cy="40" r="5" fill="#000" />
        {/* Confident smile */}
        <path d="M 35 56 Q 50 62 65 56" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    ),
    thinking: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="url(#thinkingGradient)" />
        <defs>
          <linearGradient id="thinkingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#70b5ff" />
            <stop offset="100%" stopColor="#4ca8ff" />
          </linearGradient>
        </defs>
        {/* Thinking eyes (one open, considering) */}
        <circle cx="35" cy="40" r="5" fill="#000" />
        <ellipse cx="65" cy="40" rx="4" ry="6" fill="#000" />
        {/* Thoughtful mouth */}
        <path d="M 40 58 Q 50 62 60 58" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Thought bubble */}
        <circle cx="70" cy="25" r="6" fill="rgba(0,0,0,0.3)" />
        <circle cx="78" cy="18" r="4" fill="rgba(0,0,0,0.3)" />
      </svg>
    ),
    concerned: (
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="url(#concernedGradient)" />
        <defs>
          <linearGradient id="concernedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f95630" />
            <stop offset="100%" stopColor="#ff6b6b" />
          </linearGradient>
        </defs>
        {/* Concerned eyes */}
        <circle cx="35" cy="40" r="5" fill="#000" />
        <circle cx="65" cy="40" r="5" fill="#000" />
        {/* Sad mouth */}
        <path d="M 35 62 Q 50 55 65 62" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    ),
  }

  const emotions = {
    happy: { label: 'Happy', icon: emotionEmojis.happy },
    energetic: { label: 'Energetic', icon: emotionEmojis.energetic },
    tired: { label: 'Tired', icon: emotionEmojis.tired },
    sleepy: { label: 'Sleepy', icon: emotionEmojis.sleepy },
    neutral: { label: 'Neutral', icon: emotionEmojis.neutral },
    lazy: { label: 'Lazy', icon: emotionEmojis.lazy },
    focused: { label: 'Focused', icon: emotionEmojis.focused },
    thinking: { label: 'Thinking...', icon: emotionEmojis.thinking },
    concerned: { label: 'Concerned', icon: emotionEmojis.concerned },
    warning: { label: 'Warning', icon: emotionEmojis.warning },
  }

  const emotion_data = emotions[displayEmotion] || emotions.neutral

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`
        ${sizeClasses[size]} 
        emotion-blob 
        ${displayEmotion === 'thinking' ? 'thinking' : ''} 
        ${displayEmotion === 'concerned' ? 'concerned' : ''}
        ${displayEmotion === 'happy' || displayEmotion === 'energetic' ? 'happy' : ''}
        ${displayEmotion === 'tired' || displayEmotion === 'sleepy' ? 'tired' : ''}
        ${displayEmotion === 'neutral' || displayEmotion === 'lazy' ? 'neutral' : ''}
        ${displayEmotion === 'focused' ? 'focused' : ''}
        flex items-center justify-center
        transition-all duration-300
        ${animated ? 'floating-blob' : ''}
      `}>
        {emotionBlobs[displayEmotion] || emotionEmojis[displayEmotion]}
      </div>
      {showLabel && (
        <span className="text-xs font-semibold text-on-surface-variant">
          {emotion_data.label}
        </span>
      )}
    </div>
  )
}
