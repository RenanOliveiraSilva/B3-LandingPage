const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Entendemos seu negócio, seus objetivos e mapeamos as necessidades técnicas e estratégicas.' },
  { num: '02', title: 'Proposta & Design', desc: 'Apresentamos a solução ideal com escopo, prazo e protótipo visual para sua aprovação.' },
  { num: '03', title: 'Desenvolvimento', desc: 'Construímos a solução com as melhores tecnologias, seguindo boas práticas e seu acompanhamento.' },
  { num: '04', title: 'Entrega & Suporte', desc: 'Deploy, treinamento e suporte contínuo para garantir que tudo funcione com excelência.' },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 bg-b3-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-b3-accent mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-b3-accent before:rounded-sm">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-b3-text leading-tight mb-5">
            Do briefing ao deploy em{' '}
            <span className="bg-gradient-to-r from-b3-accent to-b3-secondary-blue bg-clip-text text-transparent">
              4 etapas
            </span>
          </h2>
          <p className="text-base text-b3-text-secondary leading-relaxed">
            Um processo claro, transparente e focado em resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[34px] left-[60px] right-[60px] h-0.5 bg-gradient-to-r from-b3-accent/20 to-b3-secondary-blue/20" />

          {steps.map(s => (
            <div key={s.num} className="text-center relative group">
              <div className="w-[68px] h-[68px] rounded-full bg-b3-surface border-2 border-white/14 flex items-center justify-center mx-auto mb-5 text-[22px] font-extrabold text-b3-accent relative z-10 transition-all group-hover:border-b3-accent group-hover:shadow-[0_0_24px_rgba(27,194,157,0.15)]">
                {s.num}
              </div>
              <h4 className="text-base font-bold text-b3-text mb-2">{s.title}</h4>
              <p className="text-[13px] text-b3-text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
