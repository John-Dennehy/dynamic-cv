import React, { ReactChild, ReactChildren } from 'react'
import Styles from '../styles/CV.module.scss'
import Image from 'next/image'

interface Props {
  name: string
  label: string
  iconSrc?: string
  children?: ReactChild | ReactChildren
}

const SectionContainer = ({ name, label, iconSrc, children }: Props): JSX.Element => (
  <section id={name} className={Styles["section-container"]}>
    <div className={Styles["section-title"]}>
      {iconSrc && <Image className="icon" src={iconSrc} height={28} width={28} />}
      <h2> {label} </h2>
    </div>
    {children}
  </section>
)

export default SectionContainer
