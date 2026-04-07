import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

// Initialize Gemini
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' })

// Middleware
app.use(cors())
app.use(express.json())

// System Prompt for Gemini
const SYSTEM_PROMPT = `You are Genesis, a behavioral nutrition AI expert. Your role is to analyze food choices in context of mood, time, and behavioral patterns.

You help users understand their eating behavior by identifying habits, providing insights, and offering actionable recommendations.

When analyzing food input, you should:
1. Identify any detected habits or patterns
2. Provide a smart insight about the food choice
3. Explain why it matters for their health/mood
4. Give a specific, actionable recommendation
5. Rate your confidence (0-100%)

IMPORTANT: Always respond in valid JSON format with these exact fields:
{
  "habitDetected": true/false,
  "habitTitle": "string (if habit detected)",
  "habitDescription": "string (if habit detected)",
  "insight": "string",
  "recommendation": "string",
  "confidence": number (0-100),
  "emotion": "happy|tired|neutral|focused|concerned|thinking"
}

Be conversational, supportive, and encouraging. Never be judgmental.`

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'Genesis Backend' })
})

// Main analysis endpoint
app.post('/api/analyze', async (req, res) => {
  try {
    const { food, mood, timeContext } = req.body

    if (!food) {
      return res.status(400).json({ error: 'Food input is required' })
    }

    const prompt = `User ate: "${food}"
Mood: ${mood}
Time of day: ${timeContext}

Analyze this food choice in context of their current mood and time of day. Identify patterns, provide insights, and give recommendations.`

    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      systemInstruction: SYSTEM_PROMPT,
    })

    const responseText = result.response.text()
    
    // Parse JSON response
    let analysis
    try {
      analysis = JSON.parse(responseText)
    } catch (e) {
      // Fallback if JSON parsing fails
      analysis = {
        habitDetected: false,
        insight: responseText,
        recommendation: 'Keep tracking your meals to identify patterns.',
        confidence: 65,
        emotion: 'neutral',
      }
    }

    res.json(analysis)
  } catch (error) {
    console.error('Analysis error:', error)
    res.status(500).json({
      error: 'Failed to analyze',
      message: error.message,
    })
  }
})

// Assistant chat endpoint
app.post('/api/ask', async (req, res) => {
  try {
    const { question, context } = req.body

    if (!question) {
      return res.status(400).json({ error: 'Question is required' })
    }

    let contextString = ''
    if (context?.history && context.history.length > 0) {
      contextString = `Recent meals: ${context.history
        .map(h => h.food)
        .join(', ')}`
    }

    const prompt = `${question}

${contextString ? `Context: ${contextString}` : ''}`

    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      systemInstruction: `You are Genesis, a behavioral nutrition AI. Answer the user's question with personalized insights based on their eating history. Be helpful, encouraging, and provide actionable advice. Keep responses concise but informative.`,
    })

    const responseText = result.response.text()

    res.json({
      answer: responseText,
      emotion: 'focused',
      recommendation: 'Keep tracking to improve your habits.',
    })
  } catch (error) {
    console.error('Chat error:', error)
    res.status(500).json({
      error: 'Failed to process question',
      message: error.message,
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`✨ Genesis Backend running on http://localhost:${PORT}`)
  console.log(`API: http://localhost:${PORT}/api`)
  if (!GEMINI_API_KEY) {
    console.warn('⚠️  GEMINI_API_KEY not set. Please configure .env.local')
  }
})
