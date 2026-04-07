# 📑 Genesis Project Files Index

## 📖 Documentation Files (Read These First!)

| File | Purpose | Read This If... |
|------|---------|-----------------|
| **START_HERE.md** | 🎯 **BEGIN HERE** | You just received the project |
| **QUICKSTART.md** | ⚡ 5-minute setup | You want to start immediately |
| **SETUP.md** | 📝 Detailed guide | You need full installation steps |
| **README.md** | 📚 Complete docs | You need comprehensive reference |
| **ARCHITECTURE.md** | 🏗️ System design | You want to understand how it works |
| **COMPLETION_SUMMARY.md** | ✅ What was built | You want detailed feature list |

---

## 🎯 Quick Navigation

### "I want to get started now!"
→ Read: **QUICKSTART.md** (5 mins)

### "I need detailed setup instructions"
→ Read: **SETUP.md** (15 mins)

### "I want to understand the architecture"
→ Read: **ARCHITECTURE.md** (20 mins)

### "I need full documentation"
→ Read: **README.md** (30 mins)

---

## 📂 Frontend Files

### Pages (User-Facing Interface)
```
frontend/src/pages/
├── Dashboard.jsx       - Habit overview & companion
├── Analyse.jsx         - CORE: Food analysis page
├── History.jsx         - Meal history table
├── Progress.jsx        - Behavior trends & milestones
└── Assistant.jsx       - AI chat interface
```

### Components (Reusable Elements)
```
frontend/src/components/
├── EmotionalBlob.jsx   - CORE: Animated emotions (6 states)
├── Sidebar.jsx         - Navigation sidebar
└── TopBar.jsx          - Header with notifications
```

### Utilities (Helper Code)
```
frontend/src/utils/
├── api.js              - Axios client & API functions
└── helpers.js          - Utility functions (time, mood, etc.)
```

### Core Files
```
frontend/src/
├── App.jsx             - Main router & state management
├── main.jsx            - React entry point
└── index.css           - Tailwind setup & custom styles
```

### Configuration
```
frontend/
├── package.json        - React dependencies
├── vite.config.js      - Vite configuration
├── tailwind.config.js  - Theme colors & animations
├── postcss.config.js   - PostCSS setup
├── index.html          - HTML template
└── .env.local          - Local environment (YOUR API URL)
```

---

## ⚙️ Backend Files

### Main Server
```
backend/
├── server.js           - CORE: Express + Gemini
├── package.json        - Node dependencies
└── .env.local          - YOUR GEMINI API KEY
```

### What server.js Contains:
```
✅ Express app initialization
✅ CORS configuration  
✅ Gemini AI initialization
✅ System prompt for AI
✅ POST /api/analyze endpoint
✅ POST /api/ask endpoint
✅ GET /api/health endpoint
✅ Error handling
✅ Server startup
```

---

## 🚀 Quick Reference

### To Install:
```bash
npm run install:all  # Installs both frontend & backend
```

### To Run Frontend:
```bash
cd frontend && npm run dev  # Runs on http://localhost:5173
```

### To Run Backend:
```bash
cd backend && npm run dev  # Runs on http://localhost:3001
```

### To Build for Production:
```bash
cd frontend && npm run build  # Creates optimized dist/
```

---

## 📊 File Statistics

| Category | Count | Example |
|----------|-------|---------|
| **Pages** | 5 | Dashboard, Analyse, History, Progress, Assistant |
| **Components** | 3 | Sidebar, TopBar, EmotionalBlob |
| **API Routes** | 3 | /analyze, /ask, /health |
| **Utilities** | 2 | api.js, helpers.js |
| **Config Files** | 8 | package.json, tailwind.config.js, etc. |
| **Docs** | 6 | README.md, SETUP.md, etc. |

---

## 🎯 Key Features by Location

### Emotional Blob System
**File**: `frontend/src/components/EmotionalBlob.jsx`
- 6 emotion states
- SVG blob graphics
- 5+ animations
- Used on all 5 pages

### Food Analysis
**Front**: `frontend/src/pages/Analyse.jsx`
**Back**: `backend/server.js` (POST /api/analyze)
- Food input
- Mood selection
- AI analysis
- Result display

### History Tracking
**File**: `frontend/src/pages/History.jsx`
**Storage**: Browser localStorage
- Meal table
- 10 entry limit
- Category sorting
- Statistics

### Progress Tracking
**File**: `frontend/src/pages/Progress.jsx`
**Logic**: `frontend/src/utils/helpers.js`
- Habit score
- Trend graphs
- Milestones
- Metrics

### AI Assistant
**Front**: `frontend/src/pages/Assistant.jsx`
**Back**: `backend/server.js` (POST /api/ask)
- Chat interface
- Context awareness
- Personalized responses

---

## 🔐 Configuration Files

### Environment Setup
```
backend/.env.local
├── GEMINI_API_KEY=your-key-here
└── PORT=3001

frontend/.env.local  
└── VITE_API_URL=http://localhost:3001/api
```

### Build Configuration
```
frontend/vite.config.js
├── React plugin
├── Dev server ports
└── API proxy settings

frontend/tailwind.config.js
├── Color scheme
├── Animations
└── Typography

backend/package.json
└── Express, Cors, Gemini dependencies
```

---

## 📝 Dependencies at a Glance

### Frontend (12 dependencies)
```json
{
  "react": "^18.2.0",           // UI Framework
  "react-dom": "^18.2.0",       // DOM rendering
  "react-router-dom": "^6.20.0",// Page routing
  "axios": "^1.6.0",            // HTTP client
  "vite": "^5.0.0",             // Build tool
  "tailwindcss": "^3.4.0",      // CSS framework
  "@vitejs/plugin-react": "^4.2.0"
  // ... development dependencies
}
```

### Backend (4 core dependencies)
```json
{
  "express": "^4.18.0",                   // Web framework
  "cors": "^2.8.5",                       // Cross-origin
  "dotenv": "^16.3.0",                    // Env vars
  "@google/generative-ai": "^0.3.0"       // Gemini API
}
```

---

## 🎮 How to Use Each File

### To Modify Colors:
→ Edit: `frontend/tailwind.config.js`

### To Change AI Behavior:
→ Edit: `backend/server.js` (SYSTEM_PROMPT)

### To Add More Emotions:
→ Edit: `frontend/src/components/EmotionalBlob.jsx`

### To Add API Endpoint:
→ Edit: `backend/server.js` (add new route)

### To Add New Page:
→ Create: `frontend/src/pages/NewPage.jsx`
→ Add to: `frontend/src/App.jsx` (routing)

---

## ✅ Pre-Flight Checklist

Before starting, verify:
- [ ] Node.js installed
- [ ] Gemini API key obtained
- [ ] All documentation files present (6 .md files)
- [ ] Both folders exist: /frontend and /backend
- [ ] package.json in root, /frontend, and /backend

---

## 🎬 First-Time Setup Flow

```
1. Clone/extract project
   ↓
2. Read START_HERE.md
   ↓
3. Get Gemini API key
   ↓
4. Edit backend/.env.local with API key
   ↓
5. Run: npm run install:all
   ↓
6. Terminal 1: cd backend && npm run dev
   ↓
7. Terminal 2: cd frontend && npm run dev
   ↓
8. Open: http://localhost:5173
   ↓
9. Try Analyse page
   ↓
10. Success! 🎉
```

---

## 📞 File Purpose Summary

| File | What It Does | Why You Need It |
|------|-------------|-----------------|
| App.jsx | Routes + state management | Core of app |
| EmotionalBlob.jsx | Animated emotions | Core feature |
| Analyse.jsx | Food analysis page | Main user interaction |
| server.js | Express + Gemini | Backend brain |
| api.js | API communication | Frontend-backend bridge |
| helpers.js | Utility functions | Common operations |
| tailwind.config.js | Design system | Beautiful UI |
| package.json | Dependencies | Everything works |
| .env.local | Secrets | API key security |

---

## 🌟 Most Important Files (In Order)

1. **backend/.env.local** - Contains YOUR API key ⚠️
2. **backend/server.js** - The AI brain 🧠
3. **frontend/src/pages/Analyse.jsx** - Main feature 🎯
4. **frontend/src/components/EmotionalBlob.jsx** - Core UI 🎭
5. **frontend/src/App.jsx** - App router 🗂️

---

## 📚 Reading Order (First Time)

1. **START_HERE.md** (You are here!)
2. **QUICKSTART.md** (2 mins)
3. **SETUP.md** (if installation issues)
4. **README.md** (for full reference)
5. **ARCHITECTURE.md** (to understand design)

---

## ✨ Your Genesis Is Complete!

This index covers all 30+ files in your project. Start with **QUICKSTART.md** and you'll be running in 5 minutes!

Happy analyzing! 🍽️ 🤖 ✨

---

*Last Updated: April 2024*
*Project Status: ✅ Complete & Ready*
