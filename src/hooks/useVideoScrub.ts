import { useRef, useEffect } from 'react'

/**
 * Scroll-scrubs a video's currentTime within a container.
 * Video path must be a public URL (not an import).
 * 
 * Container must be taller than viewport (e.g. 200vh).
 * Inside it, place a sticky div with height 100vh that holds the video.
 */
export function useVideoScrub(usableRange = 0.90) {
  const containerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    // Reduced motion: autoplay slow instead of scrubbing
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      video.playbackRate = 0.4
      video.play().catch(() => {})
      return
    }

    let rafId = 0
    let targetProgress = 0
    let currentProgress = 0
    let duration = 0
    let ready = false

    const LERP = 0.08

    // Compute scroll progress
    function computeProgress(): number {
      const rect = container!.getBoundingClientRect()
      const total = container!.offsetHeight - window.innerHeight
      if (total <= 0) return 0
      const raw = -rect.top / total
      return Math.max(0, Math.min(1, raw))
    }

    function onScroll() {
      targetProgress = computeProgress()
    }

    function tick() {
      if (ready && duration > 0) {
        currentProgress += (targetProgress - currentProgress) * LERP
        const time = currentProgress * duration * usableRange
        if (Math.abs(video!.currentTime - time) > 0.02) {
          video!.currentTime = time
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    function onReady() {
      duration = video!.duration
      if (!isFinite(duration) || duration <= 0) return
      ready = true
      video!.pause()
      video!.currentTime = 0
      targetProgress = computeProgress()
      currentProgress = targetProgress
    }

    // Pause immediately to prevent autoplay
    video.pause()

    // Listen for readyState
    if (video.readyState >= 1 && isFinite(video.duration) && video.duration > 0) {
      onReady()
    } else {
      video.addEventListener('loadedmetadata', onReady, { once: true })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
      video.removeEventListener('loadedmetadata', onReady)
    }
  }, [usableRange])

  return { containerRef, videoRef }
}
