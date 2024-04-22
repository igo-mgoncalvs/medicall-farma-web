/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import ContactForm from "@/components/form";
import home_data from './home.json'

import styles from "./page.module.css";
import 'swiper/css';
import Services from "@/components/services";

interface IProducts {
  id: string
  type: string
}

interface IServices {
  id: string,
  title: string
  text: string
  icon: string
  image: string
}

interface IHome {
  main: {
    title: string
    text: string
    button_text: string
    button_link: string
    image: string | undefined
  },
  welcome: {
    title: string
    title_color: string
    text: string
    button_text: string
    button_link: string
    image: string
  },
  our_service: {
    image: string
    title: string
    list: IServices[]
  },
  products: {
    title: string
    button_text: string
    button_link: string
    list: IProducts[]
  },
  catalog: {
    title: string
    text: string
    button_text: string
    button_link: string
    image: string
  },
}

async function getData() { 
  return home_data.data
}
export default async function Home() {
  let activeSlide = 0

  const data = await getData()

  return (
    <div>
      <div className={styles.about_us}>
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
            href={'https://google.com'}
          >
            {data.main.button_text}
          </Link>
        </div>

        <img
          src={data.main.image}
          width={310}
          height={205}
          alt="banner-com-imagem-da-empresa"
          className={styles.banner}
        />
      </div>

      <div className={styles.welcome_container}>
        <div className={styles.welcome_left_side}>
          <h1 className={styles.welcome_title}>
            {data.welcome.title}
            <p className={styles.welcome_title_color}>
              {data.welcome.title_color}
            </p>
          </h1>
          <div className={styles.welcome_line_after} />
          <p className={styles.welcome_text}>
            {data.welcome.text}
          </p>
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

      <div className={styles.our_services_container}>
        <img
          src={data.our_service.image}
          className={styles.our_services_image}
          alt=""
        />

        <div>
          <p className={styles.our_services_title}>{data.our_service.title}</p>
          
          <Services data={data.our_service} />
          
        </div>
      </div>

      <div className={styles.products_container}>
        <div>
          <p className={styles.products_title}>{data.products.title}</p>
          <div className={styles.products_line} />
          
          <div className={styles.products_list}>
            {data.products.list.map((item) => (
              <p
                key={item.id}
                className={styles.products_list_item}
              >
                {item.type}
              </p>
            ))}
          </div>

          <Link
            className={styles.products_button}
            href={data.products.button_link}
          >
            {data.products.button_text} 
          </Link>
        </div>

        <img
          src="https://i.postimg.cc/wvFkjz9d/image.jpg"
          className={styles.our_services_image}
          alt=""
        />
      </div>

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
      
      <div className={styles.contact_form_container}>
        <p className={styles.contact_form_title}>Fale Conosco</p> 
        
        <ContactForm />
      </div>
    </div>
  );
}
