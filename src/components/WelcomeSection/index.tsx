import React, { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Button from '../Button'

export default function WelcomeSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='uppercase text-huge font-black text-center drop-shadow-md'>
        {content!.homepage.welcomeSectionTitle}
      </div>
      <div className='px-10 py-20 stained-glass rounded-3xl flex gap-16 mt-32'>
        <div className='w-2/5 flex flex-col items-center gap-16'>
          <div className='text-body font-semibold text-center drop-shadow-md'>
            {content!.homepage.welcomeSectionText}
          </div>
          <Button text='Explore Menu' />
        </div>
        <div className='flex-1 flex flex-wrap justify-between align-sub'>
          <img className='shadow-md object-cover h-[45%] rounded-2xl transition cursor-pointer hover:scale-110' src={content!.homepage.welcomeSectionImage1} width='40%' />
          <img className='shadow-md object-cover h-[45%] rounded-2xl transition cursor-pointer hover:scale-110' src={content!.homepage.welcomeSectionImage2} width='55%'/>
          <img className='shadow-md object-cover h-[45%] rounded-2xl transition cursor-pointer hover:scale-110' src={content!.homepage.welcomeSectionImage3} width='55%'/>
          <img className='shadow-md object-cover h-[45%] rounded-2xl transition cursor-pointer hover:scale-110' src={content!.homepage.welcomeSectionImage4} width='40%'/>
        </div>
      </div>
    </div>
  )
}
