interface ParagraphProps {
  text: String
  type: ParagraphStyle
}

export enum ParagraphStyle {
  heading,
  regular,
}

export default function Paragraph({ text, type }: ParagraphProps) {
  switch (type) {
    case ParagraphStyle.heading:
      return (
        <p className="text-customDark leading-normal font-medium text-lg md:text-2xl md:leading-snug">
          {text}
        </p>
      )
    case ParagraphStyle.regular:
      return (
        <p className="text-customDark leading-normal font-medium text-base">
          {text}
        </p>
      )
  }
}
