import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const analyzeFood = async (food, mood, timeContext) => {
  try {
    const response = await client.post('/analyze', {
      food,
      mood,
      timeContext,
    })
    return response.data
  } catch (error) {
    console.error('Analysis error:', error)
    throw error
  }
}

export const askAssistant = async (question, context) => {
  try {
    const response = await client.post('/ask', {
      question,
      context,
    })
    return response.data
  } catch (error) {
    console.error('Assistant error:', error)
    throw error
  }
}

export default client
