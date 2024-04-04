/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import search_logo from '@/assets/icons/search.svg'
import whatsapp from '@/assets/icons/whatsapp.svg'

import products_data from './products.json'

import styles from './styles.module.css'
import 'swiper/css';

interface IProduct {
  id: number
  image: string 
  name: string
  link: string
  description: string
}

interface IProducts {
  id: number,
  group_name: string,
  products_list: IProduct[]
}

function Products () {
  const [search, setSearch] = useState<string>('')
  const [procutsData, setProductsData] = useState(products_data.data)
  
  const searchRule = useCallback((name: string) => {
    const regex = new RegExp(search, 'i');
    return regex.test(name);
  }, [search])
  
  useEffect(() => {
    const searchList: IProducts[] = []
    
    products_data.data.forEach((groups) => {
      const searchProduct = groups.products_list.filter((product) => searchRule(product.name))

      if(searchProduct.length > 0) {
        searchList.push({
          id: groups.id,
          group_name: groups.group_name,
          products_list: searchProduct
        })
      }
    })
    
    setProductsData(searchList)
}, [search, searchRule]);

  return (
    <div className={styles.products_container}>
      <div className={styles.products_search_bar}>
        <Image
          width={16}
          height={16}
          src={search_logo}
          alt='icone de pesquisa'
        />
        <input 
          placeholder='Pesquise por produtos'
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>

      {procutsData?.map((item) => (
        <div
          key={item?.id}
          className={styles.product_group}
        >
          <p className={styles.products_title}>
            {item?.group_name}
          </p>

          <Swiper
            slidesPerView={2}
            spaceBetween={12}
            className={styles.products_list}
          >
            {item?.products_list?.map((product) => (
              <SwiperSlide
                key={product.id}
                className={styles.product_item}
              >
                <img 
                  src={product.image}
                  alt={`imagem do ${product.name}`}
                  className={styles.product_image}
                />
                <p className={styles.product_name}>{product.name}</p>
                <p className={styles.product_description}>{product.description}</p>
                <div
                  className={styles.product_button}
                >
                  <Image
                    src={whatsapp}
                    width={14}
                    height={14}
                    alt='icone whatsapp'
                  />
                  <a
                    className={styles.product_button_text}
                    href={product.link}
                    target='_blank'
                  >
                    Adquirir
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  )
}

export default Products