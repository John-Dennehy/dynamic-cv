import { ReactChild, ReactChildren } from 'react'
import styles from './Badge.module.scss'

interface BadgeProps {
  showcase?: boolean
  children: ReactChild | ReactChildren;
}

const Badge = ({showcase = false, children}: BadgeProps): JSX.Element => {
  return (
    <div className={
      showcase
        ? styles["showcase"]
        : styles["standard"]
    }>
      {children}
    </div>
  )
}

export default Badge
