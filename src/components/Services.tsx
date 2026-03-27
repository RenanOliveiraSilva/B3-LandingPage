const services = [
  { icon: '🖥️', title: 'Landing Pages', desc: 'Páginas de alta conversão, com design premium, copy estratégica e performance otimizada para captar leads e vender.' },
  { icon: '🌐', title: 'Sites Institucionais', desc: 'Sites profissionais que comunicam autoridade, fortalecem sua marca e posicionam sua empresa no mercado digital.' },
  { icon: '⚙️', title: 'Sistemas Web', desc: 'Painéis administrativos, CRMs, dashboards e plataformas sob medida para gerenciar e escalar operações.' },
  { icon: '💻', title: 'Aplicações Sob Medida', desc: 'Desenvolvimento de software customizado para resolver desafios únicos do seu negócio com tecnologia de ponta.' },
  { icon: '🔄', title: 'Automações', desc: 'Automatize processos repetitivos, integrações entre sistemas e fluxos de trabalho para ganhar produtividade.' },
  { icon: '📊', title: 'Consultoria Digital', desc: 'Análise estratégica da sua presença digital, diagnóstico de oportunidades e planejamento de soluções tecnológicas.' },
]

export default function Services() {
  return (
    <section id="servicos" className="py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-b3-accent mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-b3-accent before:rounded-sm">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-b3-text leading-tight mb-5">
            Soluções digitais completas para{' '}
            <span className="bg-gradient-to-r from-b3-accent to-b3-secondary-blue bg-clip-text text-transparent">
              cada etapa
            </span>{' '}
            do seu negócio
          </h2>
          <p className="text-base text-b3-text-secondary leading-relaxed">
            Do conceito à entrega, desenvolvemos soluções pensadas para gerar resultado real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="group bg-b3-surface border border-white/8 rounded-2xl p-9 transition-all duration-300 relative overflow-hidden hover:border-b3-accent/15 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-b3-accent/30 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-b3-accent/8 flex items-center justify-center mb-5 text-2xl">
                {s.icon}
              </div>
              <h4 className="text-lg font-bold text-b3-text mb-3">{s.title}</h4>
              <p className="text-sm text-b3-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
