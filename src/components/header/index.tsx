/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Image from "next/image";
import { usePathname } from 'next/navigation';

import styles from './styles.module.css'
import Link from 'next/link';

function Header () {
  const pathname = usePathname()

  const routes = [
    {
      id: 0,
      page: '/',
      title: 'Início'
    },
    {
      id: 1,
      page: 'sobre-nos',
      title: 'Sobre nós'
    },
    {
      id: 2,
      page: 'produtos',
      title: 'Produtos'
    },
    {
      id: 4,
      page: 'fornecedores',
      title: 'Fornecedores'
    },
  ]
  return (
    <div className={styles.main}>
      <img 
        alt="logo-medicall-farma"
        src={'https://i.postimg.cc/bN2Rw5BB/Logo-Medicall-Horizontal-Cor-1.png'}
        className={styles.logo}
      />

      <div
        className={styles.pages_container}
      >
        {routes.map((item) => (
          <Link
            href={item.page}
            key={item.id}
            className={`${styles.link} ${pathname === `/${item.page.replace('/', '')}` && styles.active}`}
          >
            {item.title}
          </Link>
        ))}
      </div>

        <a className={styles.button}>
          Contato
        </a>
    </div>
  )
}

export default Header