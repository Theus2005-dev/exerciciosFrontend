import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/header/Header'
import Section from './componentes/section/Section'
import Footer from './componentes/footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Header />
    </header>
    <main>
      <Section />
    </main>
    <footer>
      <Footer />
    </footer>
      
    </>
  )
}

export default App
