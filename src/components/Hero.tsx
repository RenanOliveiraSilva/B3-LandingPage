import { useEffect, useRef } from 'react'
import ParticleNetwork from './ParticleNetwork'

/* ─────────────────────────────────────────────
   Keyframes injected once as a <style> tag
───────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  @keyframes floatA {
    0%,100% { transform: translateY(0px);   }
    50%      { transform: translateY(-8px);  }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0px);   }
    50%      { transform: translateY(-6px);  }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes pulseGlow {
    0%,100% { box-shadow: 0 0 0 0 rgba(27,194,157,0.4); }
    50%      { box-shadow: 0 0 0 8px rgba(27,194,157,0);  }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .hero-fade-1 { animation: fadeUp .65s ease both; animation-delay:.10s }
  .hero-fade-2 { animation: fadeUp .65s ease both; animation-delay:.22s }
  .hero-fade-3 { animation: fadeUp .65s ease both; animation-delay:.34s }
  .hero-fade-4 { animation: fadeUp .65s ease both; animation-delay:.46s }
  .hero-fade-5 { animation: fadeUp .65s ease both; animation-delay:.58s }

  .float-a { animation: floatA 4.2s ease-in-out infinite; }
  .float-b { animation: floatB 3.8s ease-in-out infinite; animation-delay: -1.6s; }
  .float-c { animation: floatA 5.0s ease-in-out infinite; animation-delay: -2.4s; }
  .float-d { animation: floatB 4.6s ease-in-out infinite; animation-delay: -0.8s; }

  .badge-pulse { animation: pulseGlow 2.5s ease-in-out infinite; }

  .shimmer-text {
    background: linear-gradient(
      120deg,
      #1bc29d 0%, #1bc29d 30%,
      #7ee8d0 50%,
      #1bc29d 70%, #1bc29d 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3.5s linear infinite;
  }

  .glass-card {
    background: rgba(8,22,40,0.82);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255,255,255,0.07);
  }

  .glass-card-light {
    background: rgba(15,40,68,0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(27,194,157,0.12);
  }

  .btn-primary {
    position: relative;
    overflow: hidden;
    transition: all .25s ease;
  }
  .btn-primary::before {
    content:'';
    position:absolute; inset:0;
    background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform .5s ease;
  }
  .btn-primary:hover::before { transform: translateX(100%); }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(27,194,157,0.3); }

  .btn-secondary { transition: all .25s ease; }
  .btn-secondary:hover {
    border-color: rgba(27,194,157,0.5);
    color: #1bc29d;
    background: rgba(27,194,157,0.06);
    transform: translateY(-2px);
  }

  .image-frame {
    box-shadow:
      0 32px 96px rgba(0,0,0,0.55),
      0 0 120px rgba(27,194,157,0.06),
      inset 0 1px 0 rgba(255,255,255,0.07);
  }

  .divider-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent);
  }

  .ticker-wrap { overflow: hidden; }
  .ticker-inner { display: flex; width: max-content; animation: ticker 22s linear infinite; }

  .stat-number {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
  }
`

/* ─────────────────────────────────────────────
   Floating Glass Card helpers
───────────────────────────────────────────── */
function RatingCard() {
  return (
    <div className="glass-card float-a rounded-2xl px-5 py-4" style={{ minWidth: 190 }}>
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, rgba(27,194,157,0.22), rgba(2,133,120,0.10))' }}
        >
          {/* star */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#1bc29d">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
        <div>
          <div className="flex items-baseline gap-1">
            <span className="stat-number text-[28px] text-white">4.9</span>
            <span style={{ color:'#1bc29d', fontSize:12, fontWeight:600 }}>★</span>
          </div>
          <p style={{ color:'rgba(180,200,220,0.7)', fontSize:11, lineHeight:1.4, fontWeight:500 }}>
            2.6K+ Feedbacks<br/>positivos
          </p>
        </div>
      </div>
    </div>
  )
}

function UsersCard() {
  return (
    <div className="glass-card-light float-b rounded-2xl px-5 py-4">
      <p style={{ color:'rgba(180,200,220,0.6)', fontSize:10, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:4 }}>
        Novos Clientes
      </p>
      <div className="flex items-end gap-1">
        <span className="stat-number text-[30px] text-white">80</span>
        <span className="stat-number text-[22px]" style={{ color:'#1bc29d', marginBottom:2 }}>+</span>
      </div>
      <div className="flex items-center gap-1.5 mt-1">
        <span style={{
          display:'inline-block', width:6, height:6, borderRadius:'50%',
          background:'#1bc29d', boxShadow:'0 0 6px rgba(27,194,157,0.7)'
        }} />
        <span style={{ color:'#1bc29d', fontSize:10, fontWeight:600 }}>+12% este mês</span>
      </div>
    </div>
  )
}

function AutomationCard() {
  return (
    <div className="glass-card float-c rounded-2xl px-5 py-4" style={{ maxWidth: 210 }}>
      <div className="flex items-center gap-2.5 mb-3">
        <div
          className="flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, rgba(27,194,157,0.22), rgba(2,133,120,0.10))' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1bc29d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <span style={{ color:'#e8f4f0', fontSize:13, fontWeight:600 }}>Automação</span>
      </div>
      <p style={{ color:'rgba(160,190,210,0.65)', fontSize:11, lineHeight:1.5 }}>
        Processos automatizados que reduzem custo e aumentam escala.
      </p>
    </div>
  )
}

function SupportCard() {
  return (
    <div className="glass-card float-d rounded-xl px-4 py-3">
      <div className="flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="#1bc29d">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        <span style={{ color:'white', fontSize:13, fontWeight:700 }}>24/7</span>
        <span style={{ color:'rgba(160,190,210,0.6)', fontSize:11 }}>Suporte</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Main Hero
───────────────────────────────────────────── */
export default function Hero() {
  const styleRef = useRef(false)

  useEffect(() => {
    if (styleRef.current) return
    styleRef.current = true
    const el = document.createElement('style')
    el.textContent = STYLES
    document.head.appendChild(el)
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0" style={{ background: '#07111F', zIndex: 0 }} />

      {/* Ambient right glow */}
      <div className="absolute inset-0" style={{
        zIndex: 0,
        background: 'radial-gradient(ellipse 70% 70% at 72% 45%, rgba(15,55,89,0.40) 0%, transparent 70%)',
      }} />
      {/* Accent left glow */}
      <div className="absolute inset-0" style={{
        zIndex: 0,
        background: 'radial-gradient(ellipse 45% 55% at 15% 75%, rgba(27,194,157,0.04) 0%, transparent 65%)',
      }} />

      {/* Particle network canvas */}
      <ParticleNetwork />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        zIndex: 2,
        background: 'linear-gradient(to top, #07111F, transparent)',
      }} />

      {/* ── CONTENT ── */}
      <div className="relative w-full pt-32 pb-16 lg:pt-24 lg:pb-20" style={{ zIndex: 10 }}>
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Grid — matches reference proportions */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-center">

            {/* ═══════════════════════════
                LEFT — Copy & CTAs
            ═══════════════════════════ */}
            <div className="flex flex-col justify-center">

              {/* Badge */}
              <div
                className="hero-fade-1 badge-pulse inline-flex items-center gap-2 px-5 py-2 rounded-full w-fit mb-7"
                style={{
                  background: 'rgba(27,194,157,0.08)',
                  border: '1px solid rgba(27,194,157,0.18)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#1bc29d',
                  letterSpacing: '0.02em',
                }}
              >
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#1bc29d',
                  boxShadow: '0 0 8px rgba(27,194,157,0.8)',
                  flexShrink: 0,
                }} />
                Software house com foco em resultado
              </div>

              {/* Headline */}
              <h1
                className="hero-fade-2"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 4.5vw, 54px)',
                  lineHeight: 1.07,
                  letterSpacing: '-0.025em',
                  color: '#e8f4f1',
                  marginBottom: '1.1rem',
                }}
              >
                Transformamos ideias em{' '}
                <span className="shimmer-text">soluções digitais</span>{' '}
                que geram resultado.
              </h1>

              {/* Divider */}
              <div className="hero-fade-2 divider-line mb-5" style={{ maxWidth: 420 }} />

              {/* Subtitle */}
              <p
                className="hero-fade-3"
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  color: 'rgba(170,200,215,0.72)',
                  marginBottom: '2.2rem',
                  maxWidth: 430,
                }}
              >
                Desenvolvemos landing pages, sistemas web e soluções sob medida
                para empresas que querem crescer com mais eficiência e presença
                digital.
              </p>

              {/* CTAs */}
              <div className="hero-fade-4 flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#contato"
                  className="btn-primary inline-flex items-center gap-2.5 rounded-full"
                  style={{
                    padding: '13px 28px',
                    background: 'linear-gradient(135deg, #1bc29d, #13967a)',
                    color: '#07111F',
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: '0.01em',
                    textDecoration: 'none',
                  }}
                >
                  Solicitar Proposta
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>

                <a
                  href="#servicos"
                  className="btn-secondary inline-flex items-center gap-2.5 rounded-full"
                  style={{
                    padding: '12px 28px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(220,235,240,0.85)',
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: 'none',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 26, height: 26, border: '1px solid rgba(255,255,255,0.18)' }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </span>
                  Conheça os Serviços
                </a>
              </div>

              {/* Trust logos */}
              <div className="hero-fade-5">
                <p style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(140,170,190,0.45)',
                  marginBottom: '0.8rem',
                }}>
                  Empresas que confiam
                </p>

                {/* Scrolling ticker */}
                <div className="ticker-wrap" style={{ maxWidth: 440 }}>
                  <div className="ticker-inner">
                    {['TechCorp', 'Inovadata', 'CloudBR', 'NexaGroup', 'TechCorp', 'Inovadata', 'CloudBR', 'NexaGroup'].map((name, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: 'rgba(140,170,190,0.38)',
                          letterSpacing: '0.06em',
                          marginRight: 48,
                          whiteSpace: 'nowrap',
                          fontFamily: "'Syne', sans-serif",
                        }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════════════════════════
                RIGHT — Image + Cards
            ═══════════════════════════ */}
            <div className="relative hidden lg:block">
              <div className="relative" style={{ minHeight: 560 }}>

                {/* ── Main image frame ── */}
                <div
                  className="relative w-full rounded-[28px] overflow-hidden image-frame"
                  style={{
                    height: 530,
                    background: 'linear-gradient(160deg, #112540 0%, #0B1B2E 45%, #0E3457 100%)',
                  }}
                >
                  {/* Top accent stripe */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(27,194,157,0.35), transparent)',
                  }} />

                  {/* Subtle grid texture */}
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0.025,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)',
                    backgroundSize: '52px 52px',
                  }} />

                  {/* Bottom glow behind person */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                    width: '80%', height: '52%',
                    background: 'radial-gradient(ellipse at center bottom, rgba(27,194,157,0.09) 0%, transparent 70%)',
                  }} />

                  {/* Corner accent dots */}
                  <div style={{
                    position:'absolute', top:20, right:20,
                    width:6, height:6, borderRadius:'50%',
                    background:'rgba(27,194,157,0.4)',
                    boxShadow:'0 0 10px rgba(27,194,157,0.5)',
                  }} />
                  <div style={{
                    position:'absolute', top:36, right:20,
                    width:4, height:4, borderRadius:'50%',
                    background:'rgba(27,194,157,0.2)',
                  }} />

                  {/* Person image */}
                  <div className="absolute inset-0 flex items-end justify-center">
                    <img
                      src="/woman.svg"
                      alt="Profissional de tecnologia B3 Tech Solutions"
                      className="w-auto object-contain object-bottom"
                      style={{ height: 490, maxWidth: '100%' }}
                    />
                  </div>

                  {/* Bottom fade */}
                  <div style={{
                    position:'absolute', bottom:0, left:0, right:0, height:80,
                    background:'linear-gradient(to top, rgba(10,24,42,0.92), transparent)',
                  }} />
                </div>

                {/* ── Floating Cards — positioned exactly like MoneyHub reference ── */}

                {/* TOP-LEFT: Rating (overlaps top-left corner) */}
                <div className="absolute" style={{ top: -18, left: -24, zIndex: 20 }}>
                  <RatingCard />
                </div>

                {/* TOP-RIGHT: New Users badge */}
                <div className="absolute" style={{ top: -12, right: -18, zIndex: 20 }}>
                  <UsersCard />
                </div>

                {/* BOTTOM-LEFT: Automation card */}
                <div className="absolute" style={{ bottom: 28, left: -32, zIndex: 20 }}>
                  <AutomationCard />
                </div>

                {/* BOTTOM-RIGHT: 24/7 Support */}
                <div className="absolute" style={{ bottom: 20, right: -12, zIndex: 20 }}>
                  <SupportCard />
                </div>

              </div>
            </div>

            {/* ═══════════════════════════
                MOBILE — image below copy
            ═══════════════════════════ */}
            <div className="relative flex lg:hidden items-end justify-center mt-4">
              <div
                className="relative w-full max-w-[380px] mx-auto rounded-2xl overflow-hidden"
                style={{
                  height: 380,
                  background: 'linear-gradient(160deg, #112540 0%, #0B1B2E 45%, #0E3457 100%)',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <div style={{
                  position:'absolute', top:0, left:0, right:0, height:1,
                  background:'linear-gradient(90deg,transparent,rgba(27,194,157,0.3),transparent)',
                }} />
                <div className="absolute inset-0 flex items-end justify-center">
                  <img
                    src="/woman.svg"
                    alt=""
                    style={{ height: 350, maxWidth:'100%', objectFit:'contain', objectPosition:'bottom' }}
                  />
                </div>
                <div style={{
                  position:'absolute', bottom:0, left:0, right:0, height:48,
                  background:'linear-gradient(to top,rgba(10,24,42,0.9),transparent)',
                }} />
              </div>

              {/* Mobile cards */}
              <div className="absolute -top-2 left-0 float-a" style={{ zIndex:20 }}>
                <div
                  className="glass-card flex items-center gap-2 px-3.5 py-2.5 rounded-xl"
                  style={{ fontSize:11, fontWeight:500, color:'#e8f4f1' }}
                >
                  <span className="stat-number text-[17px]" style={{ color:'#1bc29d' }}>4.9</span>
                  <span style={{ color:'rgba(160,190,210,0.65)' }}>★ 50+ Projetos</span>
                </div>
              </div>
              <div className="absolute -top-2 right-0 float-b" style={{ zIndex:20 }}>
                <div
                  className="glass-card flex items-center gap-1.5 px-3 py-2 rounded-lg"
                  style={{ fontSize:11, fontWeight:500 }}
                >
                  <span className="stat-number text-[15px]" style={{ color:'#1bc29d' }}>98%</span>
                  <span style={{ color:'rgba(160,190,210,0.65)' }}>Satisfação</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}