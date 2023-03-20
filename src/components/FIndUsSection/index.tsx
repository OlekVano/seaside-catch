import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function FindUsSection() {
  const { content } = useContext(ContentContext)

  return (
    <div className='flex flex-col items-center'>
      <div className='uppercase text-huge font-black text-center drop-shadow-md'>
        {content!.homepage.findUsSectionTitle}
      </div>
      <div className='flex justify-between w-2/3 mt-32'>
        <div className='stained-glass w-[30%] flex flex-col items-center py-10 rounded-3xl cursor-pointer transition hover:scale-110'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard1Image} />
          <div className='text-subheading font-bold mt-6 drop-shadow-md'>
            {content!.homepage.findUsSectionCard1Title}
          </div>
          <div className='text-small font-semibold drop-shadow-md'>
            {content!.homepage.findUsSectionCard1Text}
          </div>
        </div>
        <div className='stained-glass w-[30%] flex flex-col items-center py-10 rounded-3xl cursor-pointer transition hover:scale-110'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard2Image} />
          <div className='text-subheading font-bold mt-6 drop-shadow-md'>
            {content!.homepage.findUsSectionCard2Title}
          </div>
          <div className='text-small font-semibold drop-shadow-md'>
            {content!.homepage.findUsSectionCard2Text}
          </div>
        </div>
        <div className='stained-glass w-[30%] flex flex-col items-center py-10 rounded-3xl cursor-pointer transition hover:scale-110'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard3Image} />
          <div className='text-subheading font-bold mt-6 drop-shadow-md'>
            {content!.homepage.findUsSectionCard3Title}
          </div>
          <div className='text-small font-semibold drop-shadow-md'>
            {content!.homepage.findUsSectionCard3Text}
          </div>
        </div>
      </div>
    </div>
  )
}
