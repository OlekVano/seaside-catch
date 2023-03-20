import { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Button from '../Button'

export default function EventsSection() {
  const { content } = useContext(ContentContext)

  return (
    <div className='flex flex-col items-center'>
      <div className='uppercase text-huge font-black text-center'>
        {content!.homepage.eventsSectionTitle}
      </div>
      <div className='flex justify-center mt-32 flex-wrap w-full gap-y-14 gap-x-[80px]'>
        <div className='w-[600px] stained-glass rounded-3xl flex overflow-x-hidden cursor-pointer transition hover:scale-110'>
          <div className='w-5/12 h-full'>
            <img className='object-cover w-full h-full' src={content!.homepage.eventsSectionCard1Image} />
          </div>
          <div className='flex-1 p-5'>
            <div className='text-subheading text-center'>
              {content!.homepage.eventsSectionCard1Title}
            </div>
            <div className='text-small mt-5'>
            {content!.homepage.eventsSectionCard1Text}
            </div>
          </div>
        </div>
        <div className='w-[600px] stained-glass rounded-3xl flex overflow-x-hidden cursor-pointer transition hover:scale-110'>
          <div className='w-5/12 h-full'>
            <img className='object-cover w-full h-full' src={content!.homepage.eventsSectionCard2Image} />
          </div>
          <div className='flex-1 p-5'>
            <div className='text-subheading text-center'>
              {content!.homepage.eventsSectionCard2Title}
            </div>
            <div className='text-small mt-5'>
            {content!.homepage.eventsSectionCard2Text}
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-3xl text-small text-center mt-10 p-5'>
        {content!.homepage.eventsSectionText}
      </div>
      <div className='mt-10'>
        <Button text='Contact Us' />
      </div>
    </div>
  )
}
