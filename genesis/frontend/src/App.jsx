import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Dashboard from './pages/Dashboard'
import Analyse from './pages/Analyse'
import History from './pages/History'
import Progress from './pages/Progress'
import Assistant from './pages/Assistant'

function AppLayout({ history, addToHistory }) {
  return (
    <div className="app-shell text-on-background">
      <div className="blob-bg" />
      <Sidebar />
      <TopBar />

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Dashboard history={history} />} />
          <Route path="/analyse" element={<Analyse addToHistory={addToHistory} />} />
          <Route path="/history" element={<History history={history} />} />
          <Route path="/progress" element={<Progress history={history} />} />
          <Route path="/assistant" element={<Assistant history={history} />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('genesis-history')
    if (saved) {
      setHistory(JSON.parse(saved))
    }
  }, [])

  const addToHistory = (entry) => {
    const updated = [entry, ...history].slice(0, 10)
    setHistory(updated)
    localStorage.setItem('genesis-history', JSON.stringify(updated))
  }

  return (
    <BrowserRouter>
      <AppLayout history={history} addToHistory={addToHistory} />
    </BrowserRouter>
  )
}

export default App
