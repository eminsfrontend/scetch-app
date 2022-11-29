interface ButtonProps {
  text: String
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="max-w-[240px] bg-black text-white text-base font-semibold px-4 py-3 rounded">
      {text}
    </button>
  )
}
