import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"
import "./constants/scrollbar.css";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return(
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-amber-300 selection:text-amber-900">
      <div className="fixed top-0 -z-10 h-full w-full bg-slate-950">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-15%,rgba(255,0,182,0.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>

    </div>
  )
}

export default App