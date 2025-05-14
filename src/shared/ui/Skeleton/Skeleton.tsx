import React from 'react'
import styles from './Skeleton.module.scss'

interface Props {
    style?: React.CSSProperties;
}

export function Skeleton({style}: Props) {
  return (
    <div style={style} className={styles.sceleton}></div>
  )
}