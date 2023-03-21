import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function MenuSection() {
  const { content } = useContext(ContentContext)

  return (
    <div className='flex flex-col items-center'>
      <div className='huge-text text-center'>
        {content!.menu.title}
      </div>
      <div className='flex justify-center mt-32 flex-wrap w-full gap-y-14 gap-x-[80px]'>
        <div className='w-[600px] stained-glass rounded-3xl flex p-5 gap-5 cursor-pointer transition hover:scale-110'>
          <div className='w-1/3 h-full'>
            <img src={content!.menu.card1Image} />
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <div className='subheading-text text-center'>
              {content!.menu.card1Title}
            </div>
            <div className='small-text'>
              {content!.menu.card1Text}
            </div>
            <div className='heading-text text-right'>
              {content!.menu.card1Price}
            </div>
          </div>
        </div>
        <div className='w-[600px] stained-glass rounded-3xl flex p-5 gap-5 cursor-pointer transition hover:scale-110'>
          <div className='w-1/3 h-full'>
            <img src={content!.menu.card1Image} />
          </div>
          <div className='flex-1 flex flex-col gap-5'>
            <div className='subheading-text text-center'>
              {content!.menu.card2Title}
            </div>
            <div className='small-text'>
              {content!.menu.card2Text}
            </div>
            <div className='heading-text text-right'>
              {content!.menu.card2Price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
