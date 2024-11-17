import { useEffect, useState } from 'react'
import WelcomeSection from './components/WelcomeSection'
import LandingSection from './components/LandingSection'
import LoadingScreen from './components/LoadingScreen'
import { ContentContext } from './content-context'
import { Content } from './types'
import useContentful from './useContentful'
import FindUsSection from './components/FIndUsSection'
import MenuSection from './components/MenuSection'
import ChooseUsSection from './components/ChooseUsSection'
import Footer from './components/Footer'
import Bubbles from './components/Bubbles'
import Header from './components/Header'
import Modal from './components/Modal'
import ReservationMenu from './components/ReservationMenu'
import { sleep } from './utils'

function App() {
  const content = {
    "homepage": {
        "landingSectionTitle": "Beachside fish A tasty dish!",
        "landingSectionText": "Fresh catch, seaside vibes, and unforgettable flavors - come savor the taste of the ocean at our beach-side eatery.",
        "landingSectionImage1": "https://images.ctfassets.net/h1s92ip70nez/4xL4nKDsnLeqfToycFgK3U/f571a170961e956225a368b765ee198d/food-576689_1280.png",
        "landingSectionImage2": "https://images.ctfassets.net/h1s92ip70nez/4m9exRjz3S3zS0vkCjk4od/e24a1ce1630994fdc75bab24dfd8c3d2/hero-banner-bg.png",
        "welcomeSectionTitle": "WELCOME TO SEASIDE CATCH",
        "welcomeSectionText": "Welcome to our beach-side restaurant where the sea air, sound of waves and savory scent of grilled fish create an unforgettable dining experience. Enjoy a romantic dinner or family outing in our warm and inviting atmosphere.",
        "welcomeSectionImage1": "https://images.ctfassets.net/h1s92ip70nez/1PAWkLLQm7NAOkwHWL7VK9/dee9e78f530b3f173e01122868c29df3/salmon-2997240_1920.jpg",
        "welcomeSectionImage2": "https://images.ctfassets.net/h1s92ip70nez/1GTifmhGwSR7EgrBh4BPxv/ff1332860ab1b68519f0debe1c387111/paella-398968_1920.jpg",
        "welcomeSectionImage3": "https://images.ctfassets.net/h1s92ip70nez/2vAU8mxkfgBmf6lR70nQgo/d7fbd71f83ae7040032b281e921e62b9/shellfish-3148452_1920.jpg",
        "welcomeSectionImage4": "https://images.ctfassets.net/h1s92ip70nez/44KYGhNB6WjcNpoUXbj6SX/433179ebff503cd168ed9459c8d1c2f7/salmon-518032_1920.jpg",
        "findUsSectionTitle": "Como nos pode encontrar",
        "findUsSectionCard1Image": "https://images.ctfassets.net/h1s92ip70nez/69VSLlvVkexLRKAjgQprV8/4fe61e78e8eb50d8d57acf0bffd8fdc8/clock.png",
        "findUsSectionCard1Title": "8 AM - 10 PM",
        "findUsSectionCard1Text": "Horário",
        "findUsSectionCard2Image": "https://images.ctfassets.net/h1s92ip70nez/5TyJBmGu2fUkyBuKTUionl/fe435ff0585b85e7364dd3352d71ed78/address-icon.svg",
        "findUsSectionCard2Title": "Costa da Caparica",
        "findUsSectionCard2Text": "Endereço",
        "findUsSectionCard3Image": "https://images.ctfassets.net/h1s92ip70nez/27RRqzlmkKRMhY7cFGud9x/3210b15d718b358a56cca2d202ea73b2/phone-icon.svg",
        "findUsSectionCard3Title": "+960 XXX XXX",
        "findUsSectionCard3Text": "Ligar Já",
        "chooseUsSectionTitle": "PORQUE ESCOLHER A NÓS",
        "chooseUsSectionText": "When selecting a restaurant, several factors come into play, such as the quality of service, the food's taste and presentation, the ambiance, and the value for money. Seaside Catch, located in Costa da Caparica, is an exceptional fine-dining establishment that checks all of these boxes.",
        "chooseUsSectionCard1Image": "https://images.ctfassets.net/h1s92ip70nez/1iJxQYK8JHNEOIera7utoh/5df1ba47202b3924d687a1e27ac47dc5/whyus-icon1.svg",
        "chooseUsSectionCard1Title": "Comida de Qualidade",
        "chooseUsSectionCard2Image": "https://images.ctfassets.net/h1s92ip70nez/59Vwwqyhe6zbIHAtxYXbsr/cf5afaa6484042a678bd39a27d2bc28c/whyus-icon2.svg",
        "chooseUsSectionCard2Title": "Sabor Tradicional",
        "chooseUsSectionCard3Image": "https://images.ctfassets.net/h1s92ip70nez/6GA5zZFUKrXnsYFLjRjTlN/d8c92fdccc9f052df4cdfc71a7aba338/whyus-icon3.svg",
        "chooseUsSectionCard3Title": "Cozinheiros Experientes",
        "chooseUsSectionCard4Image": "https://images.ctfassets.net/h1s92ip70nez/31jOVQdxJKFXzydmqAgqFh/b864c320a8915711d2088d690fb3a597/whyus-icon4.svg",
        "chooseUsSectionCard4Title": "Melhor Serviço",
        "logo": "https://images.ctfassets.net/h1s92ip70nez/65QBaEH80y9ecxTD4nkKyu/3570cf31c120eef2534d28e6b9deff66/logo.png"
    },
    "footer": {
        "text": "Fresh catch, seaside vibes, and unforgettable flavors - come savor the taste of the ocean at our beachside eatery.",
        "phoneNumber": "+960 XXX XXX",
        "emailAddress": "email@example.com",
        "facebookLink": "https://facebook.com",
        "twitterLink": "https://twitter.com",
        "instagramLink": "https://instagram.com",
        "logo": "https://images.ctfassets.net/h1s92ip70nez/65QBaEH80y9ecxTD4nkKyu/3570cf31c120eef2534d28e6b9deff66/logo.png"
    }
  }
  const [renderModal, setRenderModal] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

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
              <FindUsSection />
              <ChooseUsSection />
            </div>
          </div>
          <Footer />
        </ContentContext.Provider>
      }
    </div>
  )

  // ********************************

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
