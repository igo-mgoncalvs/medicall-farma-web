/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image';

import MainBanners from '@/components/aboutUs/banners/mainBanners';
import SpaceBanners from '@/components/aboutUs/spaceBanners/spaceBanners';
import BASE_URL from '@/hooks/axios';

import styles from './styles.module.css'

interface IBanners {
  id: string
  image: string
  description: string
  aboutUsId: string
}

interface IAboutUs {

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
    enable: boolean
  },
  space: {
    id: string
    title: string
    text: string
    enable: boolean
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
    enable: boolean
  },
  values: {
    id: string
    image: string
    title: string
    text: string
    aboutUsId: string
  }[]
}


function SobreNos () {
  const [interfaceData, setInterfaceData] = useState<IAboutUs>()
  const [banners, setBanners] = useState<IBanners[]>([])

  async function getData() {
    Promise.all([
      BASE_URL.get<IAboutUs>('about-us-interface'),
      BASE_URL.get<IBanners[]>('about-us-banners')
    ])
      .then(([data, bannersInterface]) => {
        setInterfaceData(data.data)
        setBanners(bannersInterface.data)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return interfaceData && (
    <div className={styles.container}>
      {banners.length > 0 && (
        <MainBanners data={banners} />
      )}

      {interfaceData.history.enable && (
        <div className={styles.history_container}>
          <p className={styles.history_title}>
            {interfaceData.history.title}
          </p>
          <div className={styles.history_text}>
            {interfaceData.history.text.split('\n').map((item) =>(
              <p key={item}>
                {item || <br />}
              </p>
            ))}
          </div>
        </div>
      )}

      {interfaceData.team.enable && (
        <div className={styles.team_container}>
          <div className={styles.team_center}>
            <div className={styles.team_infos}>
              <p className={styles.team_title}>
                {interfaceData.team.title}
              </p>
              <div className={styles.team_line}/>
              <div className={styles.team_text}>
                {interfaceData.team.text.split('\n').map((item) =>(
                  <p key={item}>
                    {item || <br />}
                  </p>
                ))}
              </div>
            </div>
          
            <img
              src={interfaceData.team.image}
              alt='foto da equipe'
              className={styles.team_image}
            />
          </div>
        </div>
      )}

      {interfaceData.space.enable && (
        <div className={styles.our_space_container}>
          <div className={styles.our_space_text_container}>
            <p className={styles.our_space_title}>
              {interfaceData.space.title}
            </p>
            <div className={styles.our_space_line}/>

            <div className={styles.our_space_text}>
              {interfaceData.space.text.split('\n').map((item) =>(
                <p key={item}>
                  {item || <br />}
                </p>
              ))}
            </div>
          </div>
          
          <SpaceBanners data={interfaceData.space.images} />
        </div>
      )}

      {interfaceData.values.length > 0 && (
        <div className={styles.values_container}>
          <div className={styles.values_center}>
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
        </div>
      )}

      {interfaceData.directors.length > 0 && (
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
      )}
    </div>
  )
}

export default SobreNos