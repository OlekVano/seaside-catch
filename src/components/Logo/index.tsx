import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function Logo() {
  const { content } = useContext(ContentContext)
  
  return (
    <div className='flex items-center gap-5'>
      <img className='w-24 h-24' src={content!.footer.logo} />
      <div>
        <div className='font-bold text-subheading leading-none m-0'>Seaside</div>
        <div className='font-bold text-heading leading-none m-0'>Catch</div>
      </div>
    </div>
  )
}