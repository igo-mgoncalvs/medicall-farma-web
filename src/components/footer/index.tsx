/* eslint-disable @next/next/no-img-element */
'use client'

import BASE_URL from "@/hooks/axios"
import { ILogos } from "@/utils/interfaces"
import { useEffect, useState } from "react"

import styles from './styles.module.css'
import Image from "next/image"

export default function Footer () {
  const [logoWhite, setLogoWhite] = useState<string>('')

  const getLogo = async () => {
    BASE_URL.get<ILogos>('/logos')
      .then(({data}) => {
        setLogoWhite(data.logoWhite)
      })
  }

  useEffect(() => {
    getLogo()
  }, [])

  return logoWhite && (
    <footer className={styles.footer}>
      <Image
        src={logoWhite}
        alt="logo branco"
        width={100}
        height={100}
        className={styles.logo}
      />
    </footer>
  )
}