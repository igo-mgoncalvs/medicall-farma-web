/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { Collapse, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Link from 'next/link';

import menu from '@/assets/icons/Frame.svg'

import styles from './styles.module.css'
import Image from 'next/image';
import BASE_URL from '@/hooks/axios';
import { IGroups, ILogos } from '@/utils/interfaces';
import CollapseMenuMobile from '../collapseMenuMobile';


function Header ({ contact } : { contact: string }) {
  const [open, setOpen] = useState(false)
  const [logoColor, setLogoColor] = useState<string>('')

  const pathname = usePathname()
  const navigate = useRouter()
  const route = pathname.replace('/', '') || 'home'

  const getLogo = async () => {
    BASE_URL.get<ILogos>('/logos')
      .then(({data}) => {
        setLogoColor(data.logoColor)
      })
  }
  
  useEffect(() => {
    getLogo()
  }, [])

  useEffect(() => {
    if(open) {
      setOpen(false)
    }
  }, [route])

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
    }
  ]
  return (
    <div className={styles.main}>
      <div
        className={styles.container}
      >
        <Image 
          alt="logo-medicall-farma"
          src={logoColor}
          width={100}
          height={100}
          className={logoColor ? styles.logo : styles.logoDisable}
          onClick={() => navigate.push('/')}
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
              backgroundColor: '#0081FF',
            }
          }}
        >
          <div
            className={styles.menu_drawer}
          >
            {routes.map(item =>  item.title !== 'Produtos' ? (
              <a
                href={item.page}
                key={item.id}
                className={styles.menu_item}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            ): (
              <CollapseMenuMobile />
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
    </div>
  )
}

export default Header