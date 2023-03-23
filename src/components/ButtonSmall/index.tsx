import { MouseEventHandler } from "react"

interface Props {
    src: string,
    onClick: Function
}

export default function ButtonSmall({ src, onClick }: Props) {
  return (
    <div role='button' onClick={onClick as MouseEventHandler} className='h-16 w-16 max-xl:h-12 max-xs:w-12 bg-text-primary rounded-full p-2 cursor-pointer transition hover:scale-110'>
        <img className='w-full h-full' src={src} />
    </div>
  )
}
