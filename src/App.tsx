import { useEffect, useState } from 'react'
import LandingSection from './components/LandingSection'
import useContentful from './useContentful'

function App() {
  const [content, setContent] = useState()
  const { getContent } = useContentful()

  useEffect(fetchContent, [])

  return (
    <div className='App'>
      <LandingSection />
    </div>
  )

  // ********************************

  function fetchContent() {
    getContent().then(function afterFetchingContent(content) {
      console.log(content)
    })
  }
}

export default App
