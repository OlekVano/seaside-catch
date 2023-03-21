import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function ChooseUsSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='huge-text text-center'>
        {content!.homepage.chooseUsSectionTitle}
      </div>
      <div className='flex gap-10 mt-32 items-center p-5 max-xl:flex-col-reverse max-xl:gap-20'>
        <div className='w-7/12 body-text text-center max-xl:w-full'>
          {content!.homepage.chooseUsSectionText}
        </div>
        <div className='flex-1 flex gap-10 max-xl:w-full max-md:flex-col'>
          <div className='flex-1 flex flex-col gap-10 max-xl:flex-row'>
            <div className='flex flex-col items-center p-5 justify-between flex-1 aspect-square stained-glass rounded-3xl cursor-pointer transition hover:scale-110'>
              <img className='w-1/2 brightness-0 invert' src={content!.homepage.chooseUsSectionCard1Image} />
              <div className='subheading-text text-center font-bold'>{content!.homepage.chooseUsSectionCard1Title}</div>
            </div>
            <div className='flex flex-col items-center p-5 justify-between flex-1 aspect-square stained-glass rounded-3xl cursor-pointer transition hover:scale-110'>
              <img className='w-1/2 brightness-0 invert' src={content!.homepage.chooseUsSectionCard2Image} />
              <div className='subheading-text text-center font-bold'>{content!.homepage.chooseUsSectionCard2Title}</div>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-10 max-xl:flex-row'>
            <div className='flex flex-col items-center p-5 justify-between flex-1 aspect-square stained-glass rounded-3xl cursor-pointer transition hover:scale-110'>
              <img className='w-1/2 brightness-0 invert' src={content!.homepage.chooseUsSectionCard3Image} />
              <div className='subheading-text text-center font-bold'>{content!.homepage.chooseUsSectionCard3Title}</div>
            </div>
            <div className='flex flex-col items-center p-5 justify-between flex-1 aspect-square stained-glass rounded-3xl cursor-pointer transition hover:scale-110'>
              <img className='w-1/2 brightness-0 invert' src={content!.homepage.chooseUsSectionCard4Image} />
              <div className='subheading-text text-center font-bold'>{content!.homepage.chooseUsSectionCard4Title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
