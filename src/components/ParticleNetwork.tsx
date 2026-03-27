import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

const PARTICLE_COUNT = 90
const CONNECTION_DISTANCE = 140
const MOUSE_RADIUS = 250
const MOUSE_FORCE = 0.035

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let rafId = 0
    let mouseX = -1000
    let mouseY = -1000
    let particles: Particle[] = []

    function resize() {
      width = canvas!.parentElement?.clientWidth ?? window.innerWidth
      height = canvas!.parentElement?.clientHeight ?? window.innerHeight
      canvas!.width = width * devicePixelRatio
      canvas!.height = height * devicePixelRatio
      canvas!.style.width = width + 'px'
      canvas!.style.height = height + 'px'
      ctx!.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    function createParticles() {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.8 + 0.8,
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
    }

    function drawParticle(p: Particle) {
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx!.fillStyle = `rgba(27, 194, 157, ${p.opacity})`
      ctx!.fill()
    }

    function drawConnection(a: Particle, b: Particle, dist: number) {
      const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15
      ctx!.beginPath()
      ctx!.moveTo(a.x, a.y)
      ctx!.lineTo(b.x, b.y)
      ctx!.strokeStyle = `rgba(27, 194, 157, ${alpha})`
      ctx!.lineWidth = 0.6
      ctx!.stroke()
    }

    function drawMouseConnections(p: Particle, dist: number) {
      const alpha = (1 - dist / MOUSE_RADIUS) * 0.25
      ctx!.beginPath()
      ctx!.moveTo(p.x, p.y)
      ctx!.lineTo(mouseX, mouseY)
      ctx!.strokeStyle = `rgba(27, 194, 157, ${alpha})`
      ctx!.lineWidth = 0.8
      ctx!.stroke()
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height)

      for (const p of particles) {
        // Update position
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges with soft margin
        if (p.x < 0) { p.x = 0; p.vx *= -1 }
        if (p.x > width) { p.x = width; p.vx *= -1 }
        if (p.y < 0) { p.y = 0; p.vy *= -1 }
        if (p.y > height) { p.y = height; p.vy *= -1 }

        // Mouse interaction — gentle push
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const mouseDist = Math.sqrt(dx * dx + dy * dy)
        if (mouseDist < MOUSE_RADIUS && mouseDist > 0) {
          const force = (MOUSE_RADIUS - mouseDist) / MOUSE_RADIUS
          p.vx -= (dx / mouseDist) * force * MOUSE_FORCE
          p.vy -= (dy / mouseDist) * force * MOUSE_FORCE
        }

        // Dampen velocity
        p.vx *= 0.99
        p.vy *= 0.99

        // Draw mouse connections
        if (mouseDist < MOUSE_RADIUS) {
          drawMouseConnections(p, mouseDist)
        }

        drawParticle(p)
      }

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            drawConnection(particles[i], particles[j], dist)
          }
        }
      }

      rafId = requestAnimationFrame(animate)
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouseX = -1000
      mouseY = -1000
    }

    // Reduced motion: just show static particles, no animation
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    resize()
    createParticles()

    if (!prefersReduced) {
      rafId = requestAnimationFrame(animate)
      canvas.addEventListener('mousemove', onMouseMove)
      canvas.addEventListener('mouseleave', onMouseLeave)
      window.addEventListener('resize', () => { resize(); createParticles() })
    } else {
      // Draw once, static
      for (const p of particles) drawParticle(p)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) drawConnection(particles[i], particles[j], dist)
        }
      }
    }

    return () => {
      cancelAnimationFrame(rafId)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'auto',
      }}
      aria-hidden="true"
    />
  )
}
