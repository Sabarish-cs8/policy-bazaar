import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25.813}
    height={17.324}
    {...props}
  >
    <g data-name="Home page Web opt1 v1--Copy-2-10">
      <g data-name="credit-card" transform="translate(.5 .5)">
        <rect
          width={24.541}
          height={6.573}
          rx={0.973}
          transform="translate(.009 9.795)"
          fill="#deebff"
        />
        <path fill="#deebff" d="M.009 2.566H24.55v1.972H.009z" />
        <rect
          width={24.813}
          height={16.324}
          rx={3}
          fill="none"
          stroke="#253858"
        />
        <path
          fill="none"
          stroke="#253858"
          strokeLinecap="round"
          d="M.009 4.537h24.804"
        />
        <path
          fill="none"
          stroke="#0065ff"
          strokeLinecap="round"
          d="M2.435 11.829h10.298"
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
