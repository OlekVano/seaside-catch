import { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Button from '../Button'

export default function AboutSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='huge-text text-center'>
        {content!.homepage.aboutSectionTitle}
      </div>
      <div className='px-10 py-20 stained-glass rounded-3xl flex gap-16 mt-32 items-center max-xl:flex-col-reverse'>
        <div className='body-text w-1/2 max-xl:w-full p-4 text-center'>
          {content!.homepage.aboutSectionText}
        </div>
        <div className='flex-1'>
          <img className='rounded-2xl' src={content!.homepage.aboutSectionImage} />
        </div>
      </div>
    </div>
  )
}
