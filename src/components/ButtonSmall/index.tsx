import { MouseEventHandler } from "react"

interface Props {
    src: string,
    onClick: Function
}

export default function ButtonSmall({ src, onClick }: Props) {
  return (
    <div role='button' onClick={onClick as MouseEventHandler} className='h-12 w-12 bg-text-primary rounded-full p-3 cursor-pointer transition hover:scale-110'>
        <img className='w-full h-full' src={src} />
    </div>
  )
}
