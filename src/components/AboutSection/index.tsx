import { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Button from '../Button'

export default function AboutSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='uppercase text-huge font-black text-center'>
        {content!.homepage.aboutSectionTitle}
      </div>
      <div className='px-10 py-20 stained-glass rounded-3xl flex gap-16 mt-32 items-center'>
        <div className='font-semibold text-body w-1/2 p-4 text-center'>
          {content!.homepage.aboutSectionText}
        </div>
        <div className='flex-1'>
          <img className='rounded-3xl cursor-pointer transition hover:scale-110 hover:saturate-150' src={content!.homepage.aboutSectionImage} />
        </div>
      </div>
    </div>
  )
}
