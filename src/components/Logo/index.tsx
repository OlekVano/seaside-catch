import { useContext } from 'react'
import { ContentContext } from '../../content-context'

export default function Logo() {
  const { content } = useContext(ContentContext)
  
  return (
    <div className='flex items-center gap-5'>
      <img className='w-24 h-24 max-xl:h-20 max-xl:w-20 max-md:w-16 max-md:h-16' src={content!.footer.logo} />
      <div>
        <div className='subheading-text text-center max-md:text-[17.5px] leading-none m-0'>Seaside</div>
        <div className='heading-text text-center max-md:text-[21px] leading-none m-0 normal-case'>Catch</div>
      </div>
    </div>
  )
}
