import { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Logo from '../Logo'

import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

export default function Footer() {
  const { content } = useContext(ContentContext)

  return (
    <div className='bg-bg-secondary w-full grid place-items-center py-20 px-10 relative z-10'>
      <div className='max-w-7xl flex justify-between max-md:flex-col max-md:items-center max-md:gap-20'>
        <div className=' max-w-[33.333%] max-md:max-w-full'>
          <Logo />
          <div className='drop-shadow-md text-small font-semibold'>
            {content!.footer.text}
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 max-w-[33.333%] max-md:max-w-full'>
          <div className='text-subheading font-bold pb-4 drop-shadow-md'>Contact Us</div>
          <div className='drop-shadow-md text-small font-semibold'>
            {content!.footer.phoneNumber}
          </div>
          <div className='drop-shadow-md text-small font-semibold'>
            {content!.footer.emailAddress}
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 max-w-[33.333%] max-md:max-w-full'>
          <div className='text-subheading font-bold pb-4 drop-shadow-md'>Links</div>
          <a href={content!.footer.facebookLink} className='flex items-center w-full'>
            <img className='w-9 h-9 p-2 brightness-0 invert' src={facebook} />
            <div className='drop-shadow-md text-small font-semibold'>Facebook</div>
          </a>
          <a href={content!.footer.twitterLink} className='flex items-center w-full'>
            <img className='w-9 h-9 p-2 brightness-0 invert' src={twitter} />
            <div className='drop-shadow-md text-small font-semibold'>Twitter</div>
          </a>
          <a href={content!.footer.instagramLink} className='flex items-center w-full'>
            <img className='w-9 h-9 p-2 brightness-0 invert' src={instagram} />
            <div className='drop-shadow-md text-small font-semibold'>Instagram</div>
          </a>
        </div>
      </div>
    </div>
  )
}
