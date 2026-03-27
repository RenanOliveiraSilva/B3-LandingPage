const diffs = [
  { icon: '💎', title: 'Design Premium', desc: 'Interfaces sofisticadas que transmitem credibilidade e diferenciam sua marca no mercado.' },
  { icon: '⚡', title: 'Performance Otimizada', desc: 'Código limpo, leve e otimizado para velocidade de carregamento e melhor experiência do usuário.' },
  { icon: '🔒', title: 'Segurança & Confiabilidade', desc: 'Desenvolvimento com boas práticas de segurança, backups e infraestrutura robusta.' },
  { icon: '🤝', title: 'Atendimento Consultivo', desc: 'Não somos apenas executores. Entendemos seu negócio e sugerimos as melhores soluções.' },
  { icon: '🚀', title: 'Foco em Conversão', desc: 'Cada pixel é pensado para guiar o visitante em direção à ação que importa para o seu negócio.' },
  { icon: '🛟', title: 'Suporte Contínuo', desc: 'Acompanhamento pós-entrega com suporte técnico, atualizações e evolução do projeto.' },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-b3-accent mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-b3-accent before:rounded-sm">
            Por Que a B3 Tech
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-b3-text leading-tight">
            O que nos torna{' '}
            <span className="bg-gradient-to-r from-b3-accent to-b3-secondary-blue bg-clip-text text-transparent">
              diferentes
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map(d => (
            <div
              key={d.title}
              className="bg-b3-surface border border-white/8 rounded-2xl p-8 transition-all duration-300 hover:border-b3-accent/15"
            >
              <span className="text-3xl mb-4 block">{d.icon}</span>
              <h4 className="text-base font-bold text-b3-text mb-2">{d.title}</h4>
              <p className="text-sm text-b3-text-secondary leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
