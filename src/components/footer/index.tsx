/* eslint-disable @next/next/no-img-element */
'use client'

import BASE_URL from "@/hooks/axios"
import { ILogos } from "@/utils/interfaces"
import { useEffect, useState } from "react"

import styles from './styles.module.css'

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

  return (
    <footer className={styles.footer}>
      <img
        src={logoWhite}
        alt="logo branco"
        className={styles.logo}
      />
    </footer>
  )
}