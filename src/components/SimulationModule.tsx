import { useEffect, useRef, useState } from 'react'
import logo from '../assets/ifmeree-logo.svg'
import CompassRing from './CompassRing'

const TOUR_URL = 'https://app.panomio.com/public/9b34263e-5b52-4373-b762-04bd7f6d09af'
const MIN_BUFFER_MS = 1500

export default function SimulationModule() {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [bufferElapsed, setBufferElapsed] = useState(false)
  const [entered, setEntered] = useState(false)
  const [userClicked, setUserClicked] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const loadTimerRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Start the buffer timer the moment the iframe reports it has loaded,
  // so the splash never disappears before Panomio's own scene is ready.
  const handleIframeLoad = () => {
    setIframeLoaded(true)
    loadTimerRef.current = window.setTimeout(() => setBufferElapsed(true), MIN_BUFFER_MS)
  }

  useEffect(() => {
    return () => {
      if (loadTimerRef.current) window.clearTimeout(loadTimerRef.current)
    }
  }, [])

  // Once the visitor has asked to enter AND the tour is actually ready,
  // crossfade from the branded splash to the live 360° iframe.
  useEffect(() => {
    if (userClicked && iframeLoaded && bufferElapsed) {
      setEntered(true)
    }
  }, [userClicked, iframeLoaded, bufferElapsed])

  const isWaiting = userClicked && !entered

  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  return (
    <section id="simulation" className="relative bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Module central</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-mist sm:text-5xl">
              Simulation système éolien
            </h2>
          </div>
          {entered && (
            <button
              onClick={toggleFullscreen}
              className="rounded-md border border-edge px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-slate transition hover:border-tealLight hover:text-tealLight"
            >
              {isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
            </button>
          )}
        </div>

        <div
          ref={containerRef}
          className="relative aspect-video w-full overflow-hidden rounded-2xl border border-edge bg-panel shadow-[0_0_80px_rgba(43,156,147,0.12)]"
        >
          {/* Layer 2 — Panomio tour, mounted immediately, kept invisible until ready */}
          <iframe
            src={TOUR_URL}
            title="Visite virtuelle 360° du système éolien IFMEREE"
            onLoad={handleIframeLoad}
            allow="fullscreen; accelerometer; gyroscope; xr-spatial-tracking"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
            className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ${
              entered ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />

          {/* Layer 1 — IFMEREE branded splash */}
          <div
            className={`absolute inset-0 flex items-center justify-center blueprint-grid transition-opacity duration-700 ${
              entered ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
            aria-hidden={entered}
          >
            <div className="pointer-events-none absolute h-[70%] w-[70%] max-w-[420px]">
              <CompassRing className="h-full w-full text-teal/60" reverse />
            </div>

            <div className="glass relative z-10 flex w-[min(420px,88%)] flex-col items-center rounded-2xl px-8 py-10 text-center">
              <img src={logo} alt="IFMEREE" className="h-9 w-auto" />
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-tealLight">
                Simulation Système Éolien
              </p>
              <p className="mt-2 text-sm text-slate">Visite virtuelle immersive à 360°</p>

              <div className="mt-6 flex items-center gap-1.5" role="status" aria-live="polite">
                <span className="h-1.5 w-1.5 rounded-full bg-tealLight [animation-delay:-0.3s] animate-pulseDot" />
                <span className="h-1.5 w-1.5 rounded-full bg-tealLight [animation-delay:-0.15s] animate-pulseDot" />
                <span className="h-1.5 w-1.5 rounded-full bg-tealLight animate-pulseDot" />
                <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate">
                  {isWaiting ? 'Chargement du module…' : 'Module prêt à démarrer'}
                </span>
              </div>

              <button
                onClick={() => setUserClicked(true)}
                disabled={isWaiting}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-tealLight px-7 py-3 font-display text-base font-semibold uppercase tracking-wide text-ink transition hover:bg-mist disabled:cursor-wait disabled:opacity-70"
              >
                {isWaiting ? (
                  <>
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                    Ouverture…
                  </>
                ) : (
                  'Entrer dans la simulation'
                )}
              </button>

              <p className="mt-4 text-xs text-slate">Compatible ordinateur, tablette et mobile.</p>
            </div>
          </div>
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-slate">
          Propulsé par IFMEREE · Visite hébergée sur Panomio
        </p>
      </div>
    </section>
  )
}
