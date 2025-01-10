import * as React from "react"
import { SVGProps } from "react"

const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <style>{".B{color-interpolation-filters:sRGB}.C{flood-opacity:0}"}</style>
    <g filter="url(#A)">
      <circle cx={12} cy={10} r={10} fill="#fff" />
    </g>
    <g filter="url(#B)">
      <path
        d="m7.95 11.517-.506 1.89-1.851.039A7.24 7.24 0 0 1 4.727 10c0-1.206.293-2.343.813-3.345l1.648.302.722 1.638c-.151.44-.233.913-.233 1.405 0 .534.097 1.045.274 1.517z"
        fill="#fbbb00"
      />
    </g>
    <g filter="url(#C)">
      <path
        d="M19.144 8.642A7.28 7.28 0 0 1 19.271 10a7.31 7.31 0 0 1-.159 1.519 7.27 7.27 0 0 1-2.561 4.153l-2.076-.106-.294-1.833a4.337 4.337 0 0 0 1.865-2.213h-3.889V8.642H19.143z"
        fill="#518ef8"
      />
    </g>
    <g filter="url(#D)">
      <path
        d="M16.552 15.671A7.24 7.24 0 0 1 12 17.273a7.27 7.27 0 0 1-6.406-3.826l2.357-1.929A4.324 4.324 0 0 0 12 14.324a4.3 4.3 0 0 0 2.184-.591l2.369 1.939z"
        fill="#28b446"
      />
    </g>
    <g filter="url(#E)">
      <path
        d="m16.641 4.402-2.356 1.929a4.3 4.3 0 0 0-2.286-.654 4.326 4.326 0 0 0-4.09 2.918L5.54 6.655a7.27 7.27 0 0 1 6.459-3.928 7.24 7.24 0 0 1 4.642 1.674z"
        fill="#f14336"
      />
    </g>
    <defs>
      <filter
        id="A"
        x={-8}
        y={-10}
        width={40}
        height={40}
        filterUnits="userSpaceOnUse"
        className="B"
      >
        <feFlood className="C" />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="SourceAlpha" operator="in" result="B" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="C"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="C" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.141176 0" />
        <feBlend in2="B" />
        <feBlend in="SourceGraphic" />
      </filter>
      <filter
        id="B"
        x={-5.273}
        y={-3.345}
        width={23.223}
        height={26.791}
        filterUnits="userSpaceOnUse"
        className="B"
      >
        <feFlood className="C" />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="SourceAlpha" operator="in" />
        <feBlend in="SourceGraphic" />
      </filter>
      <filter
        id="C"
        x={2.158}
        y={-1.358}
        width={27.113}
        height={27.03}
        filterUnits="userSpaceOnUse"
        className="B"
      >
        <feFlood className="C" />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="SourceAlpha" operator="in" />
        <feBlend in="SourceGraphic" />
      </filter>
      <filter
        id="D"
        x={-4.406}
        y={1.518}
        width={30.959}
        height={25.756}
        filterUnits="userSpaceOnUse"
        className="B"
      >
        <feFlood className="C" />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="SourceAlpha" operator="in" />
        <feBlend in="SourceGraphic" />
      </filter>
      <filter
        id="E"
        x={-4.461}
        y={-7.272}
        width={31.102}
        height={25.868}
        filterUnits="userSpaceOnUse"
        className="B"
      >
        <feFlood className="C" />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="SourceAlpha" operator="in" />
        <feBlend in="SourceGraphic" />
      </filter>
    </defs>
  </svg>
)

export default GoogleIcon
