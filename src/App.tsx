import { useEffect, useState } from 'react'
import LandingSection from './components/LandingSection'
import LoadingScreen from './components/LoadingScreen'
import { Content } from './types'
import useContentful from './useContentful'

function App() {
  const [content, setContent] = useState<Content>()
  const { getContent } = useContentful()

  useEffect(fetchContent, [])

  return (
    <div className='App'>
      {
        !content ? <LoadingScreen /> :
        <>
          <LandingSection />
        </>

      }

    </div>
  )

  // ********************************

  function fetchContent() {
    getContent().then(function afterFetchingContent(res) {
      console.log(res)
      setContent(res)
    })
  }
}

export default App
