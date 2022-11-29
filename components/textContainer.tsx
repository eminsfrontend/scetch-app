interface textContainerProps {
  children?: React.ReactNode
}

export default function textContainer({ children }: textContainerProps) {
  return (
    <div className="md:max-w-[600px] lg:max-w-[700px] flex flex-col gap-y-7">{children}</div>
  )
}
