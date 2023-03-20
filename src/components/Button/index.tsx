interface Props {
  text: string
}

export default function Button({ text }: Props) {
  return (
    <div className='h-14'>
      <input type='button' className='shadow-md bg-text-primary text-text-secondary h-14 px-10 w-fit rounded-full text-subheading font-bold cursor-pointer transition hover:-translate-y-1 hover:scale-110' value={text} />
    </div>
  )
}
