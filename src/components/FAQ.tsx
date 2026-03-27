import { useState } from 'react'

const faqs = [
  {
    q: 'Quanto custa desenvolver um site ou sistema?',
    a: 'O investimento varia de acordo com a complexidade, funcionalidades e escopo do projeto. Após o diagnóstico inicial, apresentamos uma proposta detalhada com valores, prazos e entregas bem definidas.',
  },
  {
    q: 'Qual o prazo médio de entrega?',
    a: 'Landing pages são entregues em 5 a 10 dias úteis. Sites institucionais de 15 a 30 dias. Sistemas web variam de 30 a 90 dias dependendo da complexidade. Cada projeto recebe um cronograma personalizado.',
  },
  {
    q: 'Vocês oferecem suporte após a entrega?',
    a: 'Sim. Todos os nossos projetos incluem um período de suporte técnico pós-entrega. Também oferecemos planos de manutenção contínua para garantir atualizações, segurança e evolução do sistema.',
  },
  {
    q: 'Posso acompanhar o desenvolvimento do projeto?',
    a: 'Com certeza. Trabalhamos com total transparência. Você recebe acesso ao progresso do projeto, validações intermediárias e pode sugerir ajustes durante todo o processo de desenvolvimento.',
  },
  {
    q: 'Quais tecnologias vocês utilizam?',
    a: 'Utilizamos as tecnologias mais modernas e adequadas para cada projeto: React, Next.js, Node.js, Python, bancos de dados relacionais e NoSQL, além de infraestrutura cloud para escalabilidade e performance.',
  },
]

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="faq" className="py-28 bg-b3-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-b3-accent mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-b3-accent before:rounded-sm">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-b3-text leading-tight">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-b3-accent to-b3-secondary-blue bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-white/8">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left text-base font-semibold text-b3-text hover:text-b3-accent transition-colors cursor-pointer"
              >
                {f.q}
                <svg
                  className={`w-4 h-4 text-b3-text-muted shrink-0 transition-transform duration-300 ${active === i ? 'rotate-180 text-b3-accent' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  active === i ? 'max-h-[300px] pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-sm leading-relaxed text-b3-text-secondary">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
