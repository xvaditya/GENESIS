import { Link, useLocation } from 'react-router-dom'

function Icon({ path, active = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-[18px] w-[18px] ${active ? 'text-[#8c3d00]' : 'text-stone-500'}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}

const navItems = [
  {
    label: 'Dashboard',
    to: '/',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    label: 'Analyse',
    to: '/analyse',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 15V11" />
        <path d="M12 15V8" />
        <path d="M16 15V12" />
      </>
    ),
  },
  {
    label: 'History',
    to: '/history',
    icon: (
      <>
        <path d="M4 12a8 8 0 1 0 3-6.245" />
        <path d="M4 4v5h5" />
        <path d="M12 8v5l3 2" />
      </>
    ),
  },
  {
    label: 'Progress',
    to: '/progress',
    icon: (
      <>
        <path d="M4 17l5-5 4 4 7-8" />
        <path d="M18 8h2v2" />
      </>
    ),
  },
  {
    label: 'Assistant',
    to: '/assistant',
    icon: (
      <>
        <rect x="6" y="7" width="12" height="10" rx="3" />
        <path d="M9 7V5h6v2" />
        <path d="M9 17v2" />
        <path d="M15 17v2" />
        <circle cx="10" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="14" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="genesis-sidebar">
      <div className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8b00] to-[#ffb121] shadow-[0_14px_32px_rgba(255,143,0,0.28)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v3" />
              <path d="M12 19v3" />
              <path d="M4.93 4.93l2.12 2.12" />
              <path d="M16.95 16.95l2.12 2.12" />
              <path d="M2 12h3" />
              <path d="M19 12h3" />
              <path d="M4.93 19.07l2.12-2.12" />
              <path d="M16.95 7.05l2.12-2.12" />
              <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div>
            <p className="text-[1.55rem] font-extrabold leading-none text-[#8c3d00]">Genesis</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-400">
              Food Intelligence
            </p>
          </div>
        </div>

        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const active = location.pathname === item.to

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                  active
                    ? 'bg-[#fff7ee] text-[#8c3d00]'
                    : 'text-stone-500 hover:bg-white/65 hover:text-stone-800'
                }`}
              >
                {active && <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-[#ffbf2f]" />}
                <Icon path={item.icon} active={active} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <button className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-stone-500 transition-colors hover:bg-white/65 hover:text-stone-800">
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-current text-[10px]">O</span>
        <span>Profile</span>
      </button>
    </aside>
  )
}
