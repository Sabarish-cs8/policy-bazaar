import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} {...props}>
    <g data-name="Group 23396">
      <path data-name="Rectangle 10546" fill="#337ef8" d="M0 1h10v10H0z" />
      <path data-name="Rectangle 10547" fill="#337ef8" d="M14 0h9v10h-9z" />
      <path data-name="Rectangle 10548" fill="#337ef8" d="M0 14h10v10H0z" />
      <g data-name="Group 23397">
        <path
          data-name="Path 19816"
          d="M15.548 15.547h8.507v8.507h-8.507Zm-.945-.945v10.4h10.4v-10.4Z"
        />
        <path
          data-name="Path 19817"
          d="M15.074 1.945h8.507v8.507h-8.507Zm-.945 9.455h10.4V1h-10.4Z"
        />
        <path
          data-name="Path 19818"
          d="M1.945 15.547h8.507v8.507H1.945ZM1 25.002h10.4v-10.4H1Z"
        />
        <path
          data-name="Path 19819"
          d="M1.945 1.945h8.508v8.507H1.945ZM1 11.4h10.4V1H1Z"
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
