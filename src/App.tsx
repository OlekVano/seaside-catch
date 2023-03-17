import { useState } from 'react'
import LandingSection from './components/LandingSection'
import Waves from './components/Waves'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <LandingSection />
    </div>
  )
}

export default App
