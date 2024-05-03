/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { Drawer } from '@mui/material';
import Link from 'next/link';

import menu from '@/assets/icons/Frame.svg'

import styles from './styles.module.css'
import Image from 'next/image';

function Header ({ contact } : { contact: string }) {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  const route = pathname.replace('/', '') || 'home'

  const routes = [
    {
      id: 0,
      page: '/',
      activeRoute: 'home',
      title: 'Início'
    },
    {
      id: 1,
      page: '/sobre-nos',
      activeRoute: 'sobre-nos',
      title: 'Sobre nós'
    },
    {
      id: 2,
      page: '/produtos',
      activeRoute: 'produtos',
      title: 'Produtos'
    },
    {
      id: 4,
      page: '/fornecedores',
      activeRoute: 'fornecedores',
      title: 'Fornecedores'
    },
    {
      id: 5,
      page: '/fornecedores/#politica-de-privacidade',
      activeRoute: 'politica-de-privacidade',
      title: 'Política da qualidade'
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
            className={`${styles.link} ${route.includes(item.activeRoute) && styles.active}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={styles.right_menu}
      >
        <Image
          alt=''
          src={menu}
        />
      </div>

      <Drawer
        open={open}
        anchor='right'
        onClose={() => setOpen(false)}
        sx={{
          '.MuiDrawer-paper': {
            backgroundColor: '#0081FF'
          }
        }}
      >
        <div
          className={styles.menu_drawer}
        >
          {routes.map(item => (
            <a
              href={item.page}
              key={item.id}
              className={styles.menu_item}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      </Drawer>

      <a
        className={styles.button}
        href={contact}
        target='_blank'
      >
        Contato
      </a>
    </div>
  )
}

export default Header