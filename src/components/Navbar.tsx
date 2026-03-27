import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}
      className={`transition-all duration-300 ${
        scrolled
          ? 'bg-b3-bg-dark/95 backdrop-blur-2xl py-3 border-b border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="8" fill="url(#lg)" />
            <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#061735" fontFamily="Inter" fontWeight="900" fontSize="16">B3</text>
            <defs><linearGradient id="lg" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stopColor="#1BC29D" /><stop offset="100%" stopColor="#028578" /></linearGradient></defs>
          </svg>
          <span className="text-xl font-extrabold text-b3-text">
            B3 <span className="text-b3-accent">Tech</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className={`items-center gap-8 ${menuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-b3-bg-dark/97 backdrop-blur-xl p-6 border-b border-white/8 gap-4' : 'hidden md:flex'}`}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-b3-text-secondary hover:text-b3-text transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-b3-accent after:rounded-sm after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full bg-b3-accent text-b3-primary-dark hover:bg-[#15a888] hover:shadow-[0_8px_32px_rgba(27,194,157,0.25)] hover:-translate-y-0.5 transition-all"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-b3-text rounded transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-b3-text rounded transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-b3-text rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>
    </nav>
  )
}
