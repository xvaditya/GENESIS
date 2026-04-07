# Genesis System Architecture

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     USER BROWSER                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │             React Frontend (Vite)                    │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │  Dashboard | Analyse | History | Progress | *  │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │   EmotionalBlob System (Core Feature)          │  │   │
│  │  │   - 6 emotion states                           │  │   │
│  │  │   - SVG animations                             │  │   │
│  │  │   - Dynamic reactions                          │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │   localStorage                                 │  │   │
│  │  │   - Meal history (10 max)                      │  │   │
│  │  │   - Timestamps & moods                         │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                             ↓
                    (HTTP/Axios Requests)
                             ↓
┌─────────────────────────────────────────────────────────────┐
│               EXPRESS BACKEND (Node.js)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Server.js                                           │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │ Routes:                                        │  │   │
│  │  │ • POST /api/analyze                           │  │   │
│  │  │ • POST /api/ask                               │  │   │
│  │  │ • GET  /api/health                            │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │ CORS + Security Layer                          │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                             ↓
                  (HTTPS - Encrypted API Key)
                             ↓
┌─────────────────────────────────────────────────────────────┐
│              GOOGLE GEMINI 2.5 PRO                           │
│  • Analyzes food + mood + context                           │
│  • Returns structured JSON insights                         │
│  • Confidence scoring                                       │
│  • Habit detection                                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow: Food Analysis

```
User Input Form
├── Food Description: "Pizza at 11 PM"
├── Mood Selection: 😴 Tired
└── Time Context: Auto-detected (night)
         ↓
React State Update
├── setFood()
├── setMood()
├── setLoading(true)
└── setEmotion('thinking')
         ↓
API Request (axios)
├── POST /api/analyze
├── Body: {food, mood, timeContext}
└── Headers: {Content-Type: application/json}
         ↓
Express Route Handler
├── Receives request
├── Validates input
└── Prepares Gemini prompt
         ↓
Gemini 2.5 Pro API
├── Analyzes food + context
├── Generates JSON response
├── habit detection
├── insights
├── recommendations  
├── confidence score
└── emotion classification
         ↓
Express Response
└── Return formatted JSON
         ↓
React Receives Response
├── Update analysis state
├── Calculate emotion from result
├── Save to localStorage
└── Update blob emotion
         ↓
UI Update
├── Hide loading state
├── Show results in cards
├── Animate emotion blob
└── Display recommendations
```

---

## 📦 Component Diagram

```
┌─ App.jsx ─────────────────────────────────────────┐
│  (Routes + History State)                         │
│                                                    │
│  ├─ Sidebar.jsx                                  │
│  │  └─ Navigation Links                          │
│  │                                                │
│  ├─ TopBar.jsx                                   │
│  │  └─ Notifications & Profile                   │
│  │                                                │
│  └─ Routes                                        │
│     ├─ Dashboard.jsx                             │
│     │  ├─ EmotionalBlob (lg size)                │
│     │  ├─ Habit Score Card                       │
│     │  ├─ Energy Trend Chart                     │
│     │  └─ Today's Habits                         │
│     │                                             │
│     ├─ Analyse.jsx (CORE)                        │
│     │  ├─ Food Input (textarea)                  │
│     │  ├─ Mood Selection (buttons)               │
│     │  ├─ EmotionalBlob (animated response)      │
│     │  └─ Analysis Results (cards)               │
│     │                                             │
│     ├─ History.jsx                               │
│     │  ├─ History Table                          │
│     │  ├─ EmotionalBlob (indicators)             │
│     │  └─ Quick Stats                            │
│     │                                             │
│     ├─ Progress.jsx                              │
│     │  ├─ Habit Score Trend                      │
│     │  ├─ Progress Bars                          │
│     │  ├─ Milestones                             │
│     │  └─ EmotionalBlob (reactions)              │
│     │                                             │
│     └─ Assistant.jsx                             │
│        ├─ Chat Messages                          │
│        ├─ EmotionalBlob (per message)            │
│        └─ Input Field                            │
│                                                   │
└─────────────────────────────────────────────────┘

┌─ EmotionalBlob.jsx ───────────────────────────────┐
│  Props: emotion, size, animated, showLabel        │
│                                                    │
│  States:                                          │
│  • happy      → Yellow/gold blob 😄              │
│  • tired      → Blue blob 😴                     │
│  • neutral    → Gray blob 😐                     │
│  • focused    → Orange blob 🤓                   │
│  • concerned  → Red blob 😟                      │
│  • thinking   → Blue blob 🤔                     │
│                                                   │
│  Animations:                                      │
│  • blob-bounce: up-down motion                   │
│  • blob-pulse: opacity pulse                     │
│  • floating-blob: rotation + float               │
│  • blob-blink: blinking eyes                     │
│                                                   │
└─────────────────────────────────────────────────┘
```

---

## 🔌 API Contract

### POST /api/analyze

**Request:**
```json
{
  "food": "Pizza and coke",
  "mood": "tired",
  "timeContext": "night"
}
```

**Response:**
```json
{
  "habitDetected": true,
  "habitTitle": "Late Night High-Calorie Intake",
  "habitDescription": "You tend to consume high-density meals during evening entertainment",
  "insight": "Heavy meals at night can disrupt sleep and impact morning energy",
  "recommendation": "Try shifting snacks 2 hours earlier to stabilize blood sugar",
  "confidence": 87,
  "emotion": "concerned"
}
```

---

### POST /api/ask

**Request:**
```json
{
  "question": "What are my eating patterns?",
  "context": {
    "history": [
      {"food": "Pizza", "mood": "tired"},
      {"food": "Salad", "mood": "focused"}
    ],
    "recentMoods": ["tired", "focused", "tired"]
  }
}
```

**Response:**
```json
{
  "answer": "Based on your history, I notice you tend to eat heavy foods when tired...",
  "emotion": "focused",
  "recommendation": "Try lighter options in evenings for better sleep"
}
```

---

## 🎭 Emotion State Machine

```
                    ┌─────────────┐
                    │   NEUTRAL   │
                    │ (😐 Lazy)   │
                    └──────┬──────┘
                           │
                ┌──────────┼──────────┐
                │          │          │
                ▼          ▼          ▼
            HAPPY      FOCUSED   CONCERNED
          (😄 Good)  (🤓 Balanced) (😟 Bad)
                │          │          │
                └──────────┼──────────┘
                           │
            User logs meal with mood
                           │
                           ▼
                    ┌─────────────┐
                    │  THINKING   │
                    │ (🤔 Analysis)│
                    └──────┬──────┘
                           │
                    AI processes input
                           │
                    ┌──────┴──────┐
                    │             │
                    ▼             ▼
              HAPPY         CONCERNED
         (Good habits)   (Warning patterns)
                    │             │
                    └──────┬──────┘
                           │
                    Display with emotion
```

---

## 💾 localStorage Schema

```json
{
  "genesis-history": [
    {
      "id": 1712345678000,
      "food": "Pizza and coke",
      "mood": "tired",
      "timeContext": "night",
      "analysis": {
        "habitDetected": true,
        "habitTitle": "...",
        "habitDescription": "...",
        "insight": "...",
        "recommendation": "...",
        "confidence": 87,
        "emotion": "concerned"
      },
      "timestamp": "2024-04-07T23:30:00.000Z"
    },
    // ... up to 10 entries
  ]
}
```

---

## 🔐 Security Flow

```
┌─────────────────────────┐
│   Frontend Browser       │
│  (No sensitive data)    │
└────────────┬────────────┘
             │
             │ HTTP Request (encrypted HTTPS in prod)
             │
     ┌───────▼────────┐
     │  Express Server │
     │                │
     │ ✅ API Key stored securely
     │ ✅ CORS configured
     │ ✅ Env variables
     └────────┬────────┘
              │
              │ HTTPS + API Key
              │
     ┌────────▼──────────┐
     │ Gemini API        │
     │ (Google Secured)  │
     └───────────────────┘
```

---

## 📊 Performance Considerations

```
Frontend Optimizations:
├── Vite for fast HMR (Hot Module Reload)
├── React lazy loading ready
├── CSS animations (GPU-accelerated)
├── localStorage caching
└── Responsive design

Backend Optimizations:
├── Express middleware for CORS
├── Structured JSON responses
├── Error handling
└── Stateless design (scalable)

API Considerations:
├── Gemini API usage-based pricing
├── Rate limiting (implement in production)
├── Request caching possible
└── Async/await for non-blocking
```

---

## 🚀 Deployment Architecture

```
Production Setup:

┌───────────────────────────────┐
│   CDN / Static Hosting         │
│   (Vercel / Netlify)           │
│  React Frontend (Vite build)   │
│  • index.html                  │
│  • main.js (bundled)           │
│  • styles.css (bundled)        │
└───────────────┬─────────────────┘
                │
                │ API calls to:
                │
┌───────────────▼──────────────────┐
│   Cloud Function / Server         │
│   (Railway / Heroku / EC2)        │
│  Express Backend                  │
│  • server.js                      │
│  • Environment variables          │
│  • HTTPS enabled                  │
│  • CORS configured               │
└───────────────┬──────────────────┘
                │
                │ Secured API calls
                │
┌───────────────▼──────────────────┐
│   Google Gemini API              │
│   (Global, Secured)              │
└──────────────────────────────────┘
```

---

## 🎯 Key Metrics

```
Code Statistics:
├── Frontend Components: 3
├── Frontend Pages: 5
├── Backend Routes: 3
├── Total React Components: 8
├── CSS Animations: 5+
├── API Endpoints: 2 main
└── Total Lines of Code: 2000+

Performance Targets:
├── Frontend Load Time: < 2s
├── API Response Time: < 1s (Gemini varies)
├── Chrome Lighthouse Score: 85+
└── Mobile Responsive: ✅

Data Limits:
├── History Storage: 10 entries (localStorage)
├── Analyze Confidence: 0-100%
├── Session Duration: Indefinite
└── API Rate Limit: 15 req/min (Gemini free tier)
```

---

*Diagram generated for Genesis Architecture Overview*
*For more details, see README.md and SETUP.md*
