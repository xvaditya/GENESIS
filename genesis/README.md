# Genesis – Behavioural Food Intelligence System

A smart web application that helps users make better food choices by analyzing eating behavior through mood, context, and AI-powered insights.

## 🎯 Features

### Core Features
- **Smart Food Analysis**: Input what you ate, your mood, and time of day
- **Behavioral Insights**: AI-powered analysis of eating patterns and habits
- **Emotional UI System**: Animated emoji/blob characters that react to your behavior
- **History Tracking**: Keep track of your last 10 food entries
- **Progress Dashboard**: Monitor your habit score and behavioral trends
- **AI Assistant**: Chat-based interface for personalized recommendations

### Emotional Character System
The app features an interactive emotional companion that responds to your behaviors:
- 😄 **Happy** - Good habits detected
- 😴 **Tired** - Low energy patterns
- 😐 **Neutral** - Average behavior
- 🤓 **Focused** - Balanced eating
- 😟 **Concerned** - Warning patterns
- 🤔 **Thinking** - Analysis in progress

## 🛠 Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API communication

### Backend
- **Node.js** with Express.js
- **Google Gemini 2.5 Pro API** for AI analysis
- **CORS** for cross-origin support

### Deployment Ready
- Both frontend and backend can be deployed independently
- Environment variables for secure API key management

## 📋 Prerequisites

- **Node.js** 16.0.0 or higher
- **npm** or **yarn**
- **Google Gemini API Key** (get one at [Google AI Studio](https://makersuite.google.com/app/apikey))

## 🚀 Installation & Setup

### 1. Clone/Extract the project
```bash
cd genesis
```

### 2. Install all dependencies
```bash
npm run install:all
```

This will install dependencies for both frontend and backend.

### 3. Configure API Key

#### Frontend (`.env.local`)
```env
VITE_API_URL=http://localhost:3001/api
```

#### Backend (`.env.local`)
```env
GEMINI_API_KEY=your-actual-api-key-here
PORT=3001
```

**Replace `your-actual-api-key-here` with your actual Google Gemini API key.**

## 🎮 Running the Application

### Option 1: Run Both in Separate Terminals (Recommended for Development)

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:3001`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

### Option 2: Production Build

**Build Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

**Run Backend:**
```bash
cd backend
npm start
```

## 📱 How to Use

### 1. Dashboard
- View your habit score
- See quick stats and today's habits
- Monitor energy trends

### 2. Analyse (Core Feature)
1. Describe what you ate
2. Select your current mood (😄 😴 😐 🤓)
3. Click "Analyse Behaviour"
4. Get instant insights with:
   - 🔁 Habit Detection
   - 💡 Smart Insights
   - 📌 Recommendations
   - 📊 Confidence Score

### 3. History
- View all your tracked meals (up to 10)
- See mood and insights for each entry
- Quick statistics about your patterns

### 4. Progress
- Track your habit score over time
- View behavioral metrics
- See milestones and achievements

### 5. Assistant
- Ask questions about your eating behavior
- Get personalized recommendations
- Chat-based AI support

## 📊 Example Demo

**Input:**
- Food: "Pizza and coke while watching movies"
- Mood: 😴 Tired
- Time: Night

**Output:**
```json
{
  "habitDetected": true,
  "habitTitle": "Screen-Bound Eating",
  "habitDescription": "You consume high-calorie meals during entertainment sessions",
  "insight": "Heavy meals late at night can impact sleep quality and morning energy",
  "recommendation": "Try a lighter snack 2 hours before entertainment, or eat earlier",
  "confidence": 92,
  "emotion": "concerned"
}
```

## 🎨 Customization

### Update Colors
Edit `frontend/tailwind.config.js` to customize the theme colors.

### Modify AI Behavior
Update the `SYSTEM_PROMPT` in `backend/server.js` to change how the AI analyzes food.

### Add More Emotions
Edit `frontend/src/components/EmotionalBlob.jsx` to add custom emotion states.

## 🔐 Security Notes

- **Never commit `.env.local` files** - use `.env.example` as template
- API keys are only used server-side (never exposed to browser)
- All requests go through Express backend, ensuring security
- CORS is configured for development (restrict in production)

## 🚀 Deployment

### Backend (Heroku, Railway, Vercel)
1. Set `GEMINI_API_KEY` in environment variables
2. Deploy `backend/` folder
3. Update frontend `VITE_API_URL` to your backend URL

### Frontend (Vercel, Netlify)
1. Set `VITE_API_URL` to your backend URL
2. Deploy `frontend/` folder
3. Vite will automatically build optimized production bundle

## 📦 Project Structure

```
genesis/
├── frontend/                 # React application
│   ├── src/
│   │   ├── pages/           # Dashboard, Analyse, History, etc.
│   │   ├── components/      # EmotionalBlob, Sidebar, TopBar
│   │   ├── utils/           # API, helpers
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                 # Express server
│   ├── server.js           # Main server with Gemini integration
│   ├── .env.local          # Local environment (not committed)
│   └── package.json
│
├── package.json            # Root package (convenience scripts)
└── README.md
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3001 (backend)
# macOS/Linux:
lsof -ti:3001 | xargs kill -9

# Windows:
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

### Gemini API Errors
- Verify API key in `.env.local`
- Check API quota at Google AI Studio
- Ensure internet connection

### CORS Errors
- Frontend and backend URLs must match in configuration
- Check `VITE_API_URL` in frontend `.env.local`
- Verify backend CORS middleware is enabled

### Blank Page
- Check browser console for errors
- Verify backend is running on correct port
- Check network tab in DevTools for API calls

## 📞 Support

For issues or questions:
1. Check the browser console for error messages
2. Check backend terminal for server errors
3. Verify API key and environment variables
4. Ensure all dependencies are installed correctly

## 📄 License

This project is open source and available for personal and commercial use.

## 🎯 Future Enhancements

- Wearable integration (Apple Watch, Fitbit)
- Long-term behavioral analytics
- Meal recommendations
- Social sharing features
- Advanced habit scoring
- Multi-language support
- Mobile app (React Native)

---

**Built with ❤️ for understanding eating behavior through AI**
