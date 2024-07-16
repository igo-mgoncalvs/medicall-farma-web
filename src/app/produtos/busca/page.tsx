/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import search_logo from '@/assets/icons/search.svg'
import whatsapp from '@/assets/icons/whatsapp.svg'

import DropdownMenuProducts from '@/components/dropdownMenuProducts';

import styles from './styles.module.css'
import 'swiper/css';
import BASE_URL from '@/hooks/axios'
import { IProduct, IProductsBanners } from '@/utils/interfaces'
import SearchBar from '@/components/searchBar'

interface IProps {
  searchParams: {
    search: string
  }
}

function ProductFilterCategory({ searchParams }: IProps) {
  const [product, setProduct] = useState<IProduct[]>([])
  const [banners, setBannes] = useState<IProductsBanners>()

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
    const getProducts = async () => {
      await BASE_URL.get<IProduct[]>(`/search-products?search=${searchParams.search}`)   
        .then(({data}) => {
          setProduct(data)
        })
    }


    getProducts()
  }, [searchParams.search])
  
  return (
    <div className={styles.products_container}>
      <SearchBar />

      <DropdownMenuProducts />

      <div
        className={styles.products_list}
      >
        {product.length > 0 && (
          <p
            className={styles.products_title}
          >
            {`Resultado da busca: ${searchParams.search}`}
          </p>
        )}
          
        <div
          className={styles.products_list_content}
        >
          {product.map((product) => (
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
        src={banners?.detailsFirst || ''}
        width={100}
        height={100}
        alt='teste'
        className={styles.infos_banner}
      />
    </div>
  )
}

export default ProductFilterCategory