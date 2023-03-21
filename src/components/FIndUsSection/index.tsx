import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function FindUsSection() {
  const { content } = useContext(ContentContext)

  return (
    <div className='flex flex-col items-center'>
      <div className='huge-text text-center'>
        {content!.homepage.findUsSectionTitle}
      </div>
      <div className='flex justify-between w-2/3 mt-32 max-xl:w-full p-5 max-md:flex-col max-md:items-center max-md:gap-10'>
        <div className='stained-glass w-[30%] max-md:w-96 max-w-full flex flex-col items-center py-10 rounded-3xl cursor-pointer max-xs:cursor-auto max-xs:hover:scale-100 transition hover:scale-110'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard1Image} />
          <div className='subheading-text mt-6'>
            {content!.homepage.findUsSectionCard1Title}
          </div>
          <div className='small-text'>
            {content!.homepage.findUsSectionCard1Text}
          </div>
        </div>
        <a href='https://maps.google.com/?q=Costa+da+Caparica' target='_blank' className='stained-glass w-[30%] max-md:w-96 max-w-full rounded-3xl cursor-pointer max-xs:hover:scale-100 transition hover:scale-110'>
        <a href='https://maps.apple.com/maps?q=Costa+da+Caparica' target='_blank' className=' flex flex-col items-center py-10'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard2Image} />
          <div className='subheading-text mt-6'>
            {content!.homepage.findUsSectionCard2Title}
          </div>
          <div className='small-text'>
            {content!.homepage.findUsSectionCard2Text}
          </div>
        </a>
        </a>
        <a href={`tel:${content!.footer.phoneNumber}`} className='stained-glass w-[30%] max-md:w-96 max-w-full flex flex-col items-center py-10 rounded-3xl cursor-pointer max-xs:hover:scale-100 transition hover:scale-110'>
          <img className='w-1/3 brightness-0 invert' src={content!.homepage.findUsSectionCard3Image} />
          <div className='subheading-text mt-6'>
            {content!.homepage.findUsSectionCard3Title}
          </div>
          <div className='small-text'>
            {content!.homepage.findUsSectionCard3Text}
          </div>
        </a>
      </div>
    </div>
  )
}
