import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Management from './components/Management'
import Wines from './components/Wines'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer'

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <AboutUs />
      <Management />
      <Wines />
      <WhyUs />
      <Contact />
      <Footer />
      <BoafoWidgetInitializer />
    </div>
  )
}

export default App