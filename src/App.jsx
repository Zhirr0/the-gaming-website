import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ReactLenis } from "lenis/react"
import Hero from "./components/Hero"

const App = () => {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />

        <section className="min-h-screen bg-blue-500"></section>
      </main>
    </ReactLenis>
  )
}

export default App
