import { useEffect, useState } from 'react'
import WelcomeSection from './components/WelcomeSection'
import LandingSection from './components/LandingSection'
import LoadingScreen from './components/LoadingScreen'
import { ContentContext } from './content-context'
import { Content } from './types'
import useContentful from './useContentful'
import AboutSection from './components/AboutSection'
import FindUsSection from './components/FIndUsSection'

function App() {
  const [content, setContent] = useState<Content>()
  const { getContent } = useContentful()

  useEffect(fetchContent, [])

  return (
    <div className='text-text-primary'>
      {
        !content ? <LoadingScreen /> :
        <ContentContext.Provider value={{
          content: content
        }}>
          <LandingSection />
          <div className='bg-bg-primary pt-40 grid place-items-center'>
            <div className='max-w-7xl flex flex-col gap-40'>
              <WelcomeSection />
              <AboutSection />
              <FindUsSection />
            </div>
          </div>
        </ContentContext.Provider>
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
