import logo from '../assets/ifmeree-logo.svg'

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <img src={logo} alt="IFMEREE" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              Institut de Formation aux Métiers des Énergies Renouvelables et de l'Efficacité
              Énergétique.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-tealLight">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li>contact@ifmeree.ma</li>
              <li>+212 5XX XX XX XX</li>
              <li>Meknès, Maroc</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-tealLight">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li>
                <a href="#contexte" className="transition hover:text-tealLight">
                  Le programme
                </a>
              </li>
              <li>
                <a href="#simulation" className="transition hover:text-tealLight">
                  Simulation 360°
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-edge pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-slate sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} IFMEREE — Tous droits réservés</span>
          <span>Formation aux métiers de l'éolien</span>
        </div>
      </div>
    </footer>
  )
}
