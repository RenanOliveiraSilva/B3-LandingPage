export default function Problems() {
  const problems = [
    {
      num: '01',
      title: 'Presença digital fraca ou inexistente',
      desc: 'Sua empresa não tem um site profissional ou sua página atual não reflete a qualidade do seu trabalho.',
    },
    {
      num: '02',
      title: 'Landing pages que não convertem',
      desc: 'Você investe em tráfego, mas os visitantes não se transformam em leads ou clientes qualificados.',
    },
    {
      num: '03',
      title: 'Processos manuais e ineficientes',
      desc: 'Planilhas, controles manuais e falta de integração entre sistemas consomem tempo e geram erros.',
    },
    {
      num: '04',
      title: 'Sistemas que não escalam',
      desc: 'Ferramentas genéricas limitam o crescimento e não atendem às necessidades específicas do seu negócio.',
    },
  ]

  return (
    <section
      id="problemas"
      className="py-28 bg-b3-surface border-t border-b border-white/8"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-b3-accent mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-b3-accent before:rounded-sm">
              Problemas que resolvemos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-b3-text leading-tight mb-5">
              Sua empresa enfrenta{' '}
              <span className="bg-gradient-to-r from-b3-accent to-b3-secondary-blue bg-clip-text text-transparent">
                esses desafios
              </span>
              ?
            </h2>
            <p className="text-base text-b3-text-secondary leading-relaxed max-w-[600px]">
              Identificamos as dores mais comuns de empresas que precisam de presença digital e soluções tecnológicas eficientes.
            </p>
          </div>

          <div>
            {problems.map(p => (
              <div
                key={p.num}
                className="flex items-start gap-5 py-7 border-b border-white/8 last:border-b-0"
              >
                <span className="text-sm font-bold text-b3-accent font-mono min-w-[32px] pt-0.5">
                  {p.num}
                </span>
                <div>
                  <h4 className="text-base font-semibold text-b3-text mb-1.5">{p.title}</h4>
                  <p className="text-sm text-b3-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
