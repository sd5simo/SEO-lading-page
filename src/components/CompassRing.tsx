interface CompassRingProps {
  className?: string
  reverse?: boolean
}

/**
 * Recurring signature motif: a yaw-compass / instrument ring, echoing the
 * orientation dial on a turbine nacelle and the 360° nature of the tour.
 */
export default function CompassRing({ className = '', reverse = false }: CompassRingProps) {
  const ticks = Array.from({ length: 36 }, (_, i) => i * 10)

  return (
    <svg
      viewBox="0 0 400 400"
      className={`${className} ${reverse ? 'animate-spin-slow-rev' : 'animate-spin-slow'}`}
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="188" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      {ticks.map((deg) => (
        <line
          key={deg}
          x1="200"
          y1="14"
          x2="200"
          y2={deg % 90 === 0 ? '32' : deg % 30 === 0 ? '26' : '20'}
          stroke="currentColor"
          strokeOpacity={deg % 90 === 0 ? 0.7 : 0.3}
          strokeWidth={deg % 90 === 0 ? 2 : 1}
          transform={`rotate(${deg} 200 200)`}
        />
      ))}
      {[0, 90, 180, 270].map((deg, i) => (
        <text
          key={deg}
          x="200"
          y="52"
          textAnchor="middle"
          fontSize="13"
          fontFamily="IBM Plex Mono, monospace"
          fill="currentColor"
          fillOpacity="0.55"
          transform={`rotate(${deg} 200 200)`}
        >
          {['000°', '090°', '180°', '270°'][i]}
        </text>
      ))}
    </svg>
  )
}
