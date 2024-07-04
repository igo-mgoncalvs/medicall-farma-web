'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './styles.module.css'

function MenuMobile() {
  const pathname = usePathname()

  const routes = [
    {
      id: 0,
      page: '/',
      title: 'Início'
    },
    {
      id: 1,
      page: '/sobre-nos',
      title: 'Sobre nós'
    },
    {
      id: 2,
      page: '/produtos',
      title: 'Produtos'
    },
    {
      id: 4,
      page: '/fornecedores',
      title: 'Fornecedores'
    },
  ]

  return (
    <div
      className={styles.menu_container}
    >
      {routes.map((item) => item.title !== 'Produtos' && (
        <Link
          href={item.page}
          key={item.id}
          className={`${styles.link} ${pathname === `/${item.page.replace('/', '')}` && styles.active}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default MenuMobile