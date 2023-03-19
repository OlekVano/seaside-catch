import { useContext } from 'react'
import { ContentContext } from '../../content-context'
import Logo from '../Logo'

import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

export default function Footer() {
  const { content } = useContext(ContentContext)

  return (
    <div className='bg-bg-secondary w-full grid place-items-center py-20 text-small font-semibold relative z-10'>
      <div className='max-w-7xl flex justify-between'>
        <div className=' max-w-[33.333%]'>
          <Logo />
          <div>
            {content!.footer.text}
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 max-w-[33.333%]'>
          <div className='text-subheading font-semibold pb-4'>Contact Us</div>
          <div>
            {content!.footer.phoneNumber}
          </div>
          <div>
            {content!.footer.emailAddress}
          </div>
        </div>
        <div className='flex flex-col items-center gap-2 max-w-[33.333%]'>
          <div className='text-subheading font-semibold pb-4'>Links</div>
          <a href={content!.footer.facebookLink} className='flex items-center w-full'>
            <img className='w-9 h-9 p-2 brightness-0 invert' src={facebook} />
            <div>Facebook</div>
          </a>
          <a href={content!.footer.twitterLink} className='flex items-center w-full'>
            <img className='w-9 h-9 p-2 brightness-0 invert' src={twitter} />
            <div>Twitter</div>
          </a>
          <a href={content!.footer.instagramLink} className='flex items-center w-full'>
            <img className='w-9 h-9 p-2 brightness-0 invert' src={instagram} />
            <div>Instagram</div>
          </a>
        </div>
      </div>
    </div>
  )
}
