import { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Button from '../Button'
import Waves from '../Waves'

export default function LandingSection() {
  const { content } = useContext(ContentContext)

  return (
    <div className='relative min-h-screen'>
      <div className='h-full w-full absolute grid place-items-center bg-gradient-to-b from-bg-quaternary to-bg-complementary'>
        <div className='h-full z-10 max-w-7xl'>
          <div className='h-full w-full flex p-14'>
            <div className='w-1/2 flex flex-col justify-center gap-10'>
              <div className='text-huge uppercase font-black'>
                {content!.homepage.landingSectionTitle}
              </div>
              <div className='text-body font-semibold'>
                {content!.homepage.landingSectionText}
              </div>
              <Button text='Book A Table' />
            </div>
            <div className='w-1/2 grid place-items-center'>
              <div className='w-full aspect-square relative grid place-items-center cursor-pointer transition hover:scale-110'>
                <div className='absolute w-full aspect-square grid place-items-center'>
                  <div className='bg-bg-primary rounded-full w-3/4 aspect-square'></div>
                </div>
                <div className='absolute'>
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