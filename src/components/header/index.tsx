import React from 'react'
import Image from "next/image";

import Frame from '@/assets/icons/Frame.svg'

import styles from './styles.module.css'

function Header () {
  return (
    <div className={styles.main}>
      <Image 
        alt="logo-medicall-farma"
        src={'https://i.postimg.cc/bN2Rw5BB/Logo-Medicall-Horizontal-Cor-1.png'}
        width={165}
        height={40}
      />

      <Image 
        src={Frame}
        alt="icone-menu"
      />
    </div>
  )
}

export default Header