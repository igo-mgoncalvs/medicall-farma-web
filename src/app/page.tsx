/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";

import ContactForm from "@/components/form";
import BASE_URL from "@/hooks/axios";

import styles from "./page.module.css";
import 'swiper/css';
import Image from "next/image";

interface IProducts {
  id: string
  name: string
}

interface IHome {
  main: {
    title: string
    text: string
    button_text: string
    button_link: string
    image: string | undefined
    enable: boolean
  },
  welcome: {
    title: string
    title_color: string
    text: string
    button_text: string
    button_link: string
    image: string
    enable: boolean
  },
  products: {
    title: string
    image: string
    imageId: string
    button_text: string
    button_link: string
    products_list: IProducts[]
    enable: boolean
  },
  catalog: {
    title: string
    text: string
    button_text: string
    button_link: string
    image: string
    enable: boolean
  },
}

export default function Home() {
  const [data, setData] = useState<IHome>()
  const [productsList, setProductsList] = useState<IProducts[]>()

  async function getData() { 
    Promise.all([
      BASE_URL.get<IHome>('/home'),
      BASE_URL.get<IProducts[]>('/home-products-list'),
    ])
      .then(([home, products]) => {
        setData(home.data)
        setProductsList(products.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return data && (
    <div>
      {data.main.enable && (
        <div className={styles.about_us}>
          <div
            className={styles.static_background}
            style={{
              backgroundImage: `url(${data.main.image})`
            }}
          >
            <div className={styles.infos_container}>
              <div className={styles.text_container}>
                <p className={styles.title}>
                  {data.main.title}
                </p>
                <p className={styles.text}>
                  {data.main.text}
                </p>
              </div>
              <Link
                className={styles.button}
                href={data.main.button_link}
              >
                {data.main.button_text}
              </Link>
            </div>
          </div>
        </div>
      )}

      {data.welcome.enable && (
        <div className={styles.welcome_container}>
          <div className={styles.welcome_left_side}>
            <h1 className={styles.welcome_title}>
              {data.welcome.title}
              <p className={styles.welcome_title_color}>
                {data.welcome.title_color}
              </p>
            </h1>
            <div className={styles.welcome_line_after} />
            {data.welcome.text.split('\n').map((item) =>(
              <p key={item} className={styles.welcome_text}>
                {item || <br />}
              </p>
            ))}
            <div className={styles.welcome_line_before} />
            <a
              className={styles.welcome_button}
              target="_blank"
              href={data.welcome.button_link}
            >
              {data.welcome.button_text}
            </a>
          </div>

          <img
            src={data.welcome.image}
            alt="banner-com-imagem-da-empresa"
            className={styles.welcome_image}
          />
        </div>
      )}

      {data.products?.enable && (
        <div className={styles.products_container}>

        <div className={styles.products_list_container}>
          <div>
            <div className={styles.products_title}>
              <p>
                {data.products?.title}
              </p>

              <span className={styles.products_line} />
            </div>
            
            <div className={styles.products_itens_container}>
              <div className={styles.products_list}>
                {productsList?.map((item) => (
                  <div
                    key={item.id}
                    className={styles.products_list_item}
                  >
                    <span />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

              <a
                className={styles.products_button}
                href={data.products.button_link}
              >
                {data.products.button_text}
              </a>
            </div>
          </div>

            <Image
              src={data.products.image}
              width={100}
              height={100}
              alt=""
              className={styles.products_image}
            />
          </div>
        </div>
      )}

      {data.catalog.enable && (
        <div className={styles.catalog_container}>
          <div>
            <p className={styles.catalog_title}>
              {data.catalog.title}
            </p>
            <p className={styles.catalog_text}>
              {data.catalog.text}
            </p>

            <a
              className={styles.catalog_button}
              target="_blank"
              href={data.catalog.button_link}
            >
              {data.catalog.button_text}
            </a>
          </div>

          <img
            src={data.catalog.image}
            alt="imagem de referencia do catalogo"
            className={styles.catalog_image}
          />
        </div>
      )}

      <span className={styles.divider}/>
      
      <div className={styles.contact_form_container}>
        <p className={styles.contact_form_title}>Fale Conosco</p> 
        
        <ContactForm />
      </div>
    </div>
  );
}
