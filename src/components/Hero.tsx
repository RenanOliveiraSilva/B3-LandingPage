import ParticleNetwork from './ParticleNetwork'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-b3-bg-dark" style={{ zIndex: 0 }} />

      {/* Ambient glow effects */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 0,
          background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(15,55,89,0.4) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          zIndex: 0,
          background: 'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(27,194,157,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Particle network canvas */}
      <ParticleNetwork />

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to top, #07111F, transparent)',
        }}
      />

      {/* Content layer */}
      <div className="relative w-full pt-28 pb-20" style={{ zIndex: 10 }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-b3-accent/8 border border-b3-accent/15 px-5 py-2 rounded-full text-[13px] font-medium text-b3-accent mb-7 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-b3-accent animate-pulse" />
                Software house com foco em resultado
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.12] tracking-tight text-b3-text mb-6">
                Transformamos ideias e processos em{' '}
                <span className="bg-gradient-to-r from-b3-accent to-b3-secondary-blue bg-clip-text text-transparent">
                  soluções digitais
                </span>{' '}
                que geram resultado.
              </h1>

              <p className="text-[17px] leading-relaxed text-b3-text-secondary mb-10 max-w-[520px]">
                Desenvolvemos landing pages, sites, sistemas web e soluções sob medida para empresas que querem crescer com mais eficiência, presença digital e tecnologia.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2.5 text-[15px] font-semibold px-8 py-3.5 rounded-full bg-b3-accent text-b3-primary-dark hover:bg-[#15a888] hover:shadow-[0_8px_32px_rgba(27,194,157,0.25)] hover:-translate-y-0.5 transition-all"
                >
                  Solicitar Proposta
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center gap-2.5 text-[15px] font-semibold px-8 py-3.5 rounded-full border border-white/14 text-b3-text hover:border-b3-accent hover:text-b3-accent hover:bg-b3-accent/5 transition-all backdrop-blur-sm"
                >
                  Conheça os Serviços
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-14 pt-10 border-t border-white/8">
                {[
                  { value: '50+', label: 'Projetos Entregues' },
                  { value: '98%', label: 'Satisfação dos Clientes' },
                  { value: '24/7', label: 'Suporte Técnico' },
                ].map(s => (
                  <div key={s.label}>
                    <h3 className="text-[32px] font-extrabold text-b3-accent mb-1">{s.value}</h3>
                    <p className="text-[13px] text-b3-text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Code Visual */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="bg-b3-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-full max-w-[460px] relative overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.4)]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-b3-accent/30 to-transparent" />

                <div className="bg-b3-bg-dark/90 rounded-xl p-6 font-mono text-[13px] leading-7">
                  <div><span className="text-b3-text-muted mr-4">01</span><span className="text-[#546e7a]">// B3 Tech Solutions</span></div>
                  <div><span className="text-b3-text-muted mr-4">02</span><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">solucao</span> <span className="text-[#89ddff]">=</span> <span className="text-[#82aaff]">criar</span><span className="text-[#89ddff]">(</span><span className="text-[#f9a825]">{'{'}</span></div>
                  <div><span className="text-b3-text-muted mr-4">03</span>  tipo<span className="text-[#89ddff]">:</span> <span className="text-b3-accent">"landing-page"</span><span className="text-[#89ddff]">,</span></div>
                  <div><span className="text-b3-text-muted mr-4">04</span>  design<span className="text-[#89ddff]">:</span> <span className="text-b3-accent">"premium"</span><span className="text-[#89ddff]">,</span></div>
                  <div><span className="text-b3-text-muted mr-4">05</span>  performance<span className="text-[#89ddff]">:</span> <span className="text-b3-accent">"otimizada"</span><span className="text-[#89ddff]">,</span></div>
                  <div><span className="text-b3-text-muted mr-4">06</span>  conversao<span className="text-[#89ddff]">:</span> <span className="text-b3-accent">"alta"</span></div>
                  <div><span className="text-b3-text-muted mr-4">07</span><span className="text-[#f9a825]">{'}'}</span><span className="text-[#89ddff]">);</span></div>
                  <div><span className="text-b3-text-muted mr-4">08</span></div>
                  <div><span className="text-b3-text-muted mr-4">09</span><span className="text-[#c792ea]">await</span> solucao<span className="text-[#89ddff]">.</span><span className="text-[#82aaff]">deploy</span><span className="text-[#89ddff]">();</span></div>
                  <div><span className="text-b3-text-muted mr-4">10</span><span className="text-[#546e7a]">// ✓ Projeto entregue com sucesso</span></div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-6 bg-b3-surface-up/90 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2.5 text-[13px] font-medium text-b3-text shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-float">
                  <svg className="w-4 h-4 text-b3-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Deploy realizado
                </div>
                <div className="absolute -bottom-4 -left-6 bg-b3-surface-up/90 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2.5 text-[13px] font-medium text-b3-text shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-float-delayed">
                  <svg className="w-4 h-4 text-b3-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                  Performance 98/100
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
