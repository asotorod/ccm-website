import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import ServiceAreas from '../components/ServiceAreas'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ServiceAreas />
      <Contact />
    </>
  )
}

export default Home