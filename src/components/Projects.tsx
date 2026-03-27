const projects = [
  {
    tag: 'E-commerce',
    title: 'Plataforma de Vendas Online',
    desc: 'Sistema completo de e-commerce com painel administrativo, gestão de estoque e integração com meios de pagamento.',
    gradient: 'from-b3-primary-blue to-b3-surface-up',
    icon: '🛒',
  },
  {
    tag: 'Saúde',
    title: 'Sistema de Agendamento',
    desc: 'Plataforma de agendamento online para clínicas, com gestão de horários, notificações e prontuário digital.',
    gradient: 'from-b3-surface-up to-b3-primary-blue',
    icon: '🏥',
  },
  {
    tag: 'Dashboard',
    title: 'Painel de Métricas',
    desc: 'Dashboard interativo para visualização de KPIs, relatórios automatizados e tomada de decisão baseada em dados.',
    gradient: 'from-b3-surface to-b3-secondary-blue',
    icon: '📈',
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-28 bg-b3-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-b3-accent mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-b3-accent before:rounded-sm">
            Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-b3-text leading-tight mb-5">
            Exemplos de{' '}
            <span className="bg-gradient-to-r from-b3-accent to-b3-secondary-blue bg-clip-text text-transparent">
              soluções
            </span>{' '}
            que entregamos
          </h2>
          <p className="text-base text-b3-text-secondary leading-relaxed">
            Cada projeto é único — desenvolvido sob medida para atender necessidades reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div
              key={p.title}
              className="bg-b3-surface border border-white/8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]"
            >
              <div className={`h-44 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                <span className="text-5xl opacity-30">{p.icon}</span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-b3-surface" />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-b3-accent mb-2.5 block">
                  {p.tag}
                </span>
                <h4 className="text-lg font-bold text-b3-text mb-2">{p.title}</h4>
                <p className="text-sm text-b3-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
