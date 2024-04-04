/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "./page.module.css";
import 'swiper/css';
import ContactForm from "@/components/form";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";

const services_data = [
  {
    id: 0,
    title: 'Entrega',
    text: 'Temos uma equipe que é responsável pela entrega dos materiais dos nossos clientes, fazemos a entrega até a clínica/hospital com segurança e com responsabilidade.',
    icon: 'https://i.postimg.cc/yx46jcfT/Vector.png',
    image: 'https://i.postimg.cc/506WZ3KV/b0da6d09b44540a6db7b808aec3f1581.png',
  },
  {
    id: 1,
    title: 'Entrega',
    text: 'Temos uma equipe que é responsável pela entrega dos materiais dos nossos clientes, fazemos a entrega até a clínica/hospital com segurança e com responsabilidade.',
    icon: 'https://i.postimg.cc/yx46jcfT/Vector.png',
    image: 'https://i.postimg.cc/506WZ3KV/b0da6d09b44540a6db7b808aec3f1581.png',
  },
  {
    id: 2,
    title: 'Entrega',
    text: 'Temos uma equipe que é responsável pela entrega dos materiais dos nossos clientes, fazemos a entrega até a clínica/hospital com segurança e com responsabilidade.',
    icon: 'https://i.postimg.cc/yx46jcfT/Vector.png',
    image: 'https://i.postimg.cc/506WZ3KV/b0da6d09b44540a6db7b808aec3f1581.png',
  },
]

const products_types = [
  {
    id: 0,
    type: 'Medicamentos Hospitalares;'
  },
  {
    id: 1,
    type: 'Equipamentos Médicos e Odontológicos;'
  },
  {
    id: 2,
    type: 'Dietas Enterais e Parenterais;'
  }
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState<Number>(0)

  const size = useWindowSize()

  return (
    <div>
      <div className={styles.about_us}>
        <div className={styles.infos_container}>
          <div className={styles.text_container}>
            <p className={styles.title}>Medicall Farma</p>
            <p className={styles.text}>Há mais de 15 anos no mercado de vendas e distribuição de materiais médicos.</p>
          </div>
          <Link
            className={styles.button}
            href={'sobre-nos'}
          >
            Saber Mais
          </Link>
        </div>

        <img
          src={'https://i.postimg.cc/W3KPKQxs/0c1283061a209c3d121ad21382548543.jpg'}
          width={310}
          height={205}
          alt="banner-com-imagem-da-empresa"
          className={styles.banner}
        />
      </div>

      <div className={styles.welcome_container}>
        <div className={styles.welcome_left_side}>
          <h1 className={styles.welcome_title}>Bem vindo a 
            <p className={styles.welcome_title_color}>Medicall Farma</p>
          </h1>
          <div className={styles.welcome_line_after} />
          <p className={styles.welcome_text}>
            Somos uma empresa de distribuição de materiais hospitalares há mais de 15 anos. Obtivemos um crescimento de 70% desde 2023.
          </p>
          <div className={styles.welcome_line_before} />
          <a className={styles.welcome_button}>Fale Conosco</a>
        </div>

        <img
          src={'https://i.postimg.cc/wvFkjz9d/image.jpg'}
          alt="banner-com-imagem-da-empresa"
          className={styles.welcome_image}
        />
      </div>

      <div className={styles.our_services_container}>
        <img
          src="https://i.postimg.cc/W4j708p8/image.jpg"
          className={styles.our_services_image}
          alt=""
        />

        <div>
          <p className={styles.our_services_title}>Nossos serviços</p>
          {size.width < 768 ? (
            <Swiper
              spaceBetween={20}
              slidesPerView={1.15}
              className={styles.our_services_list}
            >
              {services_data.map(item => (
                <SwiperSlide
                  key={item.id}
                  className={styles.mobile_service_item}
                >
                  {({ isActive }) => {
                    if(isActive) {
                      setActiveSlide(item.id) 
                    }
                    return (
                      <>
                        <Image 
                          src={item.image}
                          width={120}
                          height={120}
                          alt="icone-do-serviço"
                          className={styles.mobile_service_image}
                        />
                        <div>
                          <div className={styles.our_services_item_title}>
                            <Image 
                              src={item.icon}
                              width={21}
                              height={16}
                              alt="icone-do-serviço"
                            />
                            <p>{item.title}</p>
                          </div>
                          <p className={styles.our_services_item_text}>{item.text}</p>
                        </div>
                      </>
                    )}}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div
              className={styles.mobile_service_item_list}
            >
              {services_data.map(item => (
                <div key={item.id} className={styles.mobile_service_item}>
                  <div className={styles.our_services_item_title}>
                    <img 
                      src={item.icon}
                      alt="icone-do-serviço"
                      className={styles.our_services_item_icone}
                    />
                    <p>{item.title}</p>
                  </div>
                  <p className={styles.our_services_item_text}>{item.text}</p>
                </div>
              ))}
            </div>
          )}

          {size.width < 768 && (
            <div className={styles.our_services_card_indicator_container}>
              {services_data.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.our_services_card_indicator} ${activeSlide === item.id && styles.our_services_card_indicator_active}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.products_container}>
        <div>
          <p className={styles.products_title}>Tipos de Produtos</p>
          <div className={styles.products_line} />
          
          <div className={styles.products_list}>
            {products_types.map((item) => (
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
            href={'produtos'}
          >
            Conhecer Produtos
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
            Baixe nosso catálogo
          </p>
          <p className={styles.catalog_text}>
            Confira nossa linha completa de produtos
          </p>

          <a className={styles.catalog_button}>Baixar</a>
        </div>

        <img
          src={'https://i.postimg.cc/6Qz8Zd84/Catalogo-celular-1.png'}
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
