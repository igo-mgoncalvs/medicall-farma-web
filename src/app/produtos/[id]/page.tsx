/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import products_data from '@/app/produtos/products.json'

import goBack from '@/assets/icons/goBack.svg'

import styles from './styles.module.css'
import { useRouter } from 'next/navigation'

interface IProduct {
  id: string,
  image: string
  name: string
  link: string
  description: string
}

function ProductsDetails ({ params }: { params: { id: string } }) {
  const [productDetail, setProductDetail] = useState<IProduct |  undefined>()

  const navigation = useRouter()

  useEffect(() => {
    products_data.data.forEach((item) => {
      const findItem = item.products_list.find(productItem => productItem.id === params.id)

      if(findItem) {
        setProductDetail(findItem)
      }
    })

  }, [params, productDetail])

  return (
    <div className={styles.products_details}>
      <div
        className={styles.product_goBack_container}
        onClick={() => navigation.back()}
      >
        <Image
          src={goBack}
          className={styles.product_goBack_icon}
          alt='icone de voltar'
        />

        <p>Voltar</p>
      </div>

      {productDetail && (

        <div className={styles.products_details_container}>
          <img
            alt={`imagem do produto ${productDetail?.name}`}
            src={productDetail?.image}
            className={styles.product_image}
          />
          <div>
            <div className={styles.text_container}>
              <p className={styles.title}>
                {productDetail?.name}
              </p>
              <p className={styles.text}>
                {productDetail?.description}
              </p>
            </div>

            <div className={styles.buttons_container}>
              <a
                className={styles.contac_button}
                href={productDetail?.link}
                target='_blank'
                >
                Entrar em contato
              </a>
              <a className={styles.catalog_button}
                target='_blank'
                href={productDetail?.link}
              >
                Baixar catálogo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsDetails