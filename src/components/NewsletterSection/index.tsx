import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function NewsletterSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='uppercase text-huge font-black text-center'>
        {content!.homepage.newsletterSectionTitle}
      </div>
      <div className='flex gap-10 mt-32 items-center justify-between stained-glass py-10 px-20 rounded-3xl'>
        <div className='w-2/5'>
          <div className='uppercase text-heading font-bold text-center'>
            {content!.homepage.newsletterSectionSubtitle}
          </div>
          <div className='text-small font-semibold text-center mt-10'>
            {content!.homepage.newsletterSectionText}
          </div>
        </div>
        <div className='w-2/5 flex items-stretch overflow-x-hidden rounded-lg'>
          <input className='text-small p-4 px-10 flex-1 outline-none border-none text-text-tertiary' type='email' placeholder='Your Email Address' />
          <div role='button' className='text-subheading bg-bg-tertiary px-10 cursor-pointer grid place-items-center group'>
            <div className='transition group-hover:-translate-y-1'>Join</div>
          </div>
        </div>
      </div>
    </div>
  )
}
