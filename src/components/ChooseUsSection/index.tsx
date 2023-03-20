import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function ChooseUsSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='uppercase text-huge font-black text-center'>
        {content!.homepage.chooseUsSectionTitle}
      </div>
      <div className='flex gap-10 mt-32 items-center p-5'>
        <div className='w-7/12 text-body font-semibold text-center'>
          {content!.homepage.chooseUsSectionText}
        </div>
        <div className='flex-1 flex gap-10'>
          <div className='flex-1 flex flex-col gap-10'>
            <div className='flex flex-col items-center justify-around flex-1 aspect-square stained-glass rounded-3xl cursor-pointer transition hover:scale-110'>
              <img className='w-1/2 brightness-0 invert' src={content!.homepage.chooseUsSectionCard1Image} />
              <div className='text-subheading text-center'>{content!.homepage.chooseUsSectionCard1Title}</div>
            </div>
            <div className='flex flex-col items-center justify-around flex-1 aspect-square stained-glass rounded-3xl cursor-pointer transition hover:scale-110'>
              <img className='w-1/2 brightness-0 invert' src={content!.homepage.chooseUsSectionCard2Image} />
              <div className='text-subheading text-center'>{content!.homepage.chooseUsSectionCard2Title}</div>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-10'>
            <div className='flex flex-col items-center justify-around flex-1 aspect-square stained-glass rounded-3xl cursor-pointer transition hover:scale-110'>
              <img className='w-1/2 brightness-0 invert' src={content!.homepage.chooseUsSectionCard3Image} />
              <div className='text-subheading text-center'>{content!.homepage.chooseUsSectionCard3Title}</div>
            </div>
            <div className='flex flex-col items-center justify-around flex-1 aspect-square stained-glass rounded-3xl cursor-pointer transition hover:scale-110'>
              <img className='w-1/2 brightness-0 invert' src={content!.homepage.chooseUsSectionCard4Image} />
              <div className='text-subheading text-center'>{content!.homepage.chooseUsSectionCard4Title}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
