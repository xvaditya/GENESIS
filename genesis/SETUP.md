# 🚀 Genesis – Installation & Setup Guide

## ✨ What's Included

You now have a complete, working MVP of Genesis – Behavioural Food Intelligence System with:

### Frontend (React + Vite)
- 📱 **5 Full Pages**: Dashboard, Analyse, History, Progress, Assistant
- 🎭 **Emotional Blob System**: Animated emoji characters that react to behaviors
- 🎨 **Modern UI**: Tailwind CSS with gradients and smooth animations
- 📊 **Data Visualization**: Charts, progress tracking, habit scores
- 💾 **Local Storage**: Auto-save your meal history

### Backend (Express + Gemini AI)
- 🤖 **Gemini 2.5 Pro Integration**: AI-powered food analysis
- 🔍 **Smart Analysis**: Detects habits, provides insights, gives recommendations
- 💬 **Chat Assistant**: Ask questions about your behavior
- 🔐 **Secure**: API key never exposed to frontend
- ⚡ **Fast**: Real-time responses

## 🎯 Quick Start (5 Minutes)

### 1️⃣ Get Gemini API Key
```
Go to: https://makersuite.google.com/app/apikey
Click: Create API Key
Copy: Your key
```

### 2️⃣ Navigate to Project
```bash
cd genesis
```

### 3️⃣ Create Backend Config
```bash
cd backend
# Edit .env.local with your API key
nano .env.local  # or use your editor
```

Paste this (replace with your actual key):
```
GEMINI_API_KEY=your-actual-key-here
PORT=3001
```

### 4️⃣ Install Dependencies
```bash
cd ..  # Back to genesis root
npm run install:all
```

This installs:
- Frontend: React, Vite, Tailwind, Axios, React Router
- Backend: Express, Cors, Dotenv, Google Generative AI

### 5️⃣ Start Both Servers

**Keep these running simultaneously:**

**Terminal A (Backend):**
```bash
cd backend
npm run dev
```
Should show: `✨ Genesis Backend running on http://localhost:3001`

**Terminal B (Frontend):**
```bash
cd frontend
npm run dev
```
Should show: `VITE v5.0.0  ready in XXX ms`

### 6️⃣ Open in Browser
```
http://localhost:5173
```

✅ **You're ready!** Try the Analyse page to test the AI.

---

## 📋 File Structure

```
genesis/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx      ← Overview + habit tracking
│   │   │   ├── Analyse.jsx        ← Food → AI analysis (MAIN)
│   │   │   ├── History.jsx        ← All meals logged
│   │   │   ├── Progress.jsx       ← Behavior trends
│   │   │   └── Assistant.jsx      ← AI chatbot
│   │   ├── components/
│   │   │   ├── EmotionalBlob.jsx  ← CORE: Animated emotions
│   │   │   ├── Sidebar.jsx        ← Navigation
│   │   │   └── TopBar.jsx         ← Header
│   │   ├── utils/
│   │   │   ├── api.js             ← Axios client
│   │   │   └── helpers.js         ← Utility functions
│   │   ├── App.jsx                ← Main router
│   │   ├── main.jsx               ← Entry point
│   │   └── index.css              ← Tailwind + custom CSS
│   ├── index.html                 ← HTML template
│   ├── vite.config.js             ← Vite configuration
│   ├── tailwind.config.js         ← Theme colors
│   ├── postcss.config.js          ← PostCSS setup
│   └── package.json
│
├── backend/
│   ├── server.js                  ← EXPRESS + GEMINI (CORE)
│   ├── .env.local                 ← GEMINI_API_KEY (YOUR KEY)
│   └── package.json
│
├── README.md                       ← Full documentation
├── QUICKSTART.md                   ← Quick reference
├── SETUP.md                        ← This file
├── .gitignore
└── package.json                    ← Root convenience scripts
```

---

## 🎮 How to Use Each Page

### 📊 Dashboard
- See your habit score (0-100)
- View today's habits
- Energy trend chart
- AI companion character

### 🔍 Analyse (THE MAIN FEATURE)
1. Describe your food: "Pizza at 11 PM while tired"
2. Select mood: 😄 😴 😐 🤓
3. Click "Analyse Behaviour"
4. See AI insights + emotional reaction

### 📜 History
- View all meals you've logged
- See mood for each entry
- Quick statistics
- "The Observer" companion

### 📈 Progress
- Habit score trend
- Behavioral metrics
- Milestones unlocked
- Improvement suggestions

### 🤖 Assistant
- Ask about your patterns
- Get personalized advice
- Examples: "Should I eat this?", "What habits do I have?"
- AI responds contextually

---

## 🧬 The Emotional Blob System

The heart of Genesis is the **EmotionalBlob component** that:

### Emotions
```
😄 Happy      → Good habits, positive patterns
😴 Tired      → Low energy, fatigue patterns
😐 Neutral    → Average behavior
🤓 Focused    → Balanced, productive eating
😟 Concerned  → Warning, unhealthy patterns
🤔 Thinking   → Analysis in progress
```

### Features
- ✅ Animated blob shapes (SVG)
- ✅ Emoji overlays
- ✅ Floating animation
- ✅ Pulse on thinking
- ✅ Blinking eyes
- ✅ Color-coded by emotion

### Used On
- Dashboard: Main character
- Analyse: Result reaction
- History: Mood indicators
- Progress: Achievement reactions
- Assistant: AI responses

---

## 🔌 API Endpoints

### Backend (http://localhost:3001/api)

#### `/analyze` (POST)
```bash
curl -X POST http://localhost:3001/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "food": "Pizza and coke",
    "mood": "tired",
    "timeContext": "night"
  }'
```

Response:
```json
{
  "habitDetected": true,
  "habitTitle": "Late Night High-Calorie Intake",
  "habitDescription": "...",
  "insight": "...",
  "recommendation": "...",
  "confidence": 87,
  "emotion": "concerned"
}
```

#### `/ask` (POST)
```bash
curl -X POST http://localhost:3001/api/ask \
  -H "Content-Type: application/json" \
  -d '{
    "question": "Should I eat a burger now?",
    "context": {
      "history": [...],
      "recentMoods": ["tired", "focused"]
    }
  }'
```

Response:
```json
{
  "answer": "...",
  "emotion": "focused",
  "recommendation": "..."
}
```

---

## ⚙️ Environment Variables

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:3001/api
```

### Backend (.env.local)
```env
GEMINI_API_KEY=your-actual-key-here
PORT=3001
```

**⚠️ IMPORTANT**: Never commit `.env.local` files!

---

## 🧪 Test It Out

### Test 1: Simple Meal
- Food: "Salad"
- Mood: 😄 Energetic
- Expected: Happy reaction

### Test 2: Problem Pattern
- Food: "Fast food at 11 PM"
- Mood: 😴 Tired
- Expected: Concerned reaction + warning

### Test 3: Chat
- Ask: "What are my patterns?"
- Expected: AI responds with insights from your history

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **"API Key not found"** | Add `GEMINI_API_KEY` to `backend/.env.local` |
| **"Connection refused on 3001"** | Run `cd backend && npm run dev` |
| **"Blank page on 5173"** | Check browser console. Is backend running? |
| **"Module not found"** | Run `npm run install:all` again |
| **"Port already in use"** | Kill the process or use different port |
| **"CORS error"** | Verify `VITE_API_URL` matches backend URL |

### Kill Stuck Ports
```bash
# macOS/Linux
lsof -ti:3001 | xargs kill -9

# Windows (PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3001).OwningProcess | Stop-Process
```

---

## 🎨 Customization Tips

### Change Theme Colors
Edit `frontend/tailwind.config.js`:
```js
colors: {
  "primary": "#8c4a00",        // Change orange
  "tertiary": "#005e9f",       // Change blue
  // ... more colors
}
```

### Add New Emotions
Edit `frontend/src/components/EmotionalBlob.jsx`:
```jsx
const emotionBlobs = {
  happy: {...},
  // Add your emotion here
  silly: (
    <svg> ... </svg>
  )
}
```

### Change AI Behavior
Edit `backend/server.js`:
```js
const SYSTEM_PROMPT = `You are Genesis...` // Modify this
```

---

## 📦 Production Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the 'dist' folder
# Set VITE_API_URL to your backend URL
```

### Backend (Railway/Heroku)
```
Set environment variable: GEMINI_API_KEY=your-key
Deploy the 'backend' folder
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js](https://expressjs.com)
- [Google Gemini API](https://ai.google.dev)

---

## ✅ Verification Checklist

Run through this before considering it complete:

- [ ] Both `.env.local` files configured with API key
- [ ] `npm run install:all` completed without errors
- [ ] Backend starts: `npm run dev` in `/backend`
- [ ] Frontend starts: `npm run dev` in `/frontend`
- [ ] Browser shows homepage at http://localhost:5173
- [ ] Navigation works (all 5 pages accessible)
- [ ] Analyse page: Can input food and get AI response
- [ ] Emotional blobs animate and change color
- [ ] History page: Shows saved entries in table
- [ ] Assistant page: Can chat with AI
- [ ] Progress page: Shows habit score

---

## 🎉 You're All Set!

Genesis is now ready to help analyze eating behavior. Start by:
1. Go to **Analyse** page
2. Try: "Pizza and coke at night while tired"
3. Watch the AI analyze your behavior
4. See the emotional blob react

**Happy analyzing!** 🍽️ 🤖 ✨

---

*For full documentation, see README.md*
*For quick reference, see QUICKSTART.md*
