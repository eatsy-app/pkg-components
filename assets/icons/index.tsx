'use-client'

import PropTypes from 'prop-types'
import React from 'react'
import { type IconProps } from '../../stories/assets/public/Icons'
import { getGlobalStyle } from '../../helpers'

export const IconExcel: React.FC<IconProps> = ({
  size
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size ?? 800}
    height={size ?? 800}
    viewBox='0 0 32 32'
  >
    <defs>
      <linearGradient
        id='a'
        x1={4.494}
        x2={13.832}
        y1={-2092.086}
        y2={-2075.914}
        gradientTransform='translate(0 2100)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0} stopColor='#18884f' />
        <stop offset={0.5} stopColor='#117e43' />
        <stop offset={1} stopColor='#0b6631' />
      </linearGradient>
    </defs>
    <title>{'file_type_excel'}</title>
    <path
      d='M19.581 15.35 8.512 13.4v14.409A1.192 1.192 0 0 0 9.705 29h19.1A1.192 1.192 0 0 0 30 27.809V22.5Z'
      style={{
        fill: '#185c37'
      }}
    />
    <path
      d='M19.581 3H9.705a1.192 1.192 0 0 0-1.193 1.191V9.5L19.581 16l5.861 1.95L30 16V9.5Z'
      style={{
        fill: '#21a366'
      }}
    />
    <path
      d='M8.512 9.5h11.069V16H8.512Z'
      style={{
        fill: '#107c41'
      }}
    />
    <path
      d='M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2Z'
      style={{
        opacity: 0.10000000149011612,
        isolation: 'isolate'
      }}
    />
    <path
      d='M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z'
      style={{
        opacity: 0.20000000298023224,
        isolation: 'isolate'
      }}
    />
    <path
      d='M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z'
      style={{
        opacity: 0.20000000298023224,
        isolation: 'isolate'
      }}
    />
    <path
      d='M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191Z'
      style={{
        opacity: 0.20000000298023224,
        isolation: 'isolate'
      }}
    />
    <path
      d='M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.192 1.192 0 0 1 2 21.959V10.041A1.192 1.192 0 0 1 3.194 8.85Z'
      style={{
        fill: 'url(#a)'
      }}
    />
    <path
      d='m5.7 19.873 2.511-3.884-2.3-3.862h1.847L9.013 14.6c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359 3.84 2.419 3.905h-1.809l-1.45-2.711A2.355 2.355 0 0 1 9.2 16.8h-.024a1.688 1.688 0 0 1-.168.351l-1.493 2.722Z'
      style={{
        fill: '#fff'
      }}
    />
    <path
      d='M28.806 3h-9.225v6.5H30V4.191A1.192 1.192 0 0 0 28.806 3Z'
      style={{
        fill: '#33c481'
      }}
    />
    <path
      d='M19.581 16H30v6.5H19.581Z'
      style={{
        fill: '#107c41'
      }}
    />
  </svg>
)

/**
 * IconBuys component
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for the SVG
 * @param {number} props.size - Size of the SVG
 * @param {string} props.color - Color of the SVG
 * @param {Object} props... - Any other SVG attributes
 * @returns {JSX.Element} SVG icon
 */
export const IconBuys: React.FC<IconProps> = ({
  style = {},
  size,
  color = 'var(--color-icons-black)',
  ...props
}) => {
  return (
    <svg
      className="icon"
      height={size ?? 800}
      viewBox="0 0 1024 1024"
      width={size ?? 800}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ ...style, color }}
    >
      <path
        d="M687.7 833.8h-76.8c-16.6 0-30-13.4-30-30s13.4-30 30-30h76.8c16.6 0 30 13.4 30 30s-13.4 30-30 30zm-207 0H136.8c-16.6 0-30-13.4-30-30s13.4-30 30-30h343.9c16.6 0 30 13.4 30 30s-13.4 30-30 30z"
        fill={color ?? '#3C9'}
      />
      <path
        d="M880.8 931H207.9c-25.3 0-45.9-20.7-45.9-45.9 0-25.3 20.7-45.9 45.9-45.9h672.9c25.3 0 45.9 20.7 45.9 45.9S906 931 880.8 931z"
        fill={color ?? '#FFB89A'}
      />
      <path
        d="M703 122.7c20.9 0 40.6 8.2 55.5 23.2 14.9 14.9 23.2 34.7 23.2 55.5v2.8l.3 2.8 57.7 611.8c-.6 20-8.8 38.7-23.1 53.1-14.9 14.9-34.7 23.2-55.5 23.2H236c-20.9 0-40.6-8.2-55.5-23.2-14.4-14.4-22.6-33.2-23.1-53.2l54.7-612 .2-2.7v-2.7c0-20.9 8.2-40.6 23.2-55.5 14.9-14.9 34.7-23.2 55.5-23.2h412m0-59.9H291c-76.3 0-138.7 62.4-138.7 138.7l-55 615c0 76.3 62.4 138.7 138.7 138.7h525c76.3 0 138.7-62.4 138.7-138.7l-58-615c0-76.3-62.4-138.7-138.7-138.7z"
        fill={color ?? '#45484C'}
      />
      <path
        d="M712.6 228.8c0-24.9-20.1-45-45-45s-45 20.1-45 45c0 13.5 6 25.6 15.4 33.9-.3 1.6-.4 3.3-.4 5v95.9c0 23.5-9.2 45.7-26 62.5-16.8 16.8-39 26-62.5 26h-88.5c-23.5 0-45.7-9.2-62.5-26-16.8-16.8-26-39-26-62.5v-95.9c0-1.7-.1-3.4-.4-5 9.4-8.2 15.4-20.4 15.4-33.9 0-24.9-20.1-45-45-45s-45 20.1-45 45c0 13.5 6 25.6 15.4 33.9-.3 1.6-.4 3.3-.4 5v95.9c0 81.9 66.6 148.6 148.6 148.6h88.5c81.9 0 148.6-66.6 148.6-148.6v-95.9c0-1.7-.1-3.4-.4-5 9.3-8.3 15.2-20.4 15.2-33.9z"
        fill={color ?? '#45484C'}
      />
    </svg>
  )
}

IconBuys.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

/**
 * IconTime component
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for the SVG
 * @param {number} props.size - Size of the SVG
 * @param {string} props.color - Color of the SVG
 * @param {Object} props... - Any other SVG attributes
 * @returns {JSX.Element} SVG icon
 */
export const IconTime: React.FC<IconProps> = ({ style = {}, size, color, ...props }: IconProps) => {
  return (
    <svg
      fill="none"
      height={size ?? 800}
      viewBox="0 0 24 24"
      width={size ?? 800}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ ...style, color }}
    >
      <path
        clipRule="evenodd"
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75Z"
        fill={color ?? '#1C274C'}
        fillRule="evenodd"
      />
    </svg>
  )
}

IconTime.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

/**
 * iconHome component
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for the SVG
 * @param {number} props.size - Size of the SVG
 * @param {string} props.color - Color of the SVG
 * @param {Object} props... - Any other SVG attributes
 * @returns {JSX.Element} SVG icon
 */
export const IconHome: React.FC<IconProps> = ({ style = {}, size, color, ...props }: IconProps) => {
  return (
    <svg
      fill="none"
      height={size ?? 800}
      viewBox="0 0 24 24"
      width={size ?? 800}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ ...style, color }}
    >
      <path
        d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
        stroke={color ?? '#1C274C'}
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <path
        d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715"
        stroke={color ?? '#1C274C'}
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </svg>
  )
}

export const IconInfo: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      height={size}
      style={style}
      viewBox="0 0 34 34"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.333 21.999h3.333v3.333h-3.333v-3.333zm0-13.334h3.333v10h-3.333v-10zm1.65-8.333C7.783.332.333 7.799.333 16.999c0 9.2 7.45 16.666 16.65 16.666C26.2 33.665 33.666 26.2 33.666 17S26.2.332 16.983.332zm.017 30c-7.367 0-13.334-5.967-13.334-13.333C3.666 9.632 9.633 3.665 17 3.665c7.366 0 13.333 5.967 13.333 13.334 0 7.366-5.967 13.333-13.333 13.333z"></path>
    </svg>
  )
}

IconInfo.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

/**
 * IconInformationProduct component
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for the SVG
 * @param {number} props.size - Size of the SVG
 * @param {string} props.color - Color of the SVG
 * @param {Object} props... - Any other SVG attributes
 * @returns {JSX.Element} SVG icon
 */

export const IconInformationProduct: React.FC<IconProps> = ({
  style = {},
  size,
  color,
  ...props
}: IconProps) => {
  return (
    <svg
      className="icon"
      height={size ?? 800}
      viewBox="0 0 1024 1024"
      width={size ?? 800}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ ...style, color }}
    >
      <path
        d="m533 1024-147.7-84.8-136.4 78.3h-11.3c-17.3 0-34.2-3.4-50.1-10.1-15.3-6.5-29.1-15.7-40.8-27.6-11.7-11.7-21-25.5-27.5-40.8-6.7-15.9-10.1-32.7-10.1-50.1V128.5c0-17.4 3.4-34.2 10.1-50.1 6.5-15.3 15.8-29.1 27.6-40.8 11.7-11.8 25.5-21 40.8-27.5C203.3 3.4 220.2 0 237.5 0h590.9c17.3 0 34.2 3.4 50.1 10.1 15.3 6.5 29.1 15.7 40.8 27.6 11.7 11.7 21 25.5 27.5 40.8 6.7 15.9 10.1 32.7 10.1 50.1V889c0 17.4-3.4 34.2-10.1 50.1-6.5 15.3-15.8 29.1-27.6 40.8-11.7 11.8-25.5 21-40.8 27.5-15.8 6.7-32.7 10.1-50 10.1h-11.3l-136.4-78.3L533 1024zm147.7-182.6 157.2 90.3c2.5-.6 5-1.4 7.5-2.4 5.2-2.2 9.9-5.4 13.9-9.4 4.1-4.1 7.2-8.7 9.4-14 2.3-5.3 3.4-11.1 3.4-17V128.5c0-5.9-1.1-11.7-3.4-17-2.2-5.2-5.4-9.9-9.4-13.9-4.1-4.1-8.7-7.2-13.9-9.4-5.4-2.3-11.1-3.4-17-3.4H237.5c-5.9 0-11.6 1.1-17 3.4-5.2 2.2-9.9 5.4-13.9 9.4-4.1 4.1-7.2 8.7-9.4 14-2.3 5.3-3.4 11.1-3.4 17V889c0 5.9 1.1 11.7 3.4 17 2.2 5.2 5.4 9.9 9.4 13.9 4.1 4.1 8.7 7.2 13.9 9.4 2.4 1 4.9 1.8 7.5 2.4l157.2-90.3L533 926.2l147.7-84.8z"
        fill={color ?? '#3688FF'}
      />
      <path
        d="M490.6 310.9H321c-23.4 0-42.4-19-42.4-42.4s19-42.4 42.4-42.4h169.6c23.4 0 42.4 19 42.4 42.4s-19 42.4-42.4 42.4zm211.9 176.7H321c-23.4 0-42.4-19-42.4-42.4s19-42.4 42.4-42.4h381.6c23.4 0 42.4 19 42.4 42.4-.1 23.4-19 42.4-42.5 42.4z"
        fill={color ?? '#5F6379'}
      />
    </svg>
  )
}

IconInformationProduct.propTypes = {
  color: PropTypes.any,
  size: PropTypes.number,
  style: PropTypes.object
}

/**
 * IconChart component
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for the SVG
 * @param {number} props.size - Size of the SVG
 * @param {string} props.color - Color of the SVG
 * @param {Object} props... - Any other SVG attributes
 * @returns {JSX.Element} SVG icon
 */

export const IconChart: React.FC<IconProps> = ({ style = {}, size, color, ...props }) => {
  return (
    <svg
      height={size ?? 800}
      viewBox="0 0 24 24"
      width={size ?? 800}
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
      stroke={color}
    >
      <defs>
        <style>
          {
            '.chart{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;fill-rule:evenodd}'
          }
        </style>
      </defs>
      <path className="chart" d="M12 2a10 10 0 1 0 10 10H12Z" />
      <path className="chart" d="M15 9h6.54A10.022 10.022 0 0 0 15 2.46Z" />
    </svg>
  )
}


/**
 * IconCategorie component
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for the SVG
 * @param {number} props.size - Size of the SVG
 * @param {string} props.color - Color of the SVG
 * @param {Object} props... - Any other SVG attributes
 * @returns {JSX.Element} SVG icon
 */

export const IconCategorie: React.FC<IconProps> = ({
  style = {},
  size,
  color,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size ?? 800}
      viewBox="0 0 24 24"
      width={size ?? 800}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ ...style, color }}
    >
      <path
        d="M4 7.657c0-.818 0-1.226.152-1.594.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02C7.431 3 7.84 3 8.657 3h6.686c.818 0 1.226 0 1.594.152.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235.152.368.152.776.152 1.594V17c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586C4 19.828 4 18.886 4 17V7.657Z"
        stroke={color ?? '#33363F'}
        strokeWidth={2}
      />
      <path
        d="M4 7h16M9 11a3 3 0 0 0 6 0"
        stroke={color ?? '#33363F'}
        strokeLinecap="round"
        strokeWidth={2}
      />
    </svg>
  )
}

IconCategorie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

/**
 * IconStore component
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for the SVG
 * @param {number} props.size - Size of the SVG
 * @param {string} props.color - Color of the SVG
 * @param {Object} props... - Any other SVG attributes
 * @returns {JSX.Element} SVG icon
 */

export const IconStore: React.FC<IconProps> = ({ style = {}, size, color, ...props }) => {
  return (
    <svg
      fill="none"
      height={size ?? 800}
      stroke={color}
      strokeWidth={3}
      viewBox="0 0 64 64"
      width={size ?? 800}
    >
      <path d="M52 27.18v25.58a2.92 2.92 0 0 1-3 2.84H15a2.92 2.92 0 0 1-3-2.84V27.17" />
      <path d="M26.26 55.52V38.45h11.58v17.07M8.44 19.18s-1.1 7.76 6.45 8.94a7.17 7.17 0 0 0 6.1-2A7.43 7.43 0 0 0 32 26a7.4 7.4 0 0 0 5 2.49 11.82 11.82 0 0 0 5.9-2.15 6.66 6.66 0 0 0 4.67 2.15 8 8 0 0 0 7.93-9.3L50.78 9.05a1 1 0 0 0-.94-.65H14a1 1 0 0 0-.94.66ZM8.44 19.18h47.1M21.04 19.18V8.4M32.05 19.18V8.4M43.01 19.18V8.4" />
    </svg>
  )
}

IconStore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export const IconColombia: React.FC<IconProps> = ({ style = {}, size }: IconProps) => {
  return (
    <svg
      height={size}
      id="Capa_1"
      style={style}
      version="1.1"
      viewBox="0 0 450 300"
      width={size}
      x="0px"
      y="0px"
    >
      <rect fill="#CE1126" height="300" width="450" />
      <rect fill="#003893" height="225" width="450" />
      <rect fill="#FCD116" height="150" width="450" />
    </svg>
  )
}


export const IconCircleNumber: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      data-name="Capa 1"
      width={size}
      height={size}

      viewBox="0 0 55.98 57.38"
    >
      <defs>
        <style>{".cls-1{fill:#f6110c}"}</style>
      </defs>
      <circle cx={35.24} cy={36.64} r={20.74} className="cls-1" />
      <path
        d="M31.61 12.42V2.49a2.5 2.5 0 1 0-5 0v9.91a2.5 2.5 0 1 0 5 0ZM13.97 20.49 2.5 19.34a2.51 2.51 0 0 0-2.5 2.5 2.57 2.57 0 0 0 2.5 2.5l11.47 1.15a2.51 2.51 0 0 0 2.5-2.5 2.57 2.57 0 0 0-2.5-2.5ZM20.94 14.07a44.2 44.2 0 0 0-9.56-6.53 2.5 2.5 0 1 0-2.52 4.31 41.73 41.73 0 0 1 4.66 2.73c.36.24.71.49 1.06.74l.52.38.32.24c.26.2 0 0-.12-.09.69.6 1.42 1.15 2.1 1.76a2.503 2.503 0 0 0 3.54-3.54Z"
        className="cls-1"
      />
      <text
        style={{
          fontSize: "18.78px",
          fill: "#fff",
          fontFamily: "MicrosoftYaHei,Microsoft YaHei",
        }}
        transform="translate(30.37 43.26)"
      >
        {"1"}
      </text>
    </svg>

  )
}
IconColombia.propTypes = {
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconArrowRight: React.FC<IconProps> = ({
  style = {},
  size,
  color,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={color}
        width={size}
        height={size}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 7 5 5-5 5"
      />
    </svg>
  )
}

IconArrowRight.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}
/**
 * IconTicket component
 * @param {Object} props - Component props
 * @param {Object} props.style - Inline styles for the SVG
 * @param {number} props.size - Size of the SVG
 * @param {string} props.color - Color of the SVG
 * @param {Object} props... - Any other SVG attributes
 * @returns {JSX.Element} SVG icon
 */

export const IconTicket: React.FC<IconProps> = ({
  style = {},
  size,
  color,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      height={size ?? 800}
      width={size ?? 800}
      viewBox="0 0 20 20"
      style={{
        ...style,
        color
      }}
      {...props}
    >
      <path fill={color ?? 'var(--color-icons-black)'} d="m10.5 19.3-2.6-1.6-2.4 1.4h-.1c-.3 0-.6-.1-.9-.2-.3-.1-.5-.3-.7-.5-.2-.2-.4-.5-.5-.8s-.2-.6-.2-.9V2.6c0-.3.1-.6.2-.9.1-.3.3-.5.5-.8.2-.1.4-.3.7-.4s.6-.2.9-.2h10.3c.3 0 .6.1.9.2s.5.3.7.5.4.5.5.8.2.6.2.9v14.1c0 .3-.1.6-.2.9s-.3.5-.5.8c-.2.2-.4.4-.7.5-.3.1-.6.2-.9.2h-.2l-2.4-1.4-2.6 1.5zm2.9-2.9 3 1.8h.1c.1 0 .2-.1.3-.2.1-.1.1-.2.2-.3 0-.1.1-.2.1-.3V2.5c0-.1 0-.2-.1-.3 0-.1-.1-.2-.2-.3-.1-.1-.2-.1-.3-.2-.1 0-.2-.1-.3-.1H4.9c-.1 0-.2 0-.3.1-.1 0-.2.1-.3.2-.1.1-.1.2-.2.3 0 .1-.1.2-.1.3v14.9c0 .1 0 .2.1.3 0 .1.1.2.2.3.1.1.2.1.3.2h.1l3-1.8 2.8 1.7 2.9-1.7z" />
      <path fill={color ?? 'var(--color-icons-black)'} d="M9.6 6.1H6.3c-.5 0-.8-.3-.8-.6s.4-.6.8-.6h3.3c.5 0 .8.3.8.6s-.4.6-.8.6zm4.1 3.3H6.3c-.5 0-.8-.3-.8-.6s.4-.6.8-.6h7.5c.5 0 .8.3.8.6s-.4.6-.9.6z" />
    </svg>
  )
}

IconTicket.propTypes = {
  color: PropTypes.any,
  size: PropTypes.number,
  style: PropTypes.object
}

export const IconDost: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
  )
}

IconDost.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const Google: React.FC<IconProps> = ({ size, ...props }: IconProps) => {
  return (
    <svg
      height={`${size}px`}
      viewBox="0 0 300 100"
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#EA4335"
      />
      <path
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#FBBC05"
      />
      <path
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
        fill="#4285F4"
      />
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
      <path
        d="m262.02 54.48 7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98 19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
        fill="#EA4335"
      />
      <path
        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
        fill="#4285F4"
      />
    </svg>
  )
}

Google.propTypes = {
  size: PropTypes.any
}

export const IconLogout: React.FC<IconProps> = ({ size, color }: IconProps) => {
  return (
    <svg
      height={size}
      version="1.1"
      viewBox="0 0 512 512"
      width={size}
      x="0px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      y="0px"
    >
      <g>
        <g>
          <path
            d="M255.15,468.625H63.787c-11.737,0-21.262-9.526-21.262-21.262V64.638c0-11.737,9.526-21.262,21.262-21.262H255.15 c11.758,0,21.262-9.504,21.262-21.262S266.908,0.85,255.15,0.85H63.787C28.619,0.85,0,29.47,0,64.638v382.724 c0,35.168,28.619,63.787,63.787,63.787H255.15c11.758,0,21.262-9.504,21.262-21.262 C276.412,478.129,266.908,468.625,255.15,468.625z"
            fill={color}
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M505.664,240.861L376.388,113.286c-8.335-8.25-21.815-8.143-30.065,0.213s-8.165,21.815,0.213,30.065l92.385,91.173H191.362c-11.758,0-21.262,9.504-21.262,21.262c0,11.758,9.504,21.263,21.262,21.263h247.559l-92.385,91.173c-8.377,8.25-8.441,21.709-0.213,30.065c4.167,4.21,9.653,6.336,15.139,6.336c5.401,0,10.801-2.041,14.926-6.124l129.276-127.575c4.04-3.997,6.336-9.441,6.336-15.139C512,250.302,509.725,244.88,505.664,240.861z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  )
}

IconLogout.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any
}

export const IconMessageMain: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      height={size}
      style={style}
      viewBox="0 0 28 28"
      width={size}
    >
      <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
    </svg>
  )
}

IconMessageMain.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconNotification: React.FC<IconProps> = ({
  size,
  style = {},
  color = 'var(--color-icons-primary)',
  ...props
}: IconProps) => {
  return (
    <svg
      fill="none"
      height={size ?? 800}
      style={style}
      viewBox="0 0 24 24"
      width={size ?? 800}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 19.25a3 3 0 0 1-6 0M5.581 18.25a2 2 0 0 1-1.57-2.2l1-8.11a7 7 0 0 1 7-5.94v0a7 7 0 0 1 7 5.94l1 8.11a2 2 0 0 1-1.56 2.2 28.132 28.132 0 0 1-12.87 0v0Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  )
}

IconNotification.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconWallet: React.FC<IconProps> = ({ style = {}, color, size }: IconProps) => {
  return (
    <svg height={size} style={style} viewBox="0 0 54.01 39.97" width={size}>
      <path
        d="M17.38,22.99c0,1.54-0.46,2.7-1.39,3.49s-2.15,1.18-3.65,1.18h-0.02l-0.33,2.61 c-1.09-0.04-1.64-0.1-1.64-0.16l0.31-2.57c-1.09-0.13-2.01-0.29-2.74-0.46L7.47,27l0.29-2.3c1.17,0.16,2.24,0.27,3.23,0.33 l0.49-3.85c-1.52-0.46-2.6-1.01-3.23-1.66c-0.63-0.65-0.95-1.53-0.95-2.66c0-1.46,0.44-2.55,1.33-3.26 c0.89-0.72,2.1-1.07,3.65-1.07h0.29l0.4-3.05h1.64l-0.4,3.19c0.91,0.09,1.76,0.21,2.52,0.35l0.38,0.09l-0.24,2.35 c-1.08-0.12-2.07-0.21-2.99-0.27l-0.44,3.56c1.53,0.49,2.58,1.02,3.13,1.6C17.1,20.93,17.38,21.81,17.38,22.99z M10.23,16.67 c0,0.35,0.11,0.64,0.33,0.86c0.22,0.22,0.65,0.45,1.28,0.69l0.38-3.08C10.9,15.2,10.23,15.71,10.23,16.67z M14.44,23.19 c0-0.35-0.1-0.64-0.3-0.87c-0.2-0.23-0.56-0.45-1.07-0.65l-0.42,3.39C13.84,24.92,14.44,24.3,14.44,23.19z"
        fill={color}
      />
      <path
        d="M38.53,20.14c0,1.77,1.44,3.22,3.22,3.22c1.77,0,3.22-1.44,3.22-3.22c0-1.77-1.44-3.22-3.22-3.22 C39.98,16.92,38.53,18.36,38.53,20.14z M41.75,18.48c0.91,0,1.66,0.74,1.66,1.66c0,0.91-0.74,1.66-1.66,1.66s-1.66-0.74-1.66-1.66 C40.09,19.22,40.84,18.48,41.75,18.48z"
        fill={color}
      />
      <path
        d="M54.01,13.79h-1.84V6.27v-1.1C52.17,2.32,49.85,0,47,0H5.17C2.32,0,0,2.32,0,5.17v1.1v27.89v0.63 c0,2.85,2.32,5.17,5.17,5.17H47c2.85,0,5.17-2.32,5.17-5.17v-0.63v-8.22h1.84V13.79z M1.54,5.17c0-2,1.63-3.64,3.63-3.64H47 c2,0,3.64,1.63,3.64,3.64v1.1H1.54V5.17z M50.63,34.79c0,2-1.63,3.64-3.64,3.64H5.17c-2,0-3.63-1.63-3.63-3.64v-0.63h49.1V34.79z  M50.63,32.63H1.54V7.81h49.1v5.97h-9.39c-3.35,0-6.08,2.73-6.08,6.08s2.73,6.08,6.08,6.08h9.39V32.63z M50.63,15.34v9.04h-9.39 c-2.49,0-4.52-2.03-4.52-4.52s2.03-4.52,4.52-4.52H50.63z M52.46,24.39h-0.29v-9.04h0.29V24.39z"
        fill={color}
      />
    </svg>
  )
}

IconWallet.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconUser: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12.5C9 12.5 6.5 10 6.5 7S9 1.5 12 1.5 17.5 4 17.5 7 15 12.5 12 12.5zM12 3C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM17 15.5c1.4 0 2.5 1.1 2.5 2.5v2.5h-15V18c0-1.4 1.1-2.5 2.5-2.5h10m0-1.5H7c-2.2 0-4 1.8-4 4v4h18v-4c0-2.2-1.8-4-4-4z"></path>
    </svg>
  )
}

IconUser.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconHorario: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      height={size}
      style={style}
      viewBox="0 0 23 23"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.5"
        cy="11.5"
        fill="none"
        r="10.5"
        stroke={color ?? '#5e5f5f'}
        strokeMiterlimit="10"
        strokeWidth="2px"
      />
      <polyline
        fill={color ?? '#5e5f5f'}
        points="11 7 11 12.57 15.69 12.57"
        stroke={color ?? '#5e5f5f'}
        strokeMiterlimit="10"
      />
    </svg>
  )
}

IconHorario.propTypes = {
  color: PropTypes.string,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconBoxes: React.FC<IconProps> = ({
  style = {},
  size,
  color,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <path fill={color} d="M16 8h14v2H16zM16 22h14v2H16zM10 14H4a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2ZM4 6v6h6.001L10 6ZM10 28H4a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2Zm-6-8v6h6.001L10 20Z" />
    <path
      d="M0 0h32v32H0z"
      data-name="&lt;Transparent Rectangle&gt;"
      style={{
        fill: 'none'
      }}
    />
  </svg>
)

export const IconLogo: React.FC<IconProps> = ({ style = {}, color, size, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Capa_1"
      x={0}
      width={size}
      height={size}
      y={0}
      viewBox="0 0 4726.59 1931.29"
      {...props}
    >
      <style>
        {'.st0{fill:red;stroke:red;stroke-width:20;stroke-miterlimit:10}'}
      </style>
      <path
        d="M1369.43 169.21c13.91 12.37 21.6 36.66 23.15 72.93s-4.6 69.83-18.51 100.67c-13.87 30.91-32.42 44.79-55.57 41.69-191.35-18.55-382.74-17.72-574.09 2.3-3.09 0-40.15 154.33-111.09 462.96 248.46-33.93 391.97-49.34 430.57-46.29 38.52 7.77 27.78 66.39-32.42 175.93-9.27 15.46-22.39 23.15-39.36 23.15-83.35 4.64-216.08 10.82-398.16 18.55-21.64 97.22-32.42 148.94-32.42 155.08-1.55 3.09-7.33 27.03-17.36 71.74-10.03 44.79-20.05 91.08-30.08 138.91-10.07 47.84-19.3 95.32-27.78 142.36-8.48 47.08-12.72 77.56-12.72 91.43 0 7.73 1.15 15.06 3.45 22 2.34 6.94 4.64 12.37 6.98 16.21 2.3 3.84 5.79 10.03 10.42 18.51 4.6 8.48 8.44 15.06 11.57 19.66 6.14 9.27 6.14 17.8 0 25.48-6.22 7.73-13.91 10.82-23.19 9.27-77.17-15.42-133.48-61.35-168.96-137.77-35.51-76.37-44.79-170.15-27.78-281.24 4.64-23.15 25.44-115.73 62.5-277.79l-83.35 2.3c-12.37 1.59-24.69-12.33-37.02-41.65-12.37-29.29-20.09-54.77-23.15-76.37 57.07-15.42 115.73-26.24 175.93-32.42 27.74-118.82 44.71-189.01 50.93-210.65 1.51-10.78 10.38-51.29 26.59-121.52 16.21-70.23 28.14-116.92 35.91-140.06-18.55 3.09-90.28 21.64-215.29 55.57-7.77 3.09-17.36 0-28.93-9.27-11.57-9.23-22-20.41-31.27-33.57-9.27-13.08-17.76-27.78-25.44-43.99-7.77-16.17-11.57-30.08-11.57-41.65s3.8-19.66 11.57-24.3c80.22-40.11 174.35-73.28 282.39-99.56 108-26.2 211.4-43.95 310.21-53.23 98.73-9.27 192.14-14.66 280.09-16.21 87.95-1.51 158.93 0 212.95 4.64 54.04 4.63 84.12 10.06 90.3 16.2zM1103.26 1245.61c1.55-40.11 8.48-78.71 20.85-115.73 63.25-197.53 180.57-354.2 351.86-469.93 15.42-9.23 31.59-18.51 48.59-27.78 16.96-9.23 35.51-13.87 55.57-13.87 23.15 0 45.5 6.18 67.14 18.51 21.6 12.37 40.86 27.78 57.86 46.29 18.51 18.51 35.47 38.6 50.93 60.2 12.33 20.05 23.15 41.65 32.42 64.8 9.23 18.51 7.69 35.51-4.64 50.93-9.27 13.91-21.64 28.58-37.06 43.99 97.22 69.44 165.11 160.51 203.71 273.15 23.15 67.93 31.63 138.12 25.48 210.65-7.77 63.29-29.33 121.91-64.84 175.93-37.02 54.02-84.1 96.47-141.21 127.3-61.71 35.51-128.85 55.57-201.38 60.2-18.51 1.51-36.66.36-54.42-3.49a397.38 397.38 0 0 1-52.08-15.02c-81.8-33.93-153.58-82.56-215.29-145.85-60.16-63.25-102.61-136.58-127.3-219.92-13.85-40.11-19.28-80.21-16.19-120.36zm571.79-201.38c-33.97-30.87-53.27-44.75-57.86-41.69-21.64 15.46-45.54 35.15-71.78 59.05-26.28 23.94-54.02 54.02-83.35 90.28-29.33 36.26-52.87 73.28-70.59 111.09-17.76 37.85-29.72 78.35-35.87 121.56-6.18 43.2 2.3 84.1 25.44 122.66 40.11 33.97 97.58 30.87 172.44-9.27 74.87-40.11 128.09-99.88 159.72-179.38 31.64-79.46 18.92-170.9-38.15-274.3zM2050.02 1245.61c1.55-40.11 8.48-78.71 20.85-115.73 63.25-197.53 180.57-354.2 351.86-469.93 15.42-9.23 31.59-18.51 48.59-27.78 16.96-9.23 35.51-13.87 55.57-13.87 23.15 0 45.5 6.18 67.14 18.51 21.6 12.37 40.86 27.78 57.86 46.29 18.51 18.51 35.47 38.6 50.93 60.2 12.33 20.05 23.15 41.65 32.42 64.8 9.23 18.51 7.69 35.51-4.64 50.93-9.27 13.91-21.64 28.58-37.06 43.99 97.22 69.44 165.11 160.51 203.71 273.15 23.15 67.93 31.63 138.12 25.48 210.65-7.77 63.29-29.33 121.91-64.84 175.93-37.02 54.02-84.1 96.47-141.21 127.3-61.71 35.51-128.85 55.57-201.38 60.2-18.51 1.51-36.66.36-54.42-3.49a397.38 397.38 0 0 1-52.08-15.02c-81.8-33.93-153.58-82.56-215.29-145.85-60.16-63.25-102.61-136.58-127.3-219.92-13.86-40.11-19.29-80.21-16.19-120.36zm571.78-201.38c-33.97-30.87-53.27-44.75-57.86-41.69-21.64 15.46-45.54 35.15-71.78 59.05-26.28 23.94-54.02 54.02-83.35 90.28-29.33 36.26-52.87 73.28-70.59 111.09-17.76 37.85-29.72 78.35-35.87 121.56-6.18 43.2 2.3 84.1 25.44 122.66 40.11 33.97 97.58 30.87 172.44-9.27 74.87-40.11 128.09-99.88 159.72-179.38 31.65-79.46 18.93-170.9-38.15-274.3zM2994.47 1419.24c-10.82-64.84-8.52-128.85 6.94-192.14 15.42-55.57 33.93-108.79 55.57-159.72 26.2-61.71 57.86-119.57 94.92-173.63 35.47-53.98 77.88-101.06 127.3-141.21 46.29-37.02 98.73-55.53 157.42-55.53 57.07 0 108.79 17 155.08 50.93 47.8 30.87 92.58 64.8 134.24 101.82 6.18-6.14 9.27-11.57 9.27-16.17 9.27-37.06 27.78-108.79 55.57-215.29s53.98-205.62 78.71-297.45c24.65-91.83 37.77-142.4 39.36-151.64 7.69-23.15 16.96-37.81 27.74-43.99 18.55-4.64 36.26-2.3 53.27 6.94 43.2 13.91 78.71 38.6 106.49 74.07 29.29 35.55 43.95 76.41 43.95 122.7 0 6.18-16.61 91.43-49.74 255.79-33.21 164.36-67.53 343.38-103.05 537.03-35.51 193.69-54.77 325.27-57.86 394.71-1.55 23.15-2.3 45.54-2.3 67.14 1.51 18.51 3.05 41.65 4.64 69.44 7.69 18.51 4.99 35.11-8.12 49.74-13.12 14.7-28.93 18.94-47.44 12.76-33.97 0-65.63-6.14-94.92-18.55-29.33-10.78-55.17-27.35-77.52-49.74-22.39-22.35-39.75-48.23-52.12-77.56-13.87-29.29-21.6-60.2-23.15-92.58v-48.63c0-15.42.79-33.93 2.34-55.57-12.37 9.27-22.39 20.09-30.12 32.42-9.23 17-15.42 27.78-18.51 32.42-10.82 20.05-26.99 46.29-48.59 78.71-21.64 32.38-45.54 63.29-71.78 92.58-24.69 29.33-52.47 56.36-83.35 81.01-23.15 20.09-50.93 30.91-83.31 32.42-18.55 1.55-36.3-1.51-53.27-9.27-30.87-10.78-60.16-26.2-87.95-46.29-27.78-20.01-52.47-43.16-74.07-69.44-21.64-26.24-39.36-54.02-53.23-83.35-15.44-30.83-26.26-62.5-32.41-94.88zm310.17 37.02c80.26-66.35 150.49-141.97 210.65-226.86 61.71-86.4 118.07-175.14 169-266.22-18.51-7.69-37.02-11.57-55.57-11.57-33.97 1.59-62.5 13.91-85.65 37.06-21.6 21.64-42.45 43.99-62.5 67.14-40.15 55.53-77.17 113.07-111.09 172.44-33.97 59.41-57.11 123.1-69.44 190.99l-2.34 16.17c-1.54 7.77.76 14.7 6.94 20.85zM4098.65 1641.46c-35.51-43.2-54.81-92.62-57.86-148.15v-41.69c0-13.87.79-27.78 2.3-41.65a4749.553 4749.553 0 0 1 148.15-546.3c16.96-47.84 40.11-71.78 69.44-71.78 27.78 3.13 53.27 13.16 76.41 30.12 32.38 17 56.32 42.05 71.74 75.22 15.42 33.21 18.55 67.53 9.27 103.01-29.33 108.04-57.86 222.62-85.65 343.74-27.78 121.2-42.49 194.88-43.99 221.07-3.09 15.46-3.88 30.91-2.3 46.29 1.51 17 4.64 33.21 9.23 48.63 16.96 50.93-2.3 70.98-57.86 60.2-55.57-10.77-101.86-37.05-138.88-78.71zM4311.6 516.44c0-29.29 3.49-57.86 10.42-85.65 6.94-27.78 15.81-54.77 26.63-81.01 16.96-44.75 40.86-63.29 71.74-55.57 40.11 12.37 73.28 34.72 99.56 67.14 27.78 29.33 43.99 63.29 48.59 101.86-10.78 57.11-24.69 112.64-41.65 166.66-9.27 26.24-22.39 39.36-39.36 39.36-13.87 0-27.03-3.09-39.36-9.27-12.37-6.14-29.33-18.11-50.93-35.87-21.6-17.72-41.3-37.06-59.01-57.86-17.75-20.86-26.63-37.43-26.63-49.79z"
        className="st0"
      />
    </svg>
  )
}

IconLogo.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

IconHome.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconMiniCheck: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      height={size}
      style={style}
      viewBox="0 0 17 14"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M2.59 6.57A1 1 0 0 0 1.19 8l5.16 5.09L16.72 2.36A1 1 0 1 0 15.28.97l-8.96 9.28-3.73-3.68z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}

IconMiniCheck.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}
export const IconArrowTop: React.FC<IconProps> = ({ size, style = {}, color }: IconProps) => {
  return (
    <svg
      height={size}
      style={style}
      version="1.1"
      viewBox="0 0 330 330"
      width={size}
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
    >
      <path
        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        fill={color}
      />
    </svg>
  )
}

IconArrowTop.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconSearch: React.FC<IconProps | any> = ({
  style = {},
  size,
  color,
  ...props
}: IconProps) => {
  return (
    <svg
      height={size}
      style={style}
      viewBox="0 0 16.39 16.23"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6.91" cy="6.91" fill="none" r="6.41" stroke={color} />
      <rect
        fill="none"
        height="0.54"
        rx="0.22"
        stroke={color}
        strokeMiterlimit="10"
        transform="translate(45.89 33.02) rotate(42.94)"
        width="5.71"
        x="-39.59"
        y="7.49"
      />
    </svg>
  )
}

IconSearch.propTypes = {
  color: PropTypes.any,
  props: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconRate: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      height={size}
      style={style}
      viewBox="0 0 122.8 116.7"
      width={size}
      x="0px"
      y="0px"
    >
      <polygon
        fill={color}
        points="61.4,0 80.3,38.4 122.8,44.6 92.1,74.5 99.3,116.7 61.4,96.8 23.4,116.7 30.7,74.5 0,44.6 42.4,38.4 "
      />
    </svg>
  )
}

IconRate.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}
export const IconLoading: React.FC<IconProps> = ({ color, size, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      fill={color}
      height={`${size}px`}
      viewBox="0 0 21 21"
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M14.549 20.1045C12.6396 20.8955 10.5384 21.1024 8.51131 20.6992C6.48421 20.296 4.62219 19.3007 3.16073 17.8393C1.69928 16.3778 0.704012 14.5158 0.300797 12.4887C-0.102419 10.4616 0.104527 8.36044 0.89546 6.45095C1.6864 4.54146 3.0258 2.9094 4.74429 1.76114C6.46279 0.612875 8.48319 -5.72205e-06 10.55 -5.72205e-06C11.1419 -5.72205e-06 11.6218 0.479855 11.6218 1.07179C11.6218 1.66372 11.1419 2.14358 10.55 2.14358C8.90715 2.14358 7.30119 2.63074 5.93521 3.54347C4.56923 4.45619 3.50457 5.75347 2.87588 7.27127C2.24719 8.78906 2.08269 10.4592 2.4032 12.0705C2.7237 13.6818 3.51481 15.1618 4.67648 16.3235C5.83815 17.4852 7.31821 18.2763 8.9295 18.5968C10.5408 18.9173 12.2109 18.7528 13.7287 18.1241C15.2465 17.4954 16.5438 16.4308 17.4565 15.0648C18.3692 13.6988 18.8564 12.0928 18.8564 10.45C18.8564 9.85806 19.3363 9.3782 19.9282 9.3782C20.5201 9.3782 21 9.85806 21 10.45C21 12.5168 20.3871 14.5372 19.2389 16.2557C18.0906 17.9742 16.4585 19.3136 14.549 20.1045Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  )
}

IconLoading.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any
}

export const IconNoShow: React.FC<IconProps> = ({ style = {}, size }: IconProps) => {
  return (
    <svg
      height={size}
      style={style}
      viewBox="0 0 512.001 512.001"
      width={size}
      x="0px"
      y="0px"
    >
      <path d="M316.332,195.662c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.944,0,15.083     c12.075,12.075,18.752,28.139,18.752,45.248c0,35.285-28.715,64-64,64c-17.109,0-33.173-6.656-45.248-18.752     c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.139-4.16,10.923,0,15.083c16.085,16.128,37.525,25.003,60.331,25.003     c47.061,0,85.333-38.272,85.333-85.333C341.334,233.187,332.46,211.747,316.332,195.662z" />{' '}
      <path d="M270.87,172.131c-4.843-0.853-9.792-1.472-14.869-1.472c-47.061,0-85.333,38.272-85.333,85.333     c0,5.077,0.619,10.027,1.493,14.869c0.917,5.163,5.419,8.811,10.475,8.811c0.619,0,1.237-0.043,1.877-0.171     c5.781-1.024,9.664-6.571,8.64-12.352c-0.661-3.627-1.152-7.317-1.152-11.157c0-35.285,28.715-64,64-64     c3.84,0,7.531,0.491,11.157,1.131c5.675,1.152,11.328-2.859,12.352-8.64C280.534,178.702,276.652,173.155,270.87,172.131z" />{' '}
      <path d="M509.462,249.102c-2.411-2.859-60.117-70.208-139.712-111.445c-5.163-2.709-11.669-0.661-14.379,4.587     c-2.709,5.227-0.661,11.669,4.587,14.379c61.312,31.744,110.293,81.28,127.04,99.371c-25.429,27.541-125.504,128-230.997,128     c-35.797,0-71.872-8.64-107.264-25.707c-5.248-2.581-11.669-0.341-14.229,4.971c-2.581,5.291-0.341,11.669,4.971,14.229     c38.293,18.496,77.504,27.84,116.523,27.84c131.435,0,248.555-136.619,253.483-142.443     C512.854,258.915,512.833,253.091,509.462,249.102z" />{' '}
      <path d="M325.996,118.947c-24.277-8.171-47.829-12.288-69.995-12.288c-131.435,0-248.555,136.619-253.483,142.443     c-3.115,3.669-3.371,9.003-0.597,12.992c1.472,2.112,36.736,52.181,97.856,92.779c1.813,1.216,3.84,1.792,5.888,1.792     c3.435,0,6.827-1.664,8.875-4.8c3.264-4.885,1.92-11.52-2.987-14.763c-44.885-29.845-75.605-65.877-87.104-80.533     c24.555-26.667,125.291-128.576,231.552-128.576c19.861,0,41.131,3.755,63.189,11.157c5.589,2.005,11.648-1.088,13.504-6.699     C334.572,126.862,331.585,120.825,325.996,118.947z" />{' '}
      <path d="M444.865,67.128c-4.16-4.16-10.923-4.16-15.083,0L67.116,429.795c-4.16,4.16-4.16,10.923,0,15.083 c2.091,2.069,4.821,3.115,7.552,3.115c2.731,0,5.461-1.045,7.531-3.115L444.865,82.211 C449.025,78.051,449.025,71.288,444.865,67.128z" />
    </svg>
  )
}

IconNoShow.propTypes = {
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconShowEye: React.FC<IconProps> = ({ style = {}, size }: IconProps) => {
  return (
    <svg height={size} style={style} viewBox="0 0 512 298.67" width={size}>
      <path
        d="M509.46,249.1c-2.41-2.86-60.11-70.21-139.71-111.44a10.67,10.67,0,1,0-9.79,19C421.27,188.37,470.25,237.9,487,256c-25.43,27.55-125.51,128-231,128-35.8,0-71.87-8.64-107.26-25.7a10.66,10.66,0,0,0-9.26,19.2C177.77,396,217,405.33,256,405.33c131.44,0,248.56-136.62,253.49-142.45A10.67,10.67,0,0,0,509.46,249.1Z"
        transform="translate(0 -106.66)"
      />
      <path
        d="M326,119c-24.28-8.17-47.83-12.29-70-12.29C124.57,106.66,7.45,243.28,2.52,249.1a10.66,10.66,0,0,0-.6,13c1.47,2.12,36.74,52.18,97.86,92.78a10.44,10.44,0,0,0,5.89,1.79,10.68,10.68,0,0,0,5.88-19.56c-44.88-29.84-75.6-65.88-87.1-80.53C49,229.9,149.74,128,256,128c19.86,0,41.13,3.76,63.19,11.16a10.52,10.52,0,0,0,13.5-6.7A10.64,10.64,0,0,0,326,119Z"
        transform="translate(0 -106.66)"
      />
      <ellipse
        cx="256"
        cy="149.08"
        fill="none"
        rx="85.33"
        ry="85.59"
        stroke="#000"
        strokeWidth="19px"
      />
    </svg>
  )
}

IconShowEye.propTypes = {
  size: PropTypes.any,
  style: PropTypes.object
}
export const IconPizza: React.FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      fill="none"
      height={558}
      width={274}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M198.156 264.893c-1.897-17.783-16.96-31.64-35.262-31.64s-33.364 13.857-35.262 31.64h70.524Z"
        fill="#FB8A8A"
      />
      <path
        d="M198.156 264.893c-1.897-17.783-16.96-31.64-35.262-31.64s-33.364 13.857-35.262 31.64h70.524Z"
        fill="#F9CAC6"
      />
      <path
        d="M42.554 232.325a35.338 35.338 0 0 0 22.463 8.011c19.588 0 35.468-15.863 35.468-35.431a35.26 35.26 0 0 0-8.02-22.44l-49.911 49.86Z"
        fill="#FB8A8A"
      />
      <path
        d="M42.554 232.325a35.338 35.338 0 0 0 22.463 8.011c19.588 0 35.468-15.863 35.468-35.431a35.26 35.26 0 0 0-8.02-22.44l-49.911 49.86Z"
        fill="#F9CAC6"
      />
      <path
        d="m135.176 436.436 34.119 34.084c46.402-49.138 75.145-115.084 76.113-187.732h-48.244c-.913 57.554-22.78 111.673-61.988 153.648Z"
        fill="#FFF7F7"
      />
      <path
        d="M124.123 121.009C84.247 81.183 31.978 58.252-24 55.801v214.042l148.552-148.397c-.151-.143-.286-.294-.429-.437ZM189.581 282.787H-18.632l148.44 148.286c37.771-40.54 58.852-92.763 59.773-148.286Z"
        fill="#F9CAC6"
      />
      <path
        d="m19.535 260.926 138.722-138.577c17.15 19.092 30.649 40.69 40.153 64.264 9.528 23.621 14.792 48.598 15.682 74.313H19.535Zm-9.584 3.966h208.214c-.921-55.523-22.002-107.746-59.773-148.286L9.952 264.892Z"
        fill="#fff"
      />
      <path
        d="M99.056 282.785c1.898 17.783 16.961 31.64 35.262 31.64 18.302 0 33.365-13.857 35.263-31.64H99.057Z"
        fill="#FB8A8A"
        opacity={0.55}
      />
      <path
        d="M124.123 436.983c.143-.143.286-.294.429-.437L-24 288.149v214.042c55.978-2.451 108.248-25.382 148.123-65.208Z"
        fill="#F9CAC6"
      />
      <path
        d="M225.756 264.893H274c-.969-72.648-29.72-138.601-76.114-187.731l-34.119 34.083c39.201 41.975 61.068 96.095 61.989 153.648Z"
        fill="#F3B8B3"
        opacity={0.55}
      />
      <path
        d="M-23.841 152.021c19.588 0 35.468-15.864 35.468-35.432 0-19.567-15.88-35.431-35.468-35.431-.056 0-.103 0-.159.008v70.847c.056.008.103.008.159.008ZM44.317 385.617c0 19.568 15.88 35.431 35.468 35.431 8.21 0 15.761-2.792 21.772-7.471l-49.76-49.709a35.225 35.225 0 0 0-7.48 21.749ZM107.013 408.3a35.266 35.266 0 0 0 8.233-22.693c0-19.568-15.88-35.432-35.468-35.432A35.342 35.342 0 0 0 57.06 358.4l49.952 49.9ZM-24 369.388v70.522c17.984-1.713 32.054-16.847 32.054-35.265S-6.016 371.101-24 369.388ZM.964 215.225a35.19 35.19 0 0 0 7.686 22.003l49.816-49.765a35.34 35.34 0 0 0-22.026-7.678c-19.596.008-35.476 15.872-35.476 35.44Z"
        fill="#FB8A8A"
        opacity={0.55}
      />
      <path
        d="M-24 48.21c58.002 2.459 112.186 26.175 153.49 67.437.143.143.286.293.429.436l34.103-34.067C115.603 33.449 49.406 2.586-24 0v48.21ZM129.49 442.345C88.186 483.607 34.002 507.323-24 509.782V558c73.406-2.586 139.603-33.449 188.014-82.024l-34.103-34.067c-.143.143-.278.294-.421.436Z"
        fill="#FFF7F7"
      />
    </svg>
  )
}

IconPizza.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any
}

export const IconShopping: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 18 23"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.7.2c-1.1 0-2 .3-2.6.9-.6.6-1 1.4-1.2 2.2-.2.6-.3 1.1-.3 1.7H2C.9 5 0 5.9 0 7l.1 13c0 1.7 1.3 3 3 3H15c1.7 0 3-1.3 3-3V7c0-1.1-.9-2-2-2h-3.2c-.1-.6-.1-1.1-.3-1.6-.2-.8-.6-1.7-1.2-2.2-.7-.6-1.5-1-2.6-1zm2.7 6.3v2.6c0 .4.3.7.8.7.4 0 .7-.3.7-.8v-.8-1.8H16c.3 0 .5.2.5.5l-.1 13c0 .8-.7 1.5-1.5 1.5H3.1c-.8 0-1.5-.7-1.5-1.5L1.5 7c0-.3.2-.5.5-.5h2.5v2.6c0 .4.3.8.7.8.4 0 .8-.4.8-.8v-.8-1.8h5.4zM11.3 5c0-.4-.1-.8-.2-1.2-.2-.7-.4-1.2-.8-1.5-.4-.3-.8-.5-1.6-.5s-1.3.2-1.6.5c-.4.3-.6.8-.8 1.5-.1.4-.2.8-.2 1.2h5.2z"></path>
    </svg>
  )
}

IconShopping.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconCarrot: React.FC<IconProps> = ({
  style = {},
  size,
  color,
  ...props
}: IconProps) => {
  return (
    <svg
      fill="none"
      height={size ?? 433}
      width={size ?? 345}
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M177.831 337.842c43.554-6.889 72.569-48.628 63.408-92.467-8.053-38.768-44.507-65.553-83.84-61.459-28.094 2.726-50.323 20.064-61.886 43.326-7.333 14.855-17.755 27.745-31.261 37.245l-10.408 7.263c-5.626 4.191-4.245 12.623 2.212 14.328l12.632 4.247c15.713 4.817 29.17 13.564 40.661 25.397 17.094 17.471 42.626 26.533 68.482 22.12Z"
        fill="#F9CAC6"
      />
      <path
        d="M156.831 184.205c-5.897.828-11.521 2.207-17.139 3.597l24.929 151.678c4.214.007 8.422.029 12.918-.803 4.496-.833 8.992-1.665 13.765-3.322l-25.211-150.839c-3.087-.579-5.889-.587-9.262-.311ZM240.949 246.211c-6.673-31.744-32.731-55.966-63.886-60.837l24.375 144.936c29.523-15.35 47.017-49.271 39.511-84.099ZM94.939 227.534c-7.334 14.855-17.755 27.745-31.26 37.244l-10.408 7.263c-5.625 4.19-4.245 12.622 2.212 14.327l12.631 4.247c15.713 4.817 29.168 13.563 40.66 25.395 11.486 11.822 27.481 20.021 44.319 22.88l-24.094-145.78c-14.611 7.25-26.717 19.565-34.06 34.424Z"
        fill="#FAA7A5"
        stroke="#FAA7A5"
        strokeWidth={1.253}
      />
      <path
        d="M271.327 342.598c20.585-38.967 4.979-87.3-35.423-106.518-35.906-17.24-79.184-4.168-100.058 30.021-14.658 24.097-14.438 52.739-2.418 75.512 7.266 14.617 11.721 30.641 10.845 47.2l-.031 12.63c-.302 6.457 7.276 10.415 13.191 6.78l10.968-7.541c12.945-9.222 28.404-14.795 44.7-17.274 23.04-3.016 46.107-17.26 58.226-40.81Z"
        fill="#FFE6E4"
      />
      <path
        d="M135.865 266.106c-3.1 5.048-5.366 10.368-7.337 16.254l135.202 71.722c2.541-3.358 5.066-6.722 7.049-11.203 2.257-3.93 4.23-8.406 5.368-13.18l-134.924-71.161c-1.697 2.241-3.955 4.761-5.358 7.568ZM235.917 236.088c-29.462-14.129-64.299-8.056-87.094 13.772l130.43 69.182c5.415-32.836-11.075-67.416-43.336-82.954ZM133.428 341.625c7.266 14.616 11.721 30.64 10.844 47.198l-.031 12.63c-.301 6.457 7.276 10.415 13.191 6.78l10.969-7.541c12.944-9.222 28.403-14.795 44.699-17.274 16.575-1.918 32.319-9.731 44.704-21.485L125.961 292.75c-2.849 16.838-.644 33.966 7.467 48.875Z"
        fill="#F9CAC6"
      />
      <path
        d="M377.619 181.185c9.837-2.783 19.119-8.089 26.435-15.916 22.81-23.235 22.331-60.868-.364-83.952-22.979-23.656-61.175-24.335-85.093-1.95-7.039 7.004-12.388 14.567-15.216 22.977-6.506 17.954-19.176 33.36-35.764 42.291-4.5 2.233-7.881 5.31-11.808 8.67-18.292 18.195-19.492 48.23-2.684 67.941 18.764 22.238 52.463 23.75 73.01 4.436 3.381-3.077 5.907-6.441 7.886-9.522 10.696-16.536 25.337-29.41 43.598-34.975Z"
        fill="#FFF7F6"
      />
      <path
        d="M320.141 138.915c5.906-6.44 10.425-14.29 12.695-23.822 6.519-27.777-10.262-55.906-37.77-63.287-28.347-7.664-57.315 8.81-65.235 36.582-2.267 8.132-2.288 16.56-1.176 24.426 3.327 16.571.483 33.419-8.535 47.699-2.262 3.92-3.948 7.566-5.085 12.34-5.388 21.608 6.921 44.937 28.242 52.591 24.412 8.217 50.009-5.185 56.795-29.584 1.13-3.358 1.424-7.014 1.429-11.225 1.164-17.414 7.105-33.688 18.64-45.72Z"
        fill="#F9CAC6"
      />
      <path
        d="M295.067 51.804c-.133-.036-.26-.062-.403-.093-12.413 47.983-22.339 78.938-51.104 172.891 1.451.488 3.008 1.241 4.667 2.198 22.83 4.985 45.512-8.191 51.851-30.958 1.129-3.357 1.423-7.013 1.429-11.225 1.169-17.403 7.099-33.672 18.644-45.709 5.907-6.44 10.425-14.29 12.696-23.822 6.519-27.777-10.273-55.901-37.78-63.282Z"
        fill="#F9CAC6"
      />
      <path
        d="M271.26 161.803c-6.791 20.193-32.91 90.556-32.783 90.581"
        stroke="#FFF7F6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={6}
      />
    </svg>
  )
}

IconCarrot.propTypes = {
  color: PropTypes.any,
  size: PropTypes.number,
  style: PropTypes.object
}

export const IconFigure: React.FC<IconProps> = ({
  style = {},
  size,
  color,
  ...props
}: IconProps) => {
  return (
    <svg
      viewBox="0 0 675.6 522.55"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      height={size ?? 500}
      width={size ?? 500}
    >
      <defs>
        <style>
          {'.cls-2{fill:#f9cac6;opacity:.5;mix-blend-mode:multiply}'}
        </style>
      </defs>
      <title>{'figure'}</title>
      <g
        style={{
          isolation: 'isolate'
        }}
      >
        <g data-name="Capa 1" id="Capa_1">
          <path
            className="cls-2"
            d="M-677.16 108.92a22.49 22.49 0 0 0 31.82 0l110-110a22.5 22.5 0 0 1 31.82 0 22.5 22.5 0 0 1 0 31.81l-67.58 67.58a22.5 22.5 0 0 0 0 31.82 22.49 22.49 0 0 0 31.82 0l3.08-3.08a22.5 22.5 0 0 1 31.81 0 22.49 22.49 0 0 1 0 31.82l-8.54 8.55a22.48 22.48 0 0 0 0 31.81 22.48 22.48 0 0 0 31.81 0l226.48-226.47a22.5 22.5 0 0 0 0-31.82 22.51 22.51 0 0 0-31.82 0l-6.17 6.18a22.51 22.51 0 0 1-31.82 0 22.49 22.49 0 0 1 0-31.82l27.73-27.72a22.5 22.5 0 0 0 0-31.82 22.51 22.51 0 0 0-31.82 0l-78.76 78.75a22.49 22.49 0 0 1-31.82 0 22.5 22.5 0 0 1 0-31.81l114.39-114.38a22.51 22.51 0 0 0 0-31.82 22.51 22.51 0 0 0-31.82 0L-506.14-93.91l-21.43 21.42-149.59 149.6a22.5 22.5 0 0 0 0 31.81ZM-494.55-219.89a22.51 22.51 0 0 0-31.82 0l-110 110a22.51 22.51 0 0 1-31.82 0 22.51 22.51 0 0 1 0-31.82l67.58-67.57a22.51 22.51 0 0 0 0-31.83 22.51 22.51 0 0 0-31.82 0l-3.07 3.08a22.49 22.49 0 0 1-31.82 0 22.51 22.51 0 0 1 0-31.82l8.54-8.54a22.49 22.49 0 0 0 0-31.82 22.5 22.5 0 0 0-31.81 0L-917.07-83.73a22.51 22.51 0 0 0 0 31.82 22.49 22.49 0 0 0 31.82 0l6.18-6.17a22.48 22.48 0 0 1 31.81 0 22.48 22.48 0 0 1 0 31.81L-875 1.46a22.49 22.49 0 0 0 0 31.82 22.5 22.5 0 0 0 31.81 0l78.76-78.76a22.49 22.49 0 0 1 31.82 0 22.5 22.5 0 0 1 0 31.81L-847 100.71a22.52 22.52 0 0 0 0 31.83 22.51 22.51 0 0 0 31.82 0l149.59-149.6 21.43-21.42 149.59-149.59a22.49 22.49 0 0 0 .02-31.82Z"
            transform="translate(923.66 316.76)"
          />
          <path
            d="M-589.94 43.39a13.76 13.76 0 0 0-19.45 0l-5.22 5.23a13.75 13.75 0 0 1-19.45 0 13.74 13.74 0 0 1 0-19.45l27.83-27.83a13.77 13.77 0 0 0 0-19.46 13.75 13.75 0 0 0-19.45 0l-67.26 67.27a13.77 13.77 0 0 1-19.46 0 13.75 13.75 0 0 1 0-19.45l27.27-27.27a13.75 13.75 0 0 0 0-19.45 13.77 13.77 0 0 0-19.46 0L-809.13 87.53a13.75 13.75 0 0 0 0 19.45 13.74 13.74 0 0 0 19.45 0l18.48-18.48a13.75 13.75 0 0 1 19.45 0 13.75 13.75 0 0 1 0 19.45l-69.93 69.93a13.77 13.77 0 0 0 0 19.45 13.77 13.77 0 0 0 19.46 0l38.72-38.73a13.75 13.75 0 0 1 19.45 0 13.75 13.75 0 0 1 0 19.45l-3.77 3.78a13.75 13.75 0 0 0 0 19.45 13.75 13.75 0 0 0 19.45 0l138.43-138.43a13.77 13.77 0 0 0 0-19.46Z"
            style={{
              fill: '#faa7a5'
            }}
            transform="translate(923.66 316.76)"
          />
        </g>
      </g>
    </svg>
  )
}

IconFigure.propTypes = {
  color: PropTypes.any,
  size: PropTypes.number,
  style: PropTypes.object
}

export const IconSales: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill="none"
      height={size}
      stroke={color ?? 'ff0000'}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.14096 8.00024C6.71925 8.00024 5.49276 8.99817 5.20365 10.3902L3.99972 16.1868C3.48396 18.6701 5.37989 21.0002 7.91614 21.0002H16.0839C18.6201 21.0002 20.516 18.6701 20.0003 16.1868L18.7964 10.3902C18.5073 8.99818 17.2808 8.00024 15.8591 8.00024H8.14096Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
      <path
        d="M15 6V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
    </svg>
  )
}

IconSales.propTypes = {
  color: PropTypes.string,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconDelete: React.FC<IconProps> = ({ style = {}, size, color, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size ?? 24}
      viewBox="0 0 24 24"
      width={size ?? 24}
      color={color}
    >
      <path
        fill={color ?? '#FF4242'}
        fillRule='evenodd'
        d='M10.113 1.5A2.53 2.53 0 0 0 7.65 3.454L7.407 4.67a.398.398 0 0 1-.39.319H3.75a1.25 1.25 0 0 0 0 2.5h16.958a1.25 1.25 0 1 0 0-2.5h-3.267a.398.398 0 0 1-.39-.32l-.243-1.215A2.53 2.53 0 0 0 14.345 1.5h-4.232Zm4.453 3.489-.196-.977A.03.03 0 0 0 14.347 4h-4.233a.03.03 0 0 0-.025.012l-.195.977h4.673Zm4.86 3.232a1.25 1.25 0 0 1 1.145 1.347l-.024.296a905.298 905.298 0 0 1-.288 3.432c-.174 2.037-.39 4.445-.55 5.88-.1.905-.446 1.746-1.112 2.365-.67.622-1.539.905-2.465.922-2.623.047-5.252.05-7.878-.005-.916-.019-1.768-.315-2.42-.937-.647-.616-.987-1.447-1.085-2.337-.16-1.449-.376-3.859-.55-5.894a815.2 815.2 0 0 1-.287-3.427l-.024-.295a1.25 1.25 0 0 1 2.492-.2l.024.292a738.821 738.821 0 0 0 .285 3.417c.175 2.039.388 4.418.544 5.832.049.44.194.677.325.803.126.12.344.238.748.247 2.589.054 5.185.051 7.78.005.445-.009.68-.135.81-.255.131-.122.279-.357.329-.808l.544-5.819.31-3.715a1.25 1.25 0 0 1 1.346-1.146Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

IconDelete.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconInvoice: React.FC<IconProps> = ({ style = {}, size }) => {
  return <svg
    fill='none'
    height={size}
    stroke='#000'
    strokeWidth='5px'
    style={style}
    viewBox='0 0 210.91 261.78'
    width={size}
    xmlns='http://www.w3.org/2000/svg'
  ><path
      d='M357,211.55V264a11.74,11.74,0,0,1-11.74,11.74H166.78A11.74,11.74,0,0,1,155,264V34.68a11.74,11.74,0,0,1,11.74-11.74h37.57'
      stroke='#000'
      strokeLinecap='round'
      transform='translate(-150.54 -18.44)'
    /><path d='M218.43,22.94H346.3a10.8,10.8,0,0,1,10.66,11V198.81' transform='translate(-150.54 -18.44)' /><text
      fill='none'
      fontSize='32.32px'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='5px'
      transform='translate(27.2 51.1)'
    >INVOICE</text><line
      fill='none'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='5px'
      x1='132.85'
      x2='173.67'
      y1='76.11'
      y2='76.11'
    /><line
      fill='none'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='5px'
      x1='110.54'
      x2='171.71'
      y1='89.41'
      y2='89.41'
    /><line
      fill='none'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='5px'
      x1='33.31'
      x2='170.8'
      y1='135.89'
      y2='135.89'
    /><line
      fill='none'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='5px'
      x1='33.25'
      x2='170.74'
      y1='166.15'
      y2='166.15'
    /><line
      fill='none'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='5px'
      x1='138.26'
      x2='138.26'
      y1='193.62'
      y2='111.98'
    /><path
      d='M257.11,251.47c4-9.66,7.55-12.06,10.24-12.13,5.87-.17,7.79,10.72,15.26,11.54,6.72.73,9.49-7.63,17.61-8.61,6.79-.82,13.17,4,18.06,9.2'
      fill='none'
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='5px'
      transform='translate(-150.54 -18.44)'
    /><path d='M237.44,212.07h86.77v-84H180.87v84h22.77' transform='translate(-150.54 -18.44)' /></svg>
}

export const IconDownload: React.FC<IconProps> = ({
  style = {},
  size,
  color
}) => {
  return (
    <svg
      fill={color}
      height={size}
      stroke={color}
      style={style}
      viewBox="0 0 329.89 306.05"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M164.93 306c-34.49 0-68.98.04-103.47-.01-30.36-.04-54.81-20.26-60.38-50.06-.86-4.63-.94-9.44-.99-14.17-.13-12.24-.11-24.49-.01-36.74.06-6.42 4.26-11.37 10.02-12.24 5.92-.89 11.39 2.29 13.25 7.97.57 1.73.66 3.67.67 5.52.06 12.37.01 24.74.03 37.11.04 23.06 15.55 38.61 38.53 38.61 68.23.01 136.46.01 204.69 0 22.99 0 38.49-15.54 38.54-38.61.02-12.5-.02-24.99.01-37.49.02-8.06 4.81-13.28 12.04-13.23 6.97.05 11.96 5.38 11.92 13.09-.08 15.49.58 31.05-.67 46.45-2.42 29.89-28.42 53.5-58.47 53.71-35.24.25-70.48.06-105.72.06.01.01.01.02.01.03z"
        fill={color}
        stroke={color}
      />
      <path
        d="M152.93 189.09v-4.07c0-56.73 0-113.46.01-170.19 0-1.62-.09-3.27.17-4.86 1.01-6.05 6.54-10.35 12.63-9.94 5.9.39 10.72 5.21 11.14 11.21.1 1.37.04 2.75.04 4.12v174.81c1.45-1.36 2.4-2.21 3.3-3.1 14.49-14.49 28.94-29.02 43.49-43.45 7.01-6.95 18.13-4.04 20.39 5.26 1.17 4.81-.58 8.73-4.03 12.17-20.09 20.02-40.13 40.1-60.19 60.15-2.03 2.03-4.03 4.1-6.11 6.08-5.55 5.26-12.29 5.35-17.67 0-22.58-22.49-45.1-45.02-67.6-67.59-5.2-5.21-5.36-12.58-.6-17.41 4.87-4.95 12.29-4.77 17.68.59 14.62 14.54 29.18 29.13 43.74 43.74.95.95 1.61 2.2 2.4 3.31.41-.28.81-.56 1.21-.83z"
        fill={color}
        stroke={color}
      />
    </svg>
  )
}

export const IconComment: React.FC<IconProps> = ({
  style = {},
  size,
  color,
  ...props
}: IconProps) => {
  return (
    <svg
      fill="none"
      height={size ?? 16}
      style={{
        cursor: 'pointer',
        ...style
      }}
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.667 12.288h2.667L10.3 14.26a.665.665 0 0 0 1.034-.553v-1.42c2 0 3.333-1.334 3.333-3.334v-4c0-2-1.333-3.333-3.333-3.333H4.667c-2 0-3.333 1.333-3.333 3.333v4c0 2 1.333 3.334 3.333 3.334zm1-5.288h4.666M5.667 7h4.666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
    </svg>
  )
}

IconComment.propTypes = {
  color: PropTypes.any,
  size: PropTypes.number,
  style: PropTypes.object
}
export const IconCancel: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color ?? '#717171'}
      height={size}
      style={style}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height={20.36}
        rx={1.13}
        transform="rotate(-45 8 9.6)"
        width={2.26}
        x={8}
        y={9.6}
      />
      <rect
        height={20.36}
        rx={1.13}
        transform="rotate(45 22.4 8)"
        width={2.26}
        x={22.4}
        y={8}
      />
    </svg>
  )
}

IconCancel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.any,
  style: PropTypes.object
}
// Icon de Arrow
export const IconArrowBottom: React.FC<IconProps> = ({ style = {}, color, size }: IconProps) => {
  return (
    <svg
      color={color}
      height={size}
      style={style}
      version="1.1"
      viewBox="0 0 129 129"
      width={size}
    >
      <path
        d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
        fill={color}
      />
    </svg>
  )
}

IconArrowBottom.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconFolder: React.FC<IconProps> = ({ style = {}, size }: IconProps) => {
  return (
    <svg
      height={size}
      style={style}
      viewBox="0 0 254.89 207.69"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200.4,258.36h82.18l21.32,30.72H414.64s13.49-.61,9,11.35c-.58,1.56,0,28.17,0,28.17h22.11s3.13,2,3.13,5.09a15.74,15.74,0,0,1,0,6.46l-44.8,122.47s.19,4.11-11.35,3.33l-189.2.1s-9.39-.69-9.19-9.3V263.06S196.88,258.36,200.4,258.36Z"
        fill="#e5b911"
        transform="translate(-194.34 -258.36)"
      />
      <path
        d="M423.64,328.6h22.11s3.13,2,3.13,5.09a15.74,15.74,0,0,1,0,6.46l-44.8,122.47s.19,4.11-11.35,3.33l-189.19.1s-5.59-.41-8.06-4.55a8.78,8.78,0,0,1-1.14-4.75c.22-11.24,21.81-58.84,29.36-81.62,2.79-8.43,6.38-16.59,9.13-25a82.53,82.53,0,0,1,7-15.92,29.4,29.4,0,0,1,2.48-4c5.71-6.66,17.73-5.16,26.17-4.35,11.52,1.11,23.18.21,34.68,1.49,6.88.76,23.65,1,57.19,1.36C379.28,328.92,400.47,328.94,423.64,328.6Z"
        fill="#ecce3d"
        transform="translate(-194.34 -258.36)"
      />
    </svg>
  )
}

IconFolder.propTypes = {
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconPlus: React.FC<IconProps> = ({ style = {}, size = 24, color }: IconProps) => {
  return (
    <svg
      height={size ?? 24}
      viewBox="0 0 24 24"
      width={size ?? 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 11h4.993c.556 0 1.007.444 1.007 1 0 .552-.45 1-1.007 1H13v4.993C13 18.55 12.556 19 12 19c-.552 0-1-.45-1-1.007V13H6.007A1.001 1.001 0 0 1 5 12c0-.552.45-1 1.007-1H11V6.007C11 5.45 11.444 5 12 5c.552 0 1 .45 1 1.007V11z"
        fill={getGlobalStyle('--color-icons-primary')}
        fillRule="evenodd"
      ></path>
    </svg>
  )
}
export const IconLinePart: React.FC<IconProps> = ({ size = 2, color, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M23 13H1v-2h22z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  )
}

IconLinePart.propTypes = {
  color: PropTypes.any,
  size: PropTypes.number
}

IconPlus.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}
export const IconMinus: React.FC<IconProps> = ({
  style = {},
  size = 24,
  color,
  ...props
}) => {
  return (
    <svg
      height={size ?? 24}
      viewBox="0 0 24 24"
      width={size ?? 24}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.993 11c.556 0 1.007.444 1.007 1 0 .552-.45 1-1.007 1H6.007A1.001 1.001 0 0 1 5 12c0-.552.45-1 1.007-1h11.986z"
        fill={color ?? getGlobalStyle('--color-icons-primary')}
        fillRule="evenodd"
      >
        {' '}
      </path>
    </svg>
  )
}

IconMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}
export const IconPromo: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      height={size}
      style={style}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.2267 12.4802C28.7734 12.4802 29.2267 12.0268 29.2267 11.4802V6.48016C29.2267 5.20016 28.1867 4.16016 26.8934 4.16016H4.9334C3.6534 4.16016 2.6134 5.20016 2.6134 6.48016V18.8535C2.6134 20.1335 3.66674 21.1868 4.94674 21.1868H8.94674V26.8402C8.94674 27.2402 9.1734 27.6002 9.54674 27.7602C9.68007 27.8135 9.8134 27.8402 9.94674 27.8402C10.1867 27.8402 10.4267 27.7468 10.6134 27.5735L17.6401 21.1868H26.9067C28.1867 21.1868 29.2267 20.1468 29.2267 18.8668V17.9335C29.2267 17.3868 28.7734 16.9335 28.2267 16.9335C27.6801 16.9335 27.2267 17.3868 27.2267 17.9335V18.8668C27.2267 19.0402 27.0801 19.1868 26.9067 19.1868H17.2534C17.0001 19.1868 16.7601 19.2802 16.5867 19.4535L10.9467 24.5868V20.2002C10.9467 19.6535 10.4934 19.2002 9.94674 19.2002H4.94674C4.76007 19.2002 4.6134 19.0535 4.6134 18.8668V6.49349C4.6134 6.32016 4.76007 6.17349 4.9334 6.17349H26.8934C27.0667 6.17349 27.2134 6.32016 27.2134 6.49349V11.4802C27.2267 12.0268 27.6667 12.4802 28.2267 12.4802Z"
        fill="red"
        height={size}
        width={size}
      ></path>
      <path d="M11.9334 14.2132C12.6256 14.2132 13.1867 13.6521 13.1867 12.9599C13.1867 12.2677 12.6256 11.7065 11.9334 11.7065C11.2412 11.7065 10.6801 12.2677 10.6801 12.9599C10.6801 13.6521 11.2412 14.2132 11.9334 14.2132Z"></path>
      <path d="M19.9335 14.1862C20.6109 14.1862 21.1601 13.637 21.1601 12.9596C21.1601 12.2821 20.6109 11.7329 19.9335 11.7329C19.256 11.7329 18.7068 12.2821 18.7068 12.9596C18.7068 13.637 19.256 14.1862 19.9335 14.1862Z"></path>
      <path d="M15.9333 14.2532C16.6476 14.2532 17.2267 13.6741 17.2267 12.9598C17.2267 12.2455 16.6476 11.6665 15.9333 11.6665C15.2191 11.6665 14.64 12.2455 14.64 12.9598C14.64 13.6741 15.2191 14.2532 15.9333 14.2532Z"></path>
    </svg>
  )
}

IconPromo.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}
export const IconEdit: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      fill={color}
      height={size}
      style={style}
      viewBox="0 0 22 22"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.76 1.24a4.25 4.25 0 0 0-6.012 0l-.487.488L2.658 13.33a.854.854 0 0 0-.188.3c0 .01-.012.01-.012.021L.045 20.904a.83.83 0 0 0 1.052 1.052l7.252-2.413c.01 0 .01-.011.022-.011.11-.045.21-.1.299-.189l3.1-3.1a.835.835 0 0 0 0-1.173.835.835 0 0 0-1.174 0l-2.513 2.513-3.665-3.665 10.43-10.43 1.827 1.827 1.827 1.827-4.23 4.23a.836.836 0 0 0 0 1.173.835.835 0 0 0 1.174 0l4.816-4.816.487-.487a4.23 4.23 0 0 0 1.24-3A4.174 4.174 0 0 0 20.76 1.24zm-1.173 1.174c.487.488.753 1.14.753 1.827 0 .642-.233 1.251-.654 1.727L17.86 4.142l-1.827-1.827a2.591 2.591 0 0 1 3.554.1zM3.61 15.457l2.934 2.934-4.407 1.473 1.473-4.407z"
        fill={color}
      ></path>
    </svg>
  )
}

IconEdit.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

export const IconSendMessage: React.FC<IconProps> = ({ size, color }: IconProps) => {
  return (
    <svg
      height={size}
      viewBox="0 0 47.02 39.35"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <title>Asset 8</title>
      <g data-name="Layer 2" id="Layer_2">
        <g data-name="Layer 2" id="Layer_2-2">
          <path
            d="M45.84,1.13,17.26,26.45l12.08,3.14a1,1,0,0,0,1.17-.51L46,1.26A.1.1,0,0,0,45.84,1.13Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1px"
          />
          <path
            d="M9.62,23.15l-7.83-2a1,1,0,0,1-.15-2L45.62,1a.06.06,0,0,1,.05.11l-36.05,22,4.86,14.57a1,1,0,0,0,2-.31l.79-11"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1px"
          />
          <line
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1px"
            x1="16.06"
            x2="23.65"
            y1="38.35"
            y2="28.11"
          />
        </g>
      </g>
    </svg>
  )
}

IconSendMessage.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any
}
export const IconClose: React.FC<IconProps> = ({ size, color }: IconProps) => {
  return (
    <svg
      fill={color ?? '#717171'}
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="20.36"
        rx="1.13"
        transform="rotate(-45 8 9.6)"
        width="2.26"
        x="8"
        y="9.6"
      ></rect>
      <rect
        height="20.36"
        rx="1.13"
        transform="rotate(45 22.4 8)"
        width="2.26"
        x="22.4"
        y="8"
      ></rect>
    </svg>
  )
}

IconClose.propTypes = {
  color: PropTypes.string,
  size: PropTypes.any
}

export const IconLocationMap2: React.FC<IconProps> = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      fill="none"
      height={`${size}px`}
      viewBox="0 0 32 32"
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 17.907a4.16 4.16 0 1 0 0-8.32 4.16 4.16 0 0 0 0 8.32Z"
        stroke={color ?? '#282828'}
        strokeWidth={1.5}
      />
      <path
        d="M4.827 11.32C7.453-.227 24.56-.213 27.173 11.333c1.534 6.774-2.68 12.507-6.373 16.054a6.925 6.925 0 0 1-9.613 0c-3.68-3.547-7.894-9.294-6.36-16.067Z"
        stroke={color ?? '#282828'}
        strokeWidth={1.5}
      />
    </svg>
  )
}

IconLocationMap2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.any
}

export const IconGoogleFullColor: React.FC<IconProps> = ({ size }: IconProps) => {
  return (
    <svg height={size} version="1.1" viewBox="0 0 256 262" width={size}>
      <path
        d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451"
        fill="#4285F4"
      ></path>
      <path
        d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1"
        fill="#34A853"
      ></path>
      <path
        d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37"
        fill="#FBBC05"
      ></path>
      <path
        d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479"
        fill="#EB4335"
      ></path>
    </svg>
  )
}

IconGoogleFullColor.propTypes = {
  size: PropTypes.any
}

export const IconArrowLeft: React.FC<IconProps> = ({ style = {}, size, color }: IconProps) => {
  return (
    <svg
      height={size}
      style={style}
      viewBox="0 0 22.893 45.908"
      width={size}
      x="0px"
      y="0px"
    >
      <path
        d="M1365.5,348.848l21.837-22.686L1365.5,303.635"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth="2px"
        transform="translate(1388.033 349.194) rotate(180)"
      />
    </svg>
  )
}

IconArrowLeft.propTypes = {
  color: PropTypes.any,
  size: PropTypes.any,
  style: PropTypes.object
}

IconChart.propTypes = {
  color: PropTypes.any,
  size: PropTypes.number,
  style: PropTypes.object
}

export const IconQuestion: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      fill="none"
      height={props.size}
      viewBox="0 0 16 16"
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M7.987 1.333a6.648 6.648 0 0 0-6.654 6.66 6.654 6.654 0 0 0 6.66 6.66 6.646 6.646 0 0 0 5.248-2.558.5.5 0 1 0-.788-.617 5.646 5.646 0 0 1-4.46 2.175c-3.13 0-5.66-2.53-5.66-5.66a5.648 5.648 0 0 1 5.654-5.66c3.13 0 5.66 2.536 5.66 5.66a.5.5 0 0 0 1 0 6.658 6.658 0 0 0-6.66-6.66Zm-.033 3.808a1.16 1.16 0 0 0-1.103.81.535.535 0 0 1-1.022-.317 2.226 2.226 0 1 1 3.15 2.64v.001c-.32.165-.49.43-.49.698v.707a.535.535 0 0 1-1.07 0v-.707c0-.759.482-1.346 1.069-1.648a1.156 1.156 0 0 0-.534-2.184Zm0 6.759a.511.511 0 0 1-.2-.04.522.522 0 0 1-.174-.114.507.507 0 0 1-.16-.38c0-.066.014-.14.04-.206a.581.581 0 0 1 .12-.174.547.547 0 0 1 .753 0 .489.489 0 0 1 .114.174c.033.066.047.14.047.206a.58.58 0 0 1-.16.38.544.544 0 0 1-.38.153Z"
        fill={props.color ?? '#A6A6A6'}
        fillRule="evenodd"
      />
    </svg>
  )
}

IconQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.any
}

export const IconFilter: React.FC<IconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? 800}
    height={size ?? 800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color ?? getGlobalStyle('--color-icons-black')}
      fillRule="evenodd"
      d="M15 10.5A3.502 3.502 0 0 0 18.355 8H21a1 1 0 1 0 0-2h-2.645a3.502 3.502 0 0 0-6.71 0H3a1 1 0 0 0 0 2h8.645A3.502 3.502 0 0 0 15 10.5zM3 16a1 1 0 1 0 0 2h2.145a3.502 3.502 0 0 0 6.71 0H21a1 1 0 1 0 0-2h-9.145a3.502 3.502 0 0 0-6.71 0H3z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconBox: React.FC<IconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? 800}
    height={size ?? 800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={color ?? '#292D32'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
)

export const IconFileUpload: React.FC<IconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={color ?? getGlobalStyle('--color-icons-black') }
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19v-7m0 0-2.25 2.333M12 12l2.25 2.333m-7.65 3.5c-1.988 0-3.6-1.641-3.6-3.666 0-1.669 1.094-3.077 2.592-3.521A.152.152 0 0 0 5.7 10.5C5.7 7.462 8.118 5 11.1 5s5.4 2.462 5.4 5.5a.09.09 0 0 0 .11.089c.254-.058.518-.089.79-.089 1.988 0 3.6 1.642 3.6 3.667s-1.612 3.666-3.6 3.666"
    />
  </svg>
)

export const IconPdf: React.FC<IconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    {...props}
  >
    <title>{'file_type_pdf2'}</title>
    <path
      d="m24.1 2.072 5.564 5.8v22.056H8.879V30h20.856V7.945L24.1 2.072"
      style={{
        fill: '#909090'
      }}
    />
    <path
      d="M24.031 2H8.808v27.928h20.856V7.873L24.03 2"
      style={{
        fill: '#f4f4f4'
      }}
    />
    <path
      d="M8.655 3.5h-6.39v6.827h20.1V3.5H8.655"
      style={{
        fill: '#7a7b7c'
      }}
    />
    <path
      d="M22.472 10.211H2.395V3.379h20.077v6.832"
      style={{
        fill: '#dd2025'
      }}
    />
    <path
      d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2.042 2.042 0 0 0 .647-.117 1.427 1.427 0 0 0 .493-.291 1.224 1.224 0 0 0 .335-.454 2.13 2.13 0 0 0 .105-.908 2.237 2.237 0 0 0-.114-.644 1.173 1.173 0 0 0-.687-.65 2.149 2.149 0 0 0-.409-.104 2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114M12.533 4.521c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175 1.71 1.71 0 0 0 .68-.491 1.939 1.939 0 0 0 .373-.749 3.728 3.728 0 0 0 .114-.949 4.416 4.416 0 0 0-.087-1.127 1.777 1.777 0 0 0-.4-.733 1.63 1.63 0 0 0-.535-.4 2.413 2.413 0 0 0-.549-.178 1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.062 1.062 0 0 1 .6.107 1.2 1.2 0 0 1 .324.4 1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513 1.756 1.756 0 0 1-.169.5 1.13 1.13 0 0 1-.363.36.673.673 0 0 1-.416.106M17.43 4.538H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"
      style={{
        fill: '#464648'
      }}
    />
    <path
      d="M21.781 20.255s3.188-.578 3.188.511-1.975.646-3.188-.511Zm-2.357.083a7.543 7.543 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14.216 14.216 0 0 0 1.658 2.252 13.033 13.033 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.787 10.787 0 0 1-.517 2.434 4.426 4.426 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444-.003.001-1.576 3.056-2.6 2.444ZM25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14.228 14.228 0 0 0-2.453.173 12.542 12.542 0 0 1-2.012-2.655 11.76 11.76 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.309 9.309 0 0 0 .665 2.338s-.425 1.323-.987 2.639-.946 2.006-.946 2.006a9.622 9.622 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945.374.508 1.683.623 2.853-.91a22.549 22.549 0 0 0 1.7-2.492s1.784-.489 2.339-.623 1.226-.24 1.226-.24 1.629 1.639 3.2 1.581 1.495-.939 1.485-1.035"
      style={{
        fill: '#dd2025'
      }}
    />
    <path
      d="M23.954 2.077V7.95h5.633l-5.633-5.873Z"
      style={{
        fill: '#909090'
      }}
    />
    <path
      d="M24.031 2v5.873h5.633L24.031 2Z"
      style={{
        fill: '#f4f4f4'
      }}
    />
    <path
      d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2.042 2.042 0 0 0 .647-.117 1.428 1.428 0 0 0 .493-.291 1.224 1.224 0 0 0 .332-.454 2.13 2.13 0 0 0 .105-.908 2.237 2.237 0 0 0-.114-.644 1.173 1.173 0 0 0-.687-.65 2.149 2.149 0 0 0-.411-.105 2.232 2.232 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.942.942 0 0 1-.524.114M12.456 4.444c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.677 2.677 0 0 0 1.028-.175 1.71 1.71 0 0 0 .68-.491 1.939 1.939 0 0 0 .373-.749 3.728 3.728 0 0 0 .114-.949 4.416 4.416 0 0 0-.087-1.127 1.777 1.777 0 0 0-.4-.733 1.63 1.63 0 0 0-.535-.4 2.413 2.413 0 0 0-.549-.178 1.282 1.282 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.062 1.062 0 0 1 .6.107 1.2 1.2 0 0 1 .324.4 1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a2.926 2.926 0 0 1-.033.513 1.756 1.756 0 0 1-.169.5 1.13 1.13 0 0 1-.363.36.673.673 0 0 1-.416.106M17.353 4.461h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"
      style={{
        fill: '#fff'
      }}
    />
  </svg>
)

export const IconLines: React.FC<IconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 10c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C17 8.398 17 7.932 17 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C15.398 4 14.932 4 14 4H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 5.602 3 6.068 3 7c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 10 5.068 10 6 10h8ZM18 20c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 18.398 21 17.932 21 17c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 14 18.932 14 18 14H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 15.602 3 16.068 3 17c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 20 5.068 20 6 20h12Z"
    />
  </svg>
)

export const IconVisa: React.FC<IconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    viewBox="0 -11 70 70"
    {...props}
  >
    <rect
      width={69}
      height={47}
      x={0.5}
      y={0.5}
      fill="#fff"
      stroke="#D9D9D9"
      rx={5.5}
    />
    <path
      fill="#172B85"
      fillRule="evenodd"
      d="M21.25 32.517h-4.24l-3.18-12.132c-.151-.558-.472-1.052-.943-1.284-1.176-.584-2.473-1.05-3.887-1.284v-.467h6.831c.943 0 1.65.701 1.768 1.516l1.65 8.751 4.239-10.267h4.122l-6.36 15.166Zm8.718 0h-4.005L29.26 17.35h4.005l-3.297 15.166Zm8.479-10.966c.118-.816.825-1.284 1.65-1.284 1.296-.117 2.708.118 3.887.7l.707-3.265A10.138 10.138 0 0 0 41.039 17c-3.887 0-6.715 2.1-6.715 5.017 0 2.218 2.003 3.382 3.418 4.084 1.53.7 2.119 1.166 2.001 1.866 0 1.05-1.178 1.517-2.355 1.517-1.414 0-2.828-.35-4.123-.935l-.707 3.268c1.414.582 2.944.817 4.359.817 4.358.115 7.067-1.984 7.067-5.134 0-3.967-5.537-4.2-5.537-5.949ZM58 32.517 54.82 17.35h-3.416c-.707 0-1.414.467-1.65 1.166l-5.888 14h4.123l.823-2.216h5.065l.472 2.216H58Zm-6.006-11.083 1.176 5.716h-3.298l2.122-5.716Z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconMasterCard: React.FC<IconProps> = ({ size, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 -11 70 70"
    {...props}
  >
    <rect
      width={69}
      height={47}
      x={0.5}
      y={0.5}
      fill="#fff"
      stroke="#D9D9D9"
      rx={5.5}
    />
    <path
      fill="#ED0006"
      fillRule="evenodd"
      d="M35.395 34.762a13.502 13.502 0 0 1-8.853 3.298c-7.537 0-13.648-6.181-13.648-13.806 0-7.625 6.11-13.806 13.648-13.806 3.378 0 6.47 1.242 8.852 3.298a13.502 13.502 0 0 1 8.853-3.298c7.537 0 13.648 6.181 13.648 13.806 0 7.625-6.11 13.806-13.648 13.806-3.378 0-6.47-1.242-8.852-3.298Z"
      clipRule="evenodd"
    />
    <path
      fill="#F9A000"
      fillRule="evenodd"
      d="M35.395 34.762a13.841 13.841 0 0 0 4.795-10.508 13.84 13.84 0 0 0-4.795-10.508 13.502 13.502 0 0 1 8.852-3.298c7.537 0 13.648 6.181 13.648 13.806 0 7.625-6.11 13.806-13.648 13.806-3.378 0-6.47-1.242-8.852-3.298Z"
      clipRule="evenodd"
    />
    <path
      fill="#FF5E00"
      fillRule="evenodd"
      d="M35.395 13.746a13.841 13.841 0 0 1 4.795 10.508c0 4.208-1.861 7.976-4.795 10.508A13.841 13.841 0 0 1 30.6 24.254c0-4.208 1.86-7.976 4.795-10.508Z"
      clipRule="evenodd"
    />
  </svg>
)
