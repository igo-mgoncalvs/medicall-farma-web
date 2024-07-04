/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useCallback, useMemo } from 'react'
import Image from 'next/image'

import whatsapp from '@/assets/icons/whatsapp.svg'

import styles from './styles.module.css'
import 'swiper/css';
import DropdownMenuProducts from '../dropdownMenuProducts';
import SearchBar from '../searchBar'

interface IProduct {
  id: string
  index: number,
  image: string
  imageId: string
  route: string
  name: string
  favorit: boolean
  subTitle: string
  link: string
  summary: string
  whatsapp: string
  description: string
  active: boolean,
  productsGroupsId: string
  categoryId: string
}

function PageProductsClient ({ data }: { data: IProduct[] }) {
  
  return (
    <div className={styles.products_container}>

      <SearchBar />

      <DropdownMenuProducts />

      <Image
        src={'https://i.postimg.cc/VvVP1nLQ/1-1.png'}
        width={100}
        height={100}
        alt='teste'
        className={styles.infos_banner}
      />


      <div
        className={styles.products_list}
      >
        <p
          className={styles.products_title}
        >
          Destaque
        </p>
          
        <div
          className={styles.products_list_content}
        >
          {data.map((product) => (
            <div
              key={product.id}
              className={styles.product_item}
            >
              <div className={styles.image_container}>
                <img 
                  src={product.image}
                  alt={`imagem do ${product.name}`}
                  className={styles.product_image}
                />
              </div>
              <p className={styles.product_name}>{product.name}</p>
              <p className={styles.product_description}>{product.summary}</p>
              <div
                className={styles.product_buttons_container}
              >
                <div
                  className={styles.product_button}
                >
                  <Image
                    src={whatsapp}
                    sizes='(min-width: 1440px) 20px, 20px'
                    alt='icone whatsapp'
                    className={styles.product_item_icone}
                  />
                  <a
                    className={styles.product_button_text}
                    href={product.link}
                    target='_blank'
                  >
                    Adquirir
                  </a>
                </div>
                <div
                  className={`${styles.product_button} ${styles.product_button_blue}`}
                >
                    <a
                      className={styles.product_button_text}
                      href={`produtos/${product.id}`}
                    >
                      Saiba mais
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={'https://i.postimg.cc/05XN9HQS/Group-65.png'}
        width={100}
        height={100}
        alt='teste'
        className={styles.infos_banner}
      />
    </div>
  )
}

export default PageProductsClient