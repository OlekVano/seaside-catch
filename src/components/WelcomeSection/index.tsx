import React, { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Button from '../Button'

export default function WelcomeSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='huge-text text-center'>
        {content!.homepage.welcomeSectionTitle}
      </div>
      <div className='px-10 py-20 stained-glass rounded-3xl flex gap-16 mt-32 max-xl:flex-col-reverse'>
        <div className='w-2/5 max-xl:w-full flex flex-col items-center gap-16'>
          <div className='body-text text-center'>
            {content!.homepage.welcomeSectionText}
          </div>
          <Button text='Explore Menu' />
        </div>
        <div className='flex-1 flex flex-col gap-8'>
          <div className='flex-1 flex gap-8'>
            <div className='grow-[3] basis-0'>
              <img className='object-cover h-full rounded-2xl' src={content!.homepage.welcomeSectionImage1} />
            </div>
            <div className='grow-[4] basis-0'>
              <img className='object-cover h-full rounded-2xl' src={content!.homepage.welcomeSectionImage2}/>
            </div>
          </div>
          <div className='flex-1 flex gap-8'>
            <div className='grow-[4] basis-0'>
              <img className='object-cover h-full rounded-2xl' src={content!.homepage.welcomeSectionImage3} />
            </div>
            <div className='grow-[3] basis-0'>
              <img className='object-cover h-full rounded-2xl' src={content!.homepage.welcomeSectionImage4}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
