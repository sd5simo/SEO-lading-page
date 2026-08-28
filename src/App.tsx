import Hero from './components/Hero'
import Context from './components/Context'
import SimulationModule from './components/SimulationModule'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Hero />
      <Context />
      <SimulationModule />
      <Footer />
    </div>
  )
}
