import {  MouseEvent, PropsWithChildren, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  onExit?: Function
}

export default function Modal({ children, onExit=function(){} }: PropsWithChildren & Props) {
  const elRef = useRef<HTMLDivElement | null>(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(function manageModal() {
    const modalRoot = document.getElementById('modal') as HTMLElement
    modalRoot?.appendChild(elRef.current as Node)
    // Disable scrolling while modal is visible
    document.body.style.overflow = 'hidden'
    document.body.parentElement!.style.overflow = 'hidden'



    return function removeModal() {
      modalRoot?.removeChild(elRef.current as Node)
      document.body.style.overflow = ''
      document.body.parentElement!.style.overflow = ''
    }
  }, [])

  return createPortal(<div className='fixed z-40 w-full h-full grid place-items-center bg-text-secondary bg-opacity-50' onClick={onClick}>{children}</div>, elRef.current as HTMLElement)

  // ****************************

  function onClick(e: MouseEvent) {
    // If clicked outside of the modal
    if (!elRef.current?.firstChild?.firstChild?.contains(e.target as Node)) {
      onExit()
    }
  }
}