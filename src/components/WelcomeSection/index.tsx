import React, { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Button from '../Button'

import place from '../../assets/place.jpg'
import place2 from '../../assets/place2.jpg'
import dish from '../../assets/dish.jpg'
import dish2 from '../../assets/dish2.jpg'

export default function WelcomeSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='huge-text text-center'>
        {content!.homepage.welcomeSectionTitle}
      </div>
      <div className='px-10 py-20 max-xs:px-5 stained-glass rounded-3xl flex gap-16 mt-32 max-xl:flex-col-reverse'>
        <div className='w-2/5 max-xl:w-full flex flex-col items-center gap-16'>
          <div className='body-text text-center'>
            {content!.homepage.welcomeSectionText}
          </div>
          <Button text='Explorar Menu' />
        </div>
        <div className='flex-1 flex flex-col gap-8 max-xs:gap-4'>
          <div className='flex-1 flex gap-8 max-xs:gap-4'>
            <div className='grow-[3] basis-0 max-h-60 max-xl:max-h-[35vw]'>
              <img className='w-full h-full rounded-2xl object-cover' src={place} />
            </div>
            <div className='grow-[4] basis-0 max-h-60 max-xl:max-h-[35vw]'>
              <img className='w-full h-full rounded-2xl object-cover' src={dish}/>
            </div>
          </div>
          <div className='flex-1 flex gap-8 max-xs:gap-4'>
            <div className='grow-[4] basis-0 max-h-60 max-xl:max-h-[35vw]'>
              <img className='w-full h-full rounded-2xl object-cover' src={dish2} />
            </div>
            <div className='grow-[3] basis-0 max-h-60 max-xl:max-h-[35vw]'>
              <img className='w-full h-full rounded-2xl object-cover' src={place2}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
