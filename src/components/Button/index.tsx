interface Props {
  text: string
}

export default function Button({ text }: Props) {
  return (
    <div className='h-14 max-xl:h-10'>
      <input type='button' className='shadow-md bg-text-primary text-text-secondary h-14 max-xl:h-10 px-10 w-fit rounded-full subheading-text cursor-pointer transition hover:-translate-y-1 hover:scale-110' value={text} />
    </div>
  )
}
