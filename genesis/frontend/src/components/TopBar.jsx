function HeaderIcon({ children }) {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition-all hover:bg-white/70 hover:text-stone-900">
      {children}
    </button>
  )
}

export default function TopBar() {
  return (
    <header className="genesis-topbar">
      <div className="flex items-center gap-2">
        <HeaderIcon>
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
            <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.42V11a6 6 0 1 0-12 0v3.18a2 2 0 0 1-.6 1.42L4 17h5" />
            <path d="M10 20a2 2 0 0 0 4 0" />
          </svg>
        </HeaderIcon>
        <HeaderIcon>
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 0 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 0 1-4 0v-.2a1 1 0 0 0-.7-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 0 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 0 1 0-4h.2a1 1 0 0 0 .9-.7 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2h.1a1 1 0 0 0 .6-.9V4a2 2 0 0 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1v.1a1 1 0 0 0 .9.6H20a2 2 0 0 1 0 4h-.2a1 1 0 0 0-.9.6Z" />
          </svg>
        </HeaderIcon>
        <div className="ml-2 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/90 bg-[#eff1ee] shadow-[0_10px_25px_rgba(71,60,46,0.08)]">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya"
            alt="User profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  )
}
