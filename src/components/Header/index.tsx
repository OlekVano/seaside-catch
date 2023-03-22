import React from 'react'
import Button from '../Button'
import Logo from '../Logo'

interface Props {
  openModal: Function
}

export default function Header({ openModal }: Props) {
  return (
    <div className='fixed w-full border-b-2 border-b-text-primary bg-bg-secondary z-20'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-3'>
        <Logo />
        <div className='max-xs:hidden'>
          <Button text='Reservation' onClick={openModal} />
        </div>
      </div>
    </div>
  )
}
