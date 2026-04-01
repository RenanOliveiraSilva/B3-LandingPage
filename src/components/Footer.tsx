export default function Footer() {
  return (
    <footer className="bg-b3-surface border-t border-white/8 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="url(#flg)" />
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#061735" fontFamily="Inter" fontWeight="900" fontSize="16">B3</text>
                <defs><linearGradient id="flg" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stopColor="#1BC29D" /><stop offset="100%" stopColor="#028578" /></linearGradient></defs>
              </svg>
              <span className="text-lg font-extrabold text-b3-text">
                B3 <span className="text-b3-accent">Tech</span>
              </span>
            </a>
            <p className="text-sm text-b3-text-secondary leading-relaxed max-w-[300px]">
              Transformamos ideias e processos em soluções digitais que geram resultado para o seu negócio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-sm font-bold text-b3-text uppercase tracking-wider mb-5">Serviços</h5>
            <div className="flex flex-col gap-2.5">
              {['Landing Pages', 'Sites Institucionais', 'Sistemas Web', 'Automações'].map(s => (
                <a key={s} href="#servicos" className="text-sm text-b3-text-secondary hover:text-b3-accent transition-colors">{s}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-sm font-bold text-b3-text uppercase tracking-wider mb-5">Empresa</h5>
            <div className="flex flex-col gap-2.5">
              {[
                { label: 'Sobre', href: '#problemas' },
                { label: 'Como Funciona', href: '#como-funciona' },
                { label: 'Diferenciais', href: '#diferenciais' },
                { label: 'Projetos', href: '#projetos' },
              ].map(l => (
                <a key={l.label} href={l.href} className="text-sm text-b3-text-secondary hover:text-b3-accent transition-colors">{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-bold text-b3-text uppercase tracking-wider mb-5">Contato</h5>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:contato@b3tecnologia.com" className="text-sm text-b3-text-secondary hover:text-b3-accent transition-colors">
                ✉️ contato@b3tecnologia.com
              </a>
              <a href="https://wa.me/5516992558410" target="_blank" rel="noopener noreferrer" className="text-sm text-b3-text-secondary hover:text-b3-accent transition-colors">
                📞 +55 16 99255-8410
              </a>
              <span className="text-sm text-b3-text-secondary">
                📍 Brasil
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[13px] text-b3-text-muted">
              © 2026 B3 Tecnologia. Todos os direitos reservados.
            </p>
            <p className="text-[12px] text-b3-text-muted/60">
              CNPJ: 65.207.801/0001-78
            </p>
          </div>
          <div className="flex gap-4">
            {[
              { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              { label: 'GitHub', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
            ].map(s => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-b3-text-secondary hover:border-b3-accent hover:text-b3-accent hover:bg-b3-accent/5 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
