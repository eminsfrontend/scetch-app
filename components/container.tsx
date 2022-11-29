interface containerProps {
  type: ContainerStyle
  children?: React.ReactNode
}

export enum ContainerStyle {
  fullScreen,
  withPaddings,
}

export default function Container({ type, children }: containerProps) {
  switch (type) {
    case ContainerStyle.fullScreen:
      return <section>{children}</section>
    case ContainerStyle.withPaddings:
      return (
        <section className="container mx-auto max-w-6xl px-4">
          {children}
        </section>
      )
    default:
      return <section></section>
  }
}
