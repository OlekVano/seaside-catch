import { useEffect, useState } from 'react'
import WelcomeSection from './components/WelcomeSection'
import LandingSection from './components/LandingSection'
import LoadingScreen from './components/LoadingScreen'
import { ContentContext } from './content-context'
import { Content } from './types'
import useContentful from './useContentful'
import AboutSection from './components/AboutSection'
import FindUsSection from './components/FIndUsSection'
import MenuSection from './components/MenuSection'
import EventsSection from './components/EventsSection'
import ChooseUsSection from './components/ChooseUsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import Bubbles from './components/Bubbles'

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
          <div className='bg-bg-primary grid place-items-center relative'>
            <div className='absolute h-full w-full top-0 left-0'>
              <Bubbles />
            </div>
            <div className='max-w-7xl flex flex-col py-40 gap-40'>
              <WelcomeSection />
              <AboutSection />
              <FindUsSection />
              <MenuSection />
              <EventsSection />
              <ChooseUsSection />
              <NewsletterSection />
            </div>
          </div>
          <Footer />
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
