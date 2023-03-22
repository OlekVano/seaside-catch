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
import Header from './components/Header'
import Modal from './components/Modal'
import ReservationMenu from './components/ReservationMenu'
import { sleep } from './utils'

function App() {
  const [content, setContent] = useState<Content>()
  const { getContent } = useContentful()
  const [renderModal, setRenderModal] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(fetchContent, [])

  return (
    <div className='text-text-primary'>
      {
        !content ? <LoadingScreen /> :
        <ContentContext.Provider value={{
          content: content
        }}>
          {
            renderModal ? <Modal onExit={closeModal}><ReservationMenu closeModal={closeModal} visible={modalVisible} setVisible={setModalVisible} /></Modal> : null
          }
          <Header openModal={openModal} />
          <LandingSection openModal={openModal} />
          <div className='bg-bg-primary grid place-items-center relative max-w-full'>
            <div className='absolute h-full w-full top-0 left-0'>
              <Bubbles />
            </div>
            <div className='max-w-7xl overflow-x-hidden max-xl:w-full flex flex-col py-40 gap-40 z-10'>
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
      setContent(res)
    })
  }

  function openModal() {
    setRenderModal(true)
  }

  function closeModal() {
    setModalVisible(false)
    sleep(300).then(function afterSleep() {
      setRenderModal(false)
    })
  }
}

export default App
