import logo from '../assets/ifmeree-logo.svg'
import CompassRing from './CompassRing'

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-ink blueprint-grid">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-teal/20 blur-[120px]" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <img src={logo} alt="IFMEREE" className="h-8 w-auto" />
        <a
          href="#simulation"
          className="hidden font-mono text-xs uppercase tracking-[0.2em] text-slate transition hover:text-tealLight sm:block"
        >
          Accéder au module →
        </a>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-24 pt-10 sm:pb-32 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="animate-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-edge bg-panel/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-tealLight">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Institut de formation aux métiers de l'éolien
          </p>
          <h1 className="font-display text-[52px] font-bold uppercase leading-[0.95] tracking-tight text-mist text-balance sm:text-[68px] lg:text-[76px]">
            Maîtrisez le
            <span className="block text-tealLight">système éolien</span>
            de A à Z
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-slate">
            IFMEREE forme les techniciens et ingénieurs de demain aux technologies éoliennes.
            Entrez dans notre simulation 360° d'un parc éolien pour explorer, en immersion,
            chaque composant de la nacelle au rotor.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#simulation"
              className="rounded-md bg-tealLight px-6 py-3 font-display text-base font-semibold uppercase tracking-wide text-ink transition hover:bg-mist"
            >
              Lancer la simulation
            </a>
            <a
              href="#contexte"
              className="rounded-md border border-edge px-6 py-3 font-display text-base font-semibold uppercase tracking-wide text-mist transition hover:border-tealLight hover:text-tealLight"
            >
              En savoir plus
            </a>
          </div>
        </div>

        <div className="relative hidden aspect-square items-center justify-center lg:flex">
          <CompassRing className="h-full w-full text-tealLight" />
          <div className="absolute h-24 w-24 rounded-full bg-panel2/80 shadow-[0_0_60px_rgba(79,195,184,0.25)]" />
          <span className="absolute font-mono text-xs uppercase tracking-[0.3em] text-amber">360°</span>
        </div>
      </div>
    </header>
  )
}
