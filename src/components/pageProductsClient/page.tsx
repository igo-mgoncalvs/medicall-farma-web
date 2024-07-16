/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useCallback, useMemo, useEffect } from 'react'
import Image from 'next/image'

import whatsapp from '@/assets/icons/whatsapp.svg'

import styles from './styles.module.css'
import 'swiper/css';
import DropdownMenuProducts from '../dropdownMenuProducts';
import SearchBar from '../searchBar'
import { IProduct, IProductsBanners } from '@/utils/interfaces'
import BASE_URL from '@/hooks/axios'

function PageProductsClient ({ data }: { data: IProduct[] }) {
  const [banners, setBannes] = useState<IProductsBanners>()
  const [width, setWidth] = useState<number>(0)

  const getImages = () => {
    BASE_URL.get<IProductsBanners>('/products-page-banners')
      .then((response) => {
        setBannes(response.data)
      })
  }

  useEffect(() => {
    getImages()
  }, [])

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [window])
  
  return (
    <div className={styles.products_container}>

      <SearchBar />

      <DropdownMenuProducts />

      <Image
        src={width <= 500 ? (banners?.faviritFirstMobile || "") : (banners?.faviritFirst || '')}
        width={100}
        height={100}
        alt=''
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
                      href={`/produtos/${product.id}`}
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
        src={width <= 500 ? (banners?.faviritSecoundMobie || "") : (banners?.faviritSecound || '')}
        width={100}
        height={100}
        alt=''
        className={styles.infos_banner}
      />
    </div>
  )
}

export default PageProductsClient