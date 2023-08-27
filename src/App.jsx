import { BrowserRouter } from "react-router-dom"
import { styles } from './styles'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience/>
        <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
          <p className={styles.heroSubText}>
            Languages I know
          </p>
        </div>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App