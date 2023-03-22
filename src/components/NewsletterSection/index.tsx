import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function NewsletterSection() {
  const { content } = useContext(ContentContext)

  return (
    <div>
      <div className='huge-text text-center'>
        {content!.homepage.newsletterSectionTitle}
      </div>
      <div className='flex gap-20 mt-32 items-center justify-between stained-glass py-10 px-20 max-md:px-10 max-xs:px-5 rounded-3xl max-xl:flex-col'>
        <div className='flex-1'>
          <div className='heading-text text-center'>
            {content!.homepage.newsletterSectionSubtitle}
          </div>
          <div className='small-text text-center mt-10'>
            {content!.homepage.newsletterSectionText}
          </div>
        </div>
        <form className='max-w-[500px] w-full h-16 overflow-x-hidden' action='https://gmail.us21.list-manage.com/subscribe/post?u=880513b52244de2835d0ab4ec&amp;id=3cc7695a2e&amp;f_id=0053a1e1f0' method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' target='_blank' noValidate>
        <div className='flex items-stretch overflow-x-hidden rounded-lg shadow-md'>
          <div className='absolute left-[-5000px]' aria-hidden='true'><input type='text' name='b_880513b52244de2835d0ab4ec_3cc7695a2e' tabIndex={-1} defaultValue='' readOnly/></div>
          <input name='EMAIL' id='mce-EMAIL' className='small-text p-4 pl-10 max-2xs:pl-4 flex-1 outline-none border-none text-text-tertiary text-ellipsis overflow-x-hidden' type='email' placeholder='Your Email Address' required />
          <div role='button' className='w-32 max-2xl:w-24 subheading-text bg-bg-tertiary grid place-items-center group'>
            {/* <div className='transition group-hover:-translate-y-1'>Join</div> */}
            <input type='submit' className='w-full h-full cursor-pointer transition group-hover:-translate-y-1' value='Join' readOnly/>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}
