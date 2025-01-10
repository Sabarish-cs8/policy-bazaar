import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={37} height={37} {...props}>
    <defs>
      <clipPath id="a">
        <path
          data-name="Rectangle 44406"
          transform="translate(.5 .5)"
          fill="none"
          d="M0 0h37v37H0z"
        />
      </clipPath>
    </defs>
    <g data-name="Group 63702">
      <g
        data-name="Group 63701"
        clipPath="url(#a)"
        transform="translate(-.5 -.5)"
      >
        <path
          data-name="Path 92132"
          d="M19.805 2.225a9.282 9.282 0 0 1 9.282 9.282v4.642a9.282 9.282 0 0 1-9.282 9.282 9.282 9.282 0 0 1-9.282-9.282v-4.642a9.282 9.282 0 0 1 9.282-9.282"
          fill="#a7c9ff"
        />
        <path
          data-name="Path 92133"
          d="M30.787 15.553h-.08v-2.064a12.005 12.005 0 0 0-24.01 0v2.064h-.5a3.436 3.436 0 0 0-3.29 3.539v5.269a3.327 3.327 0 0 0 3.241 3.411h3.153a.8.8 0 0 0 .762-.836V16.561c0-.5-.295-1.011-.759-1.011H8.38v-2.061a10.32 10.32 0 0 1 20.639-.234v2.298h-.925c-.464 0-.758.5-.758 1.011v10.32a.8.8 0 0 0 .711.881h1.016l-.085.132a6.656 6.656 0 0 1-5.349 2.657 4.17 4.17 0 0 0-8.256.8 4.214 4.214 0 0 0 4.213 4.17 4.341 4.341 0 0 0 3.039-1.306 3.7 3.7 0 0 0 1.011-2.022 8.338 8.338 0 0 0 6.7-3.327l.8-1.18a2.866 2.866 0 0 0 2.947-2.786v-5.391c-.009-1.812-1.357-3.959-3.3-3.959M8.376 26.084H6.188a1.643 1.643 0 0 1-1.6-1.681v-5.312a1.746 1.746 0 0 1 1.6-1.85h2.188Zm13.016 6.951a2.485 2.485 0 0 1-1.812.8 2.569 2.569 0 0 1-2.525-2.487 2.486 2.486 0 0 1 4.97 0 2.231 2.231 0 0 1-.632 1.685Zm10.995-8.257c0 1.138-1.1 1.306-1.6 1.306h-1.77v-8.846h1.77c.925 0 1.6 1.306 1.6 2.274Z"
          fill="#253858"
        />
        <path
          data-name="Path 92134"
          d="m24.901 11.762-8.161 8.155-3.7-3.707"
          fill="none"
          stroke="#253858"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
