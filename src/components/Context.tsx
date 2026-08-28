const cards = [
  {
    label: 'Nacelle & rotor',
    title: 'Anatomie de la machine',
    text: "Explorez le multiplicateur, la génératrice et le système d'orientation exactement comme un technicien les rencontre en intervention réelle.",
  },
  {
    label: 'Sécurité',
    title: 'Réflexes de terrain',
    text: 'Repérez les points de consignation, les accès en hauteur et les zones à risque avant même la première montée sur site.',
  },
  {
    label: 'Maintenance',
    title: 'Diagnostic en conditions réelles',
    text: "Naviguez à 360° dans l'installation pour situer chaque organe et comprendre les gestes de maintenance préventive.",
  },
]

export default function Context() {
  return (
    <section id="contexte" className="relative bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Pourquoi cette simulation</p>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-mist sm:text-5xl">
            Le terrain, avant le terrain
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Avant de grimper dans une vraie nacelle, nos stagiaires s'immergent dans une
            reconstitution fidèle d'un système éolien complet. La simulation 360° sert de pont
            entre le cours théorique et l'intervention sur site.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="glass rounded-xl p-6 transition duration-300 hover:border-tealLight/40 hover:bg-panel2/40"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-tealLight">{c.label}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold uppercase text-mist">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
