/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import mission from '@/assets/icons/mission.svg'
import products from '@/assets/icons/products.svg'
import values from '@/assets/icons/values.svg'

import directors_data from './directors.json'

import styles from './styles.module.css'
import 'swiper/css';

const banners_data = [
  {
    id: 0,
    image: 'https://i.postimg.cc/TP1VJZ1f/Rectangle-59.png',
    description: ''
  },
  {
    id: 1,
    image: 'https://i.postimg.cc/4xBvtJJW/Rectangle-60.png',
    description: ''
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/L8HBnqMq/Rectangle-61.png',
    description: ''
  }
]

const space_data = [
  {
    id: 0,
    image: 'https://i.postimg.cc/pTnLpKby/6cc3b1a18004f66e9ac8ac56622d9899.jpg',
    description: ''
  },
  {
    id: 1,
    image: 'https://i.postimg.cc/L6MwY996/6cbac0ad428641d9e5317b3574a988c1.jpg',
    description: ''
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/t44rW7Ly/c5d7498a2fc451d29e8120e8f753b605.jpg',
    description: ''
  }
]

const values_data = [
  {
    id: 0,
    image: mission,
    title: 'Missão',
    text: 'Qualidade e inovação em favorda vida.'
  },
  {
    id: 1,
    image: products,
    title: 'Produtos',
    text: 'Medicamentos Hospitalares, Equipamentos Médicos e Odontológicos, Materiais Médicos e Hospitalares, Dietas Enterais e Parenterais.'
  },
  {
    id: 2,
    image: values,
    title: 'Valores',
    text: 'Lealdade, pertencimento, responsabilidade, comprometimento proatividade e resultados.'
  }
]

function SobreNos () {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        modules={[Autoplay]}
      >
        {banners_data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={`banner ${item.description}`}
              className={styles.banner}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.history_container}>
        <p className={styles.history_title}>Mais de 15 anos de história</p>
        <p className={styles.history_text}>Há mais de 15 anos, estamos envolvidos no cenário de vendas e distribuição de materiais médicos e medicamentos hospitalares em todo o estado de São Paulo.<br /> Asseguramos a melhor experiência desde o primeiro contato, oferecendo uma variedade de produtos de marcas renomadas, tanto nacionais quanto internacionais. <br />Garantimos agilidade e pontualidade nas entregas por meio de um processo operacional de qualidade rigoroso.<br />Em 2023, a Medicall teve um crescimento de mais de 70%, e está em constante crescimento.</p>
      </div>

      <div className={styles.team_container}>
        <div>
          <p className={styles.team_title}>Nossa Equipe</p>
          <div className={styles.team_line}/>
          <p className={styles.team_text}>Nosso time de colaboradores continua crescendo, agora com mais de 40 pessoas dedicadas.<br /><br />Juntos, trabalhamos incansavelmente para oferecer resultados e serviços de excelência aos nossos clientes na Medicall.</p>
        </div>
      
        <img
          src={'https://i.postimg.cc/VL80s5x3/e4bdade24efa4155a16aefc2306373bf.jpg'}
          alt='foto da equipe'
          className={styles.team_image}
        />
      </div>

      <div className={styles.our_space_container}>
        <div className={styles.our_space_text_container}>
          <p className={styles.our_space_title}>Nosso Espaço</p>
          <div className={styles.our_space_line}/>

          <p className={styles.our_space_text}>Estamos em um prédio de 3 andares próprio de nossa empresa. Com um galpão de armazenamento de produtos com uma equipe de logistica preparada. Hoje nosso prédio comporta X pessoas trabalhando para entregar o melhor serviço aos nossos clientes.</p>
        </div>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            425: {
              spaceBetween: 22,
            },
          }}
          className={styles.our_space_images_container}
        >
          {space_data.map((item) => (
            <SwiperSlide
              key={item.id}
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`
                }}
                className={styles.our_space_image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.values_container}>
        <div className={styles.values_line}/>
        <div className={`${styles.values_line} ${styles.values_line_big}`}/>

        <div className={styles.values_list}>
          {values_data.map((item) => (
            <div
              key={item.id}
              className={styles.values_item}
            >
              <Image
                src={item.image}
                alt='icone dos valores'
                className={styles.values_icone}
              />
              <p className={styles.values_title}>{item.title}</p>
              <p className={styles.values_text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.directors_container}>
        {directors_data.data.map((item) => (
          <div key={item.id} className={styles.directors_item}>
            <img
              src={item.image}
              alt='imagem do diretor'
              className={styles.directors_image}
            />
            <div className={styles.directors_infos}>
              <p
                className={styles.directors_title}
              >
                {item.name}
              </p>
              {item.description.split('\n').map((text) => (
                <p
                  key={text}
                  className={styles.directors_text}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SobreNos