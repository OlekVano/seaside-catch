import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function NewsletterSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='uppercase text-huge font-black text-center'>
        {content!.homepage.newsletterSectionTitle}
      </div>
      <div className='flex gap-10 mt-32 items-center justify-between bg-bg-secondary py-10 px-20 rounded-3xl'>
        <div className='w-2/5'>
          <div className='uppercase text-heading font-bold text-center'>
            {content!.homepage.newsletterSectionSubtitle}
          </div>
          <div className='text-small font-semibold text-center mt-10'>
            {content!.homepage.newsletterSectionText}
          </div>
        </div>
        <div className='w-2/5 flex items-stretch overflow-x-hidden rounded-lg transition hover:scale-110'>
          <input className='text-small p-4 px-10 flex-1 outline-none border-none text-text-tertiary' type='email' placeholder='Your Email Address' />
          <input className='text-subheading bg-bg-tertiary px-10 cursor-pointer transition hover:translate-x-1' type='button' value='Join' />
        </div>
      </div>
    </div>
  )
}
