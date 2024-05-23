/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import search_logo from '@/assets/icons/search.svg'
import whatsapp from '@/assets/icons/whatsapp.svg'

import styles from './styles.module.css'
import 'swiper/css';
import { FreeMode, Mousewheel } from 'swiper/modules';

interface IProduct {
  id: string
  image: string 
  name: string
  link: string
  description: string
  route: string
  summary: string
  active: boolean
}

interface IGroups {
  id: number,
  group_name: string,
  active: boolean
  products_list: IProduct[]
}

function PageProductsClient ({ data }: { data: IGroups[] }) {
  const [search, setSearch] = useState<string>('')
  const [procutsData, setProductsData] = useState(data)
  
  const searchRule = useCallback((name: string) => {
    const regex = new RegExp(search, 'i');
    return regex.test(name);
  }, [search])

  useEffect(() => {
    const searchList: IGroups[] = []
    
    data.forEach((groups) => {
      const searchProduct = groups.products_list.filter((product) => searchRule(product.name))

      if(searchProduct.length > 0) {
        searchList.push({
          id: groups.id,
          group_name: groups.group_name,
          products_list: searchProduct,
          active: groups.active
        })
      }
    })
    
    setProductsData(searchList)
}, [search, searchRule, data]);

  return (
    <div className={styles.products_container}>
      <div className={styles.products_search_bar}>
        <Image
          width={16}
          height={16}
          src={search_logo}
          alt='icone de pesquisa'
          className={styles.products_search_bar_icone}
        />
        <input 
          placeholder='Pesquise por produtos'
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>

      {procutsData?.map((item) => 
        (item.products_list.filter(pro => pro.active).length > 0 && item.active) && (
        <div
          key={item?.id}
          className={styles.product_group}
        >
          <p className={styles.products_title}>
            {item?.group_name}
          </p>

          <Swiper
            slidesPerView={'auto'}
            spaceBetween={12}
            className={styles.products_list}
            freeMode={true}
            slidesOffsetBefore={12}
            slidesOffsetAfter={12}
            modules={[FreeMode]}
            breakpoints={{
              425: {
                slidesOffsetBefore: 12,
                spaceBetween: 22,
              },
              768: {
                spaceBetween: 20,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20
              },
              1024: {
                spaceBetween: 20,
                slidesOffsetBefore: 40,
                slidesOffsetAfter: 40
              },
              1440: {
                spaceBetween: 20,
                slidesOffsetBefore: 40,
                slidesOffsetAfter: 10,
              },
              2560: {
                spaceBetween: 30,
                slidesOffsetBefore: 80,
                slidesOffsetAfter: 80
              }
            }}
          >
            {item?.products_list?.map((product) => product.active && (
              <SwiperSlide
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
                        href={`produtos/${product.route}`}
                      >
                        Saiba mais
                      </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  )
}

export default PageProductsClient