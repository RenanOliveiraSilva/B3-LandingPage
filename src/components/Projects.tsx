import { useState } from 'react'
import garagemImg from '../assets/garagemCard.png'
import vexImg from '../assets/vex.png'
import petImg from '../assets/pet.png'

type Feature = {
  title: string
  desc: string
}

type Project = {
  tag: string
  title: string
  desc: string
  gradient: string
  icon: string
  image?: string
  link?: string
  overview?: string
  stack?: string[]
  features?: Feature[]
}

const projects: Project[] = [
  {
    tag: 'SaaS Automotivo',
    title: 'Sistema Garagem',
    desc: 'SaaS premium de gestão automotiva. Conta com vitrine avançada e painel administrativo blindado para gestão completa de estoque, mídias e métricas em tempo real.',
    gradient: 'from-b3-primary-blue to-b3-surface-up',
    icon: '🚗',
    image: garagemImg,
    link: 'https://frontend-garagem-omega.vercel.app/',
    overview: 'Trata-se de uma aplicação web moderna dividida em duas frentes: uma Vitrine Pública (Catálogo) para captação de clientes e um Painel Administrativo blindado para a gestão completa do estoque, métricas e mídias.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PHP REST', 'Cloudflare R2'],
    features: [
      {
        title: 'Vitrine Pública e Catálogo',
        desc: 'Exibição de cards responsivos de veículos com fallback inteligente de imagens, filtros e paginação preparados para o cliente final.',
      },
      {
        title: 'Dashboard Administrativo (Comando)',
        desc: 'Painel com métricas em tempo real (KPIs), lista de controle visual de estoque e barra de navegação responsiva com client-side rendering ultrarrápido.',
      },
      {
        title: 'Formulários em Cascata e Upload Reverso',
        desc: 'Cadastro avançado em abas (Spy-Nav) e seleção dinâmica. Upload de anexos de alto desempenho por drag-and-drop enviando multi-imagens via Promise.all direto para Cloudflare R2.',
      },
    ]
  },
  {
    tag: 'Web & Mobile',
    title: 'VEX - Vistoria Extintor',
    desc: 'Plataforma integrada de gestão e controle de extintores, operando com um Painel Web administrativo e Aplicativo Mobile Android offline para vistorias em campo.',
    gradient: 'from-[#821717] to-[#1F0707]',
    icon: '🧯',
    image: vexImg,
    overview: 'O VEX é uma plataforma integrada para gestão e controle de extintores, dividida estrategicamente em duas frentes complementares: um Painel Web poderoso para Gestão Administrativa e um Aplicativo Mobile Android projetado nativamente para Operação em Campo.',
    stack: ['Painel Web', 'Aplicativo Android', 'Operação Offline', 'PDF Engine'],
    features: [
      {
        title: 'Painel Web (Gestão)',
        desc: 'Cadastros avançados e vínculos de extintores. Conta com monitoramento completo e emite alertas automáticos de vencimento com 30 e 60 dias de antecedência, além de disponibilizar o histórico e geração de relatórios de inspeção em PDF.',
      },
      {
        title: 'Aplicativo Android (Campo)',
        desc: 'Aplicativo preparado para uso 100% offline, entregando total autonomia para o inspetor realizar as vistorias sem depender de internet nos estabelecimentos.',
      },
      {
        title: 'Coleta Visual de Evidências',
        desc: 'A câmera do celular é integrada ao fluxo, permitindo anexar fotos durante a vistoria como evidência técnica. O app ainda oferece consulta rápida ao histórico de revisões.',
      },
    ]
  },
  {
    tag: 'Pet Shop & Clínica',
    title: 'Zelpet',
    desc: 'Sistema de gestão para pet shops, dividindo a operação entre um Painel de Administrador e um inovador Portal para o Tutor agendar e acompanhar serviços.',
    gradient: 'from-[#D97706] to-[#451A03]',
    icon: '🐾',
    image: petImg,
    overview: 'O Zelpet é um sistema de gestão e acompanhamento desenhado exclusivamente para pet shops, revolucionando a experiência com duas áreas web perfeitamente integradas: o Painel Web e o Portal do Cliente.',
    stack: ['Painel Admin', 'Portal do Tutor', 'Notificações Push', 'Kanban'],
    features: [
      {
        title: 'Painel Web (Administrador)',
        desc: 'Gestão robusta de clientes, pets, serviços e precificação. Possui um programa de pontos integrado para fidelização e um quadro Kanban para monitoramento operacional em tempo real.',
      },
      {
        title: 'Portal Web (Tutor/Cliente)',
        desc: 'Ambiente onde o tutor pode realizar agendamentos de forma autônoma e rastrear as etapas do procedimento (ex: lavagem, secagem) ao vivo.',
      },
      {
        title: 'Comunicação e Push',
        desc: 'Área dedicada no painel para envio de comunicações, e o app do cliente recebe avisos automáticos via notificações push sempre que houver uma atualização no trajeto do pet.',
      },
    ]
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projetos" className="py-28 bg-b3-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[2px] uppercase text-b3-accent mb-4 before:content-[''] before:w-6 before:h-0.5 before:bg-b3-accent before:rounded-sm">
              Projetos recentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-b3-text leading-tight mb-5">
              Exemplos de{' '}
              <span className="bg-gradient-to-r from-b3-accent to-b3-secondary-blue bg-clip-text text-transparent">
                soluções
              </span>{' '}
              que entregamos
            </h2>
            <p className="text-base text-b3-text-secondary leading-relaxed">
              Cada projeto é desenvolvido com foco em resolver problemas reais de negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <div
                key={p.title}
                onClick={() => setSelectedProject(p)}
                className="bg-b3-surface border border-white/8 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] group"
              >
                <div className={`h-52 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={`Preview do ${p.title}`}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-5xl opacity-30">{p.icon}</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-b3-surface via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 relative z-10 flex flex-col items-start gap-4 h-[calc(100%-13rem)]">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-b3-accent mb-2.5 block">
                      {p.tag}
                    </span>
                    <h4 className="text-lg font-bold text-b3-text mb-2">{p.title}</h4>
                    <p className="text-sm text-b3-text-secondary leading-relaxed">{p.desc}</p>
                  </div>
                  <button className="mt-auto flex items-center gap-2 text-[13px] font-semibold text-b3-accent transition-colors hover:text-white">
                    VER DETALHES
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 p-safe">
          <div 
            className="absolute inset-0 bg-[#07111F]/80 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative w-full max-w-4xl bg-[#091629] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0B1B32]">
              <h3 className="text-xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 text-white/50 hover:text-white transition-colors hover:bg-white/5 rounded-full"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto custom-scrollbar flex-1 pb-10">
              {/* Featured Image */}
              <div className="w-full h-56 sm:h-72 md:h-96 relative bg-[#07111F]">
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt="Visão Geral" className="w-full h-full object-cover object-top" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center`}>
                    <span className="text-8xl opacity-30">{selectedProject.icon}</span>
                  </div>
                )}
                {/* Gradient fade to body */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#091629] to-transparent pointer-events-none" />
              </div>

              {/* Main Info */}
              <div className="px-6 md:px-10 -mt-8 relative z-10 flex flex-col md:flex-row gap-10">
                <div className="flex-1 space-y-8">
                  <div className="pt-8">
                    <span className="inline-block px-3 py-1 mb-4 rounded-full bg-b3-accent/10 border border-b3-accent/20 text-b3-accent text-xs font-bold uppercase tracking-widest">
                      {selectedProject.tag}
                    </span>
                    <p className="text-b3-text-secondary text-[15px] leading-relaxed">
                      {selectedProject.overview || selectedProject.desc}
                    </p>
                  </div>

                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1bc29d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        Módulos Principais
                      </h4>
                      <div className="space-y-4">
                        {selectedProject.features.map(feat => (
                          <div key={feat.title} className="bg-white/5 border border-white/[0.04] p-4 rounded-xl">
                            <h5 className="font-semibold text-white text-[14px] mb-1">{feat.title}</h5>
                            <p className="text-[13px] text-white/60 leading-relaxed">{feat.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar Details */}
                <div className="w-full md:w-72 flex-shrink-0 pt-8 flex flex-col gap-6">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-b3-primary-blue to-[#1B9CC2] text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-[0_12px_24px_rgba(27,156,194,0.3)]"
                    >
                      Acessar Ao Vivo
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  )}

                  {selectedProject.stack && selectedProject.stack.length > 0 && (
                    <div className="bg-[#0B1B32] p-5 rounded-xl border border-white/5">
                      <h4 className="text-[13px] font-bold text-white/80 uppercase tracking-widest mb-4">Stack Técnico</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map(tech => (
                          <span key={tech} className="px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[12px] text-white/70 font-medium tracking-wide">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}
