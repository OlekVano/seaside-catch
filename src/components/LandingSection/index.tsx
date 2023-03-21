import { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Birds from '../Birds'
import Button from '../Button'
import Waves from '../Waves'

export default function LandingSection() {
  const { content } = useContext(ContentContext)

  return (
    <div className='relative min-h-screen flex flex-col h-fit'>
      <Birds />
      <div className='overflow-x-hidden h-full w-full grid place-items-center bg-gradient-to-b from-bg-quaternary to-bg-complementary flex-1'>
        <div className='h-full z-10 max-w-7xl overflow-x-hidden'>
          <div className='h-full w-full flex p-8 max-xs:p-5 py-32'>
            <div className='flex-1 flex flex-col justify-center gap-10'>
              <div className='huge-text max-lg:text-center'>
                {content!.homepage.landingSectionTitle}
              </div>
              <div className='body-text max-lg:text-center'>
                {content!.homepage.landingSectionText}
              </div>
              <div className='w-fit mx-auto'>
                <Button text='Book A Table' />
              </div>
            </div>
            <div className='w-1/2 grid place-items-center max-lg:hidden'>
              <div className='group w-full aspect-square relative grid place-items-center cursor-pointer transition hover:scale-110'>
                <div className='absolute w-full aspect-square grid place-items-center'>
                  <div className='bg-bg-primary rounded-full w-3/4 aspect-square'></div>
                </div>
                <div className='absolute transition duration-500 group-hover:scale-110'>
                  <img src={content!.homepage.landingSectionImage2} />
                </div>
                <div className='absolute aspect-square grid place-items-center'>
                  <img className=' w-2/3' src={content!.homepage.landingSectionImage1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-0 absolute w-full'>
        <Waves />
      </div>
    </div>
  )
}
