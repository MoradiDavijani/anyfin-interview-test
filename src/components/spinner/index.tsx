import classnames from 'classnames'
import styles from './spinner.module.css'

const SVG_SIZE = 50
const SVG_CENTER = SVG_SIZE / 2

type SpinnerProps = {
  thickness?: number
  size?: number
  className?: string
}

function Spinner({ thickness = 4, size = 32, className }: SpinnerProps) {
  return (
    <svg
      style={{ width: size, height: size }}
      viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      className={classnames(styles.spinner, className)}
    >
      <circle
        className={styles.spinner__circle}
        cx={SVG_CENTER}
        cy={SVG_CENTER}
        r={SVG_CENTER - thickness}
        fill="none"
        strokeWidth={thickness}
      />
    </svg>
  )
}

export default Spinner
