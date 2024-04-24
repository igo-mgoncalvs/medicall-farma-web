/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Image from 'next/image';

import mission from '@/assets/icons/mission.svg'
import products from '@/assets/icons/products.svg'
import values from '@/assets/icons/values.svg'
import MainBanners from '@/components/aboutUs/banners/mainBanners';
import SpaceBanners from '@/components/aboutUs/spaceBanners/spaceBanners';
import BASE_URL from '@/hooks/axios';

import styles from './styles.module.css'

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

interface IAboutUs {
  banners: {
      id: string
      image: string
      description: string
      aboutUsId: string
    }[], 
  directors: {
    id: string
    title: string
    text: string
    image: string
    aboutUsId: string
  }[]
  history: {
    id: string
    title: string
    text: string
  },
  space: {
    id: string
    title: string
    text: string
    images: {
      id: string
      image: string
    }[]
  },
  team: {
    id: string
    title: string
    text: string
    image: string
  },
  values: {
    id: string
    image: string
    title: string
    text: string
    aboutUsId: string
  }[]
}

async function getData() {
  return await BASE_URL.get<IAboutUs>('about-us-interface')
}

async function SobreNos () {
  const interfaceData = (await getData()).data

  return (
    <div>
      
      <MainBanners data={interfaceData.banners} />

      <div className={styles.history_container}>
        <p className={styles.history_title}>
          {interfaceData.history.title}
        </p>
        <p className={styles.history_text}>
          {interfaceData.history.text}
        </p>
      </div>

      <div className={styles.team_container}>
        <div>
          <p className={styles.team_title}>
            {interfaceData.team.title}
          </p>
          <div className={styles.team_line}/>
          <p className={styles.team_text}>
            {interfaceData.team.text}
          </p>
        </div>
      
        <img
          src={interfaceData.team.image}
          alt='foto da equipe'
          className={styles.team_image}
        />
      </div>

      <div className={styles.our_space_container}>
        <div className={styles.our_space_text_container}>
          <p className={styles.our_space_title}>
            {interfaceData.space.title}
          </p>
          <div className={styles.our_space_line}/>

          <p className={styles.our_space_text}>
            {interfaceData.space.text}
          </p>
        </div>
        
        <SpaceBanners data={interfaceData.space.images} />
      </div>

      <div className={styles.values_container}>
        <div className={styles.values_line}/>
        <div className={`${styles.values_line} ${styles.values_line_big}`}/>

        <div className={styles.values_list}>
          {interfaceData.values.map((item) => (
            <div
              key={item.id}
              className={styles.values_item}
            >
              <Image
                src={item.image}
                width={40}
                height={40}
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
        {interfaceData.directors.map((item) => (
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
                {item.title}
              </p>
              {item.text.split('\n').map((text) => (
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