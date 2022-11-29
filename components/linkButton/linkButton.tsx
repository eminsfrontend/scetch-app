interface LinkButtonProps {
  text: String
  type: LinkButtonType
}

export enum LinkButtonType {
  anchor,
  link,
}

export default function LinkButton({ text, type }: LinkButtonProps) {
  return (
    <span className="flex gap-x-2 font-bold text-customDark">
      {text}
      {type === LinkButtonType.anchor ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          color="#777"
          className="rotate-90"
        >
          <g
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline
              transform="translate(15.000000, 12.000000) scale(-1, 1) translate(-15.000000, -12.000000) "
              points="17 8 13 12 17 16"
            ></polyline>
            <line
              x1="6.5"
              y1="12"
              x2="15.5"
              y2="12"
              transform="translate(11.000000, 12.000000) scale(-1, 1) translate(-11.000000, -12.000000) "
            ></line>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          color="#000"
        >
          <g
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline
              transform="translate(15.000000, 12.000000) scale(-1, 1) translate(-15.000000, -12.000000) "
              points="17 8 13 12 17 16"
            ></polyline>
            <line
              x1="6.5"
              y1="12"
              x2="15.5"
              y2="12"
              transform="translate(11.000000, 12.000000) scale(-1, 1) translate(-11.000000, -12.000000) "
            ></line>
          </g>
        </svg>
      )}
    </span>
  )
}
