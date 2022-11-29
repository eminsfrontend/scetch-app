interface h1Props {
  text: String
}

export default function H1({ text }: h1Props) {
  return (
    <h1 className="text-5xl md:text-7xl font-black text-customDark leading-tight md:leading-snug">
      {text}
    </h1>
  )
}
