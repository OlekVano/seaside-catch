import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function Logo() {
  const { content } = useContext(ContentContext)
  
  return (
    <div className='flex items-center gap-5'>
      <img className='w-24 h-24 max-xl:h-20 max-xl:w-20' src={content!.footer.logo} />
      <div>
        <div className='subheading-text leading-none m-0'>Seaside</div>
        <div className='heading-text te leading-none m-0 normal-case'>Catch</div>
      </div>
    </div>
  )
}
