import { useEffect, useState } from 'react'
import Button from '../Button'

interface Props {
  closeModal: Function,
  visible: boolean,
  setVisible: Function
}

export default function ReservationMenu({ closeModal, visible, setVisible }: Props) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(function appear() {
    setVisible(true)
  }, [])

  return (
    <div className={`max-w-[800px] rounded-3xl bg-bg-secondary px-10 py-20 max-md: w-full max-md:h-full max-h-full overflow-y-auto max-md:rounded-none relative transition duration-300 ${visible ? 'translate-y-0' : '-translate-y-[100vh] opacity-0'}`}>
      <div className={`absolute h-full w-full top-0 left-0 bg-bg-secondary p-5 grid place-items-center text-text-primary transition overflow-y-hidden duration-500 ${submitted ? 'opacity-100 z-50 translate-y-0' : '-z-50 opacity-0 -translate-y-4'}`}>
        <div className='w-full h-full flex flex-col'>
          <div className='text-center huge-text'>Thank you!</div>
          <div className='text-center heading-text'>We will reach out to you soon!</div>
          <div className='mt-auto grid place-items-center'>
            <Button onClick={closeModal} text='Understood!' />
          </div>

        </div>

      </div>
      <div className='text-text-primary w-full'>
        <div className='text-center heading-text mb-10'>Reservation</div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col'>
            <label className='subheading-text text-center' htmlFor='name-input'>Full Name</label>
            <input className='body-text py-3 px-5 rounded-xl text-text-secondary outline-none border-none' id='name-input' required/>
          </div>
          <div className='flex flex-col'>
            <label className='subheading-text text-center' htmlFor='phone-input'>Phone Number</label>
            <input type='tel' className='body-text py-3 px-5 rounded-xl text-text-secondary outline-none border-none' id='phone-input' required/>
          </div>
          <div className='flex gap-10 max-md:flex-col'>
            <div className='flex flex-col flex-1'>
              <label className='subheading-text text-center' htmlFor='date-input'>Date</label>
              <input type='date' className='body-text w-full py-3 px-5 rounded-xl text-text-secondary outline-none border-none' id='date-input' required/>
            </div>
            <div className='flex flex-col flex-1'>
              <label className='subheading-text text-center' htmlFor='time-input'>Time</label>
              <input type='time' className='body-text w-full py-3 px-5 rounded-xl text-text-secondary outline-none border-none' id='time-input' required/>
            </div>
          </div>
          <div className='flex gap-10 max-md:flex-col'>
            <div className='flex flex-col flex-1'>
              <label className='subheading-text text-center' htmlFor='guests-input'>Guests</label>
              <select className='body-text w-full py-3 px-5 rounded-xl text-text-secondary outline-none border-none' id='guests-input' required>
                <option>1-2</option>
                <option>3-4</option>
                <option>5-8</option>
                <option>9-12</option>
                <option>12+</option>
              </select>
            </div>
            <div className='flex flex-col flex-1'>
              <label className='subheading-text text-center' htmlFor='placement-input'>Placement</label>
              <select className='body-text w-full py-3 px-5 rounded-xl text-text-secondary outline-none border-none' id='placement-input' required>
                <option>Inside</option>
                <option>Balcony</option>
                <option>Beach</option>
              </select>
            </div>
          </div>
          <div className='grid place-items-center mt-10'>
            <Button text='Submit' onClick={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  )

  // *****************************

  function onSubmit() {
    setSubmitted(true)
  }
}
