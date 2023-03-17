import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function FindUsSection() {
  const { content } = useContext(ContentContext)

  return (
    <div className='flex flex-col items-center'>
      <div className='uppercase text-huge font-black text-center'>
        {content!.homepage.findUsSectionTitle}
      </div>
      <div className='flex justify-between w-2/3 mt-32'>
        <div className='bg-bg-secondary w-[30%] flex flex-col items-center py-10 rounded-3xl cursor-pointer transition hover:scale-110'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard1Image} />
          <div className='text-subheading mt-6'>
            {content!.homepage.findUsSectionCard1Title}
          </div>
          <div className='text-small'>
            {content!.homepage.findUsSectionCard1Text}
          </div>
        </div>
        <div className='bg-bg-secondary w-[30%] flex flex-col items-center py-10 rounded-3xl cursor-pointer transition hover:scale-110'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard2Image} />
          <div className='text-subheading mt-6'>
            {content!.homepage.findUsSectionCard2Title}
          </div>
          <div className='text-small'>
            {content!.homepage.findUsSectionCard2Text}
          </div>
        </div>
        <div className='bg-bg-secondary w-[30%] flex flex-col items-center py-10 rounded-3xl cursor-pointer transition hover:scale-110'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard3Image} />
          <div className='text-subheading mt-6'>
            {content!.homepage.findUsSectionCard3Title}
          </div>
          <div className='text-small'>
            {content!.homepage.findUsSectionCard3Text}
          </div>
        </div>
      </div>
    </div>
  )
}
