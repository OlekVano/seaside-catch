import React from 'react'
import Waves from '../Waves'

export default function LoadingScreen() {
  return (
    <div className='min-h-screen'>
      <div className='h-full w-full absolute grid place-items-center bg-gradient-to-b from-bg-quaternary to-bg-complementary'>
        <div className='text-text-primary text-2xl'>Loading...</div>
      </div>
    </div>
  )
}
