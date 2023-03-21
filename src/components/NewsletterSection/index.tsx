import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function NewsletterSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='huge-text text-center'>
        {content!.homepage.newsletterSectionTitle}
      </div>
      <div className='flex gap-20 mt-32 items-center justify-between stained-glass py-10 px-20 rounded-3xl max-xl:flex-col'>
        <div className='flex-1'>
          <div className='heading-text text-center'>
            {content!.homepage.newsletterSectionSubtitle}
          </div>
          <div className='small-text text-center mt-10'>
            {content!.homepage.newsletterSectionText}
          </div>
        </div>
        <div className='max-w-[500px] w-full flex items-stretch overflow-x-hidden rounded-lg shadow-md'>
          <input className='text-small p-4 px-10 flex-1 outline-none border-none text-text-tertiary font-semibold drop-shadow-md' type='email' placeholder='Your Email Address' />
          <div role='button' className='text-subheading bg-bg-tertiary px-10 cursor-pointer grid place-items-center group font-bold drop-shadow-md'>
            <div className='transition group-hover:-translate-y-1'>Join</div>
          </div>
        </div>
      </div>
    </div>
  )
}
