import { MouseEventHandler, useEffect, useState } from 'react'
import Button from '../Button'
import Logo from '../Logo'
import table from '../../assets/table.png'

interface Props {
  openModal: Function
}

export default function Header({ openModal }: Props) {
  const [scrollPos, setScrollPos] = useState<number>()

  useEffect(function onComponentMount() {
    document.addEventListener('scroll', handleScrolling)

    return function removeEventListener() {
      document.removeEventListener('scroll', handleScrolling)
    }
  }, [])

  return (
    <div className='fixed w-full z-20'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-3 px-10 max-md:py-2 max-md:px-5'>
        <Logo />
        <div className='max-xs:hidden'>
          <Button text='Reservation' onClick={openModal} />
        </div>
        <div className='hidden max-xs:block'>
          <div role='button' onClick={openModal as MouseEventHandler} className='h-16 w-16 max-xl:h-12 max-xs:w-12 bg-text-primary rounded-full p-2 cursor-pointer transition hover:scale-110'>
            <img className='w-full h-full' src={table} />
          </div>
        </div>
      </div>
      <div className={`absolute top-0 -z-10 w-full h-full bg-text-secondary transition duration-500 ${scrollPos && scrollPos > 200 ? 'translate-y-0' : '-translate-y-full'}`}></div>
    </div>
  )

  // ********************************

  function handleScrolling(e: Event) {
    setScrollPos(window.scrollY)
  }
}
