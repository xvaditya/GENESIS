# Genesis – Quick Start Guide

## 5-Minute Setup

### Step 1: Get Your Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the key

### Step 2: Configure Backend
```bash
cd backend
cp .env.example .env.local
```
Edit `.env.local` and paste your API key:
```
GEMINI_API_KEY=your-key-here
PORT=3001
```

### Step 3: Install & Run
```bash
# From project root
npm run install:all

# Terminal 1: Start Backend
cd backend
npm run dev

# Terminal 2: Start Frontend (in project root)
cd frontend
npm run dev
```

### Step 4: Test It Out
1. Open `http://localhost:5173`
2. Go to **Analyse** tab
3. Try this:
   - Food: "Pizza and coke at 11 PM"
   - Mood: 😴 Tired
   - Click "Analyse Behaviour"

4. You should see:
   - An emotional blob animation
   - AI-generated insights
   - Specific recommendation

## Features Checklist

- ✅ Dashboard with habit tracking
- ✅ Food analysis with Gemini AI
- ✅ Emotional blob character system
- ✅ History logging (localStorage)
- ✅ Progress tracking
- ✅ AI Assistant chatbot
- ✅ Real-time mood selection
- ✅ Context-aware insights (morning/afternoon/night)

## What Each Page Does

| Page | Purpose |
|------|---------|
| **Dashboard** | Overview of habits, mood, and energy trends |
| **Analyse** | Input food → Get AI insights with emotions |
| **History** | View all logged meals and patterns |
| **Progress** | Track habit score and improvements |
| **Assistant** | Chat with AI about your behavior |

## Common Questions

**Q: Where are my meals saved?**
A: In your browser's localStorage. They're lost if you clear cache.

**Q: Why isn't the AI responding?**
A: Check your API key in `.env.local`. Make sure backend is running.

**Q: Can I deploy this?**
A: Yes! See README.md for deployment steps.

**Q: How do I change the colors?**
A: Edit `frontend/tailwind.config.js` colors section.

---

Enjoy analyzing your food behavior! 🎉
