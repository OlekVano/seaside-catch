import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function MenuSection() {
  const { content } = useContext(ContentContext)

  return (
    <div className='flex flex-col items-center'>
      <div className='uppercase text-huge font-black text-center'>
        {content!.menu.title}
      </div>
      <div className='flex justify-center mt-32 flex-wrap w-full gap-y-14 gap-x-[80px]'>
        <div className='w-[600px] bg-bg-secondary rounded-3xl flex p-5 gap-5'>
          <div className='w-1/3 h-full'>
            <img className='' src={content!.menu.card1Image} />
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <div className='text-subheading text-center'>
              {content!.menu.card1Title}
            </div>
            <div className='text-small'>
              {content!.menu.card1Text}
            </div>
            <div className='text-heading font-bold text-right'>
              {content!.menu.card1Price}
            </div>
          </div>
        </div>
        <div className='w-[600px] bg-bg-secondary rounded-3xl flex p-5 gap-5'>
          <div className='w-1/3 h-full'>
            <img className='' src={content!.menu.card1Image} />
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <div className='text-subheading text-center'>
              {content!.menu.card1Title}
            </div>
            <div className='text-small'>
              {content!.menu.card1Text}
            </div>
            <div className='text-heading font-bold text-right'>
              {content!.menu.card1Price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
