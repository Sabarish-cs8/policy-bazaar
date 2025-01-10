import * as React from "react"
import { SVGProps } from "react"

const FlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={16} {...props}>
    <path
      style={{
        fill: "#00732f",
      }}
      d="M0 0h36v16H0z"
    />
    <path
      data-name="Rectangle 4953"
      transform="translate(0 5)"
      style={{
        fill: "#fff",
      }}
      d="M0 0h36v11H0z"
    />
    <path data-name="Rectangle 4954" d="M0 11h36v5H0z" />
    <path
      style={{
        fill: "red",
      }}
      d="M0 0h10v16H0z"
    />
  </svg>
)

export default FlagIcon
