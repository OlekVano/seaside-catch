import { useEffect, useState } from 'react'
import Button from '../Button'
import Logo from '../Logo'
import table from '../../assets/table.png'
import ButtonSmall from '../ButtonSmall'

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
          <ButtonSmall onClick={openModal} src={table} />
        </div>
      </div>
      <div className={`absolute top-0 -z-10 w-full h-full bg-text-secondary transition duration-500 ${scrollPos && scrollPos > 100 ? 'translate-y-0' : '-translate-y-full'}`}></div>
    </div>
  )

  // ********************************

  function handleScrolling(e: Event) {
    setScrollPos(window.scrollY)
  }
}
